/**
 * 项目计划controller
 */
Ext.define('iEPM.controller.ProjectPlan', {
	extend : 'Ext.app.Controller',

	requires : [],

	config : {
		refs : {
			indexNav : 'indexNav',
			main : 'main',
			projectPlanList : 'projectPlanList',
			projectPlanListDv : 'projectPlanList list',
			planActionSheet : 'planActionSheet',
			projectHis : 'projectHis',
			planCommitBtn : 'projectPlanCommit > titlebar button[align=right]',
			taskStandardList : 'projectPlanCommit > list',
			projectPlanCommit : 'projectPlanCommit',
			projectPlanAnnexList : 'projectPlanAnnexList list'
		},
		control : {
			projectPlanListDv : {
				itemsingletap : 'projectPlanListDvTap'
			},
			projectPlanAnnexList : {
				itemsingletap : 'projectPlanAnnexListTap'
			},
			planActionSheet : {
				change : 'goToProjectPlanCommit'
			},
			planCommitBtn: {
				tap : 'planCommitFn'
			},
			taskStandardList : {
				itemsingletap : 'taskStandardListTap'
			}
		}
	},
	/**
	 * 项目计划列表点击事件
	 * 
	 * @param obj
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	projectPlanListDvTap : function(obj, index, target, record, e, eOpts) {
		var className = e.target.className,
			taskID = record.get('TaskID'),
			projectStatus = Global.projectState,
			recordStatus = record.get('RecordStatus');
			
		
		Global.planTaskID = record.get('TaskID');
		Global.isKeyTask = record.get('IsKeyTask');
		Global.taskName = record.get('TaskName');
		Global.recordStatus = recordStatus;
		
		if(className == 'projectPhaseListImg'){
			if (!this.projectPlanAnnexList) {
				this.projectPlanAnnexList = Ext.widget('projectPlanAnnexList');
			}
			this.getIndexNav().push(this.projectPlanAnnexList);
			
			var list = this.projectPlanAnnexList.down('list'),
				store = Ext.getStore('ProjectPlanAnnexList'),
				params = {
					ProjectID : Global.projectId,
					TaskID : taskID
				};
			iEPM.util.PubOperation.pubListLoad(store, params, true, true, 'projectPlanAnnexList'+params.ProjectID+params.TaskID,null,list);
		// 项目计划操作历史
		}else if(className == 'checkPoint-enable' || className == 'checkPoint-disable'){
			if (!this.projectHis) {
				this.projectHis = Ext.widget('projectHis');
			}
			this.getIndexNav().push(this.projectHis);
			
			var list =  projectPlanCtr.getProjectHis().down('list'),
				panel = list.down('label[name=hisSummary]'),
				proHisStore = Ext.getStore('ProjectHis'),
				editBtn = this.projectHis.down('button[name=editBtn]'),
				params = {
					TaskID : taskID
				};
		
			// set Summary data
			panel.setRecord(record);
					
			// list load
			iEPM.util.PubOperation.pubListLoad(proHisStore, params, true, true, 'projectHis'+params.TaskID, null, list);
			// 项目已定版
			if(projectStatus == 'Processing'){
				// 任务未完成
				if(recordStatus != 'Completed'){
					editBtn.setHidden(false);
				}else{
					editBtn.setHidden(true);
				}
			}else{
				editBtn.setHidden(true);
			}
		}else{
			// 项目已定版
			if(projectStatus == 'Processing'){
				// 任务未完成
				if(recordStatus != 'Completed'){
					this.showPlanActionSheetFn();
				}else{
					iEPM.util.PubOperation.showTips('planCompletedText','success');
				}
			}else if(projectStatus == 'Active'){
				iEPM.util.PubOperation.showTips('planActiveText','success');
			}else if(projectStatus == 'Paused'){
				iEPM.util.PubOperation.showTips('planInPausedText','success');
			}else if(projectStatus == 'Aborted'){
				iEPM.util.PubOperation.showTips('planAbortedText','success');
			}else if(projectStatus == 'Completed'){
				iEPM.util.PubOperation.showTips('planCompletedText','success');
			}
		}
	},
	/**
	 * show plan actionsheet
	 */
	showPlanActionSheetFn : function(){
		var dateArr = [{
				text : Global.getTipsMsg('completeText'),
				value : 'complete'
			}];
		
		/*// 未启动
		if(recordStatus == 'Active'){
			dateArr.push({
				text : Global.getTipsMsg('startText'),
				value : 'launch'
			},{
				text : Global.getTipsMsg('cancelText'),
				value : 'cancel'
			});
		// 启动
		}else if(recordStatus == 'Processing'){
			dateArr.push({
				text : Global.getTipsMsg('cancelText'),
				value : 'cancel'
			});
		}*/
		
		if (!this.planActionSheet) {
			this.planActionSheet = Ext.widget('planActionSheet');
		}
		var planActionSheet = this.planActionSheet;
		Ext.Viewport.add(planActionSheet);
		planActionSheet.show();
		
		planActionSheet.setSlots([{
			name : 'plan_speed',
			title : 'Speed',
			data : dateArr
		}]);
		planActionSheet.getToolbar().setTitle(Global.taskName);
	},
	/**
	 * 进入项目计划提交页面
	 * @param obj
	 * @param value
	 * @param eOpts
	 */
	goToProjectPlanCommit : function(obj, value, eOpts){
		var planStatus = this.getPlanActionSheet().getValue().plan_speed,
			title = '',
			store = Ext.getStore('TaskStandardList'),
			params = {
				TaskID : Global.planTaskID
			};
		
		// reset Global.btnPressCnt
		Global.btnPressCnt = 0;
		
		if(planStatus == 'cancel'){
			this.getPlanActionSheet().hide();
		}else{
			if (!this.projectPlanCommit) {
				this.projectPlanCommit = Ext.widget('projectPlanCommit');
			}
			this.getIndexNav().push(this.projectPlanCommit);
			var projectPlanCommit = this.projectPlanCommit,
				titlebar = projectPlanCommit.down('titlebar'),
				taskStandardToolbar = projectPlanCommit.down('toolbar'),
				taskStandardList = projectPlanCommit.down('list'),
				commitBnt = this.projectPlanCommit.down('button[align=right]');
			
			if(planStatus == 'complete'){
				title = Global.getTipsMsg('completeText');
			}else if(planStatus == 'launch'){
				title = Global.getTipsMsg('startText');
			}
			titlebar.setTitle(title);
			
			commitBnt.setDisabled(false);
			// reset formpanel
			projectPlanCommit.down('formpanel').reset();
			
			Global.planStatus = planStatus;
			// 关键任务加载标准任务列表
			if(Global.isKeyTask){
				taskStandardToolbar.setHidden(false);
				taskStandardList.setHidden(false);
				iEPM.util.PubOperation.pubListLoad(store, params, true, true, 'taskStandardList'+params.taskID,null,taskStandardList);
			}else{
				taskStandardToolbar.setHidden(true);
				taskStandardList.setHidden(true);
			}
		}
	},
	/**
	 * 项目计划提交
	 * @param _this
	 * @param e
	 * @param eOpts
	 */
	planCommitFn : function(_this,e,eOpts){
		var url = Global.domain + '/api/SubmitTaskOperate.ashx',
			remark = this.getProjectPlanCommit().down('textareafield[name=planTaskRemark]').getValue(),
			recordStatus = Global.planStatus == 'complete' ? 'CompleteTask' : 'StartTask',
			store = Ext.getStore('TaskStandardList'),
			CheckIDList = [],
			CheckIDStr = '';
		
		if(Ext.isEmpty(remark)){
			iEPM.util.PubOperation.showTips('planFormEmpty','failure');
			return;
		}
		
		_this.setDisabled(true);
		Global.btnPressCnt++;
		
		if(Global.isKeyTask){
			store.each(function(item,index,length){
				if(item.get('isSelect')){
					CheckIDList.push(item.get('CheckID'));
				}
			});
			if(CheckIDList && CheckIDList.length > 0){
				CheckIDStr = CheckIDList.toString();
			}
		}
		
		var params = {
			RecordStatus : recordStatus,
			Remark : remark,
			ProjectID : Global.projectId,
			TaskID : Global.planTaskID,
			CheckIDList : CheckIDStr
		};
		
		var resultFun = function(responseText) {
			var resJson = Ext.JSON.decode(responseText);
			if(resJson.result){
				if(Global.btnPressCnt==1){
					mainCtr.getIndexNav().pop();
					var store = Ext.getStore('ProjectPlanList'),
					list = projectPlanCtr.getProjectPlanList().down('list'),
					params = {
						ProjectID : Global.projectId,
						ParentID : Global.phaseTaskID
					};
				
					iEPM.util.PubOperation.pubListLoad(store, params, true, true, 'projectPlanList'+Global.projectId+Global.phaseTaskID,function(){
						iEPM.util.PubOperation.showTips('succeedMsg','success');
					},list);
					_this.setDisabled(false);
					Global.btnPressCnt = 0;
				}
			}else{
				iEPM.util.PubOperation.showTips('failureMsg','failure');
				_this.setDisabled(false);
				Global.btnPressCnt = 0;
			}
	    };
	
		var failureFun = function() {
			iEPM.util.PubOperation.showTips('requestErrorMsg','failure');
			_this.setDisabled(false);
			Global.btnPressCnt = 0;
		};
		iEPM.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, false , 'projectPlanCommit');
	},
	/**
	 * 关键任务列表多选
	 * @param obj
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	taskStandardListTap : function(obj, index, target, record, e, eOpts){
		record.set('isSelect',!record.get('isSelect'));
	},
	/**
	 * 预览附件
	 * @param obj
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	projectPlanAnnexListTap : function(obj, index, target, record, e, eOpts){
		Cordova.exec(null, null, "UserInfo", "openUrl", [record.get('Url')]);
	}
});