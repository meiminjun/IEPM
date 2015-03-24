/**
 * 项目阶段计划controller
 */
Ext.define('iEPM.controller.ProjectPhase', {
	extend : 'Ext.app.Controller',

	requires : [],

	config : {
		refs : {
			indexNav : 'indexNav',
			main : 'main',
			projectPhaseList : 'projectPhaseList',
			projectPhaseListDv : 'projectPhaseList list',
			changeBtn : 'projectPhaseList button[name=changeBtn]',
			fillFormCommitBtn : 'fillForm > titlebar button[align=right]',
			projectPhaseAnnexList : 'projectPhaseAnnexList list'
		},
		control : {
			projectPhaseListDv : {
				itemsingletap : 'projectPhaseListDvTap'
			},
			projectPhaseAnnexList : {
				itemsingletap : 'projectPhaseAnnexListTap'
			},
			changeBtn : {
				tap : 'changeBtnTap'
			},
			fillFormCommitBtn : {
				tap : 'fillFormCommitFn'
			}
		}
	},
	/**
	 * 项目阶段计划列表点击事件
	 * 
	 * @param obj
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	projectPhaseListDvTap : function(obj, index, target, record, e, eOpts) {
		var className = e.target.className;
		Global.phaseTaskID = record.get('TaskID');
		
		if(className == 'projectPhaseListImg'){
			var store = Ext.getStore('ProjectPhaseAnnexList'),list,
				params = {
					ProjectID : Global.projectId,
					TaskID : record.get('TaskID')
				};
			if (!this.projectPhaseAnnexList) {
				this.projectPhaseAnnexList = Ext.widget('projectPhaseAnnexList');
			}
			this.getIndexNav().push(this.projectPhaseAnnexList);
			
			list = this.projectPhaseAnnexList.down('list');
			iEPM.util.PubOperation.pubListLoad(store, params, true, true, 'projectPhaseAnnexList'+params.ProjectID+params.TaskID,null,list);
		}else{
			var store = Ext.getStore('ProjectPlanList'),
				params = {
					ProjectID : Global.projectId,
					ParentID : Global.phaseTaskID
				};
			if (!this.projectPlanList) {
				this.projectPlanList = Ext.widget('projectPlanList');
			}
			this.getIndexNav().push(this.projectPlanList);
			
			var titlebar = this.projectPlanList.down('titlebar'),
				list = this.projectPlanList.down('list');
			titlebar.setTitle(record.get('TaskName'));
			
			iEPM.util.PubOperation.pubListLoad(store, params, true, true, 'projectPlanList'+Global.projectId+record.get('TaskID'),null,list);
		}
	},
	/**
	 * 项目阶段计划变更按钮点击事件
	 * @param _this
	 * @param e
	 * @param eOpts
	 */
	changeBtnTap : function(_this,e,eOpts){
		Ext.getStore('SelectFieldView').setData([{
			id : '01',
			title : Global.getTipsMsg('dialogText'),
			imgUrl : 'resources/images/dialog.png'
		},{
			id : '02',
			title : Global.getTipsMsg('monthlyReportText'),
			imgUrl : 'resources/images/fillForm.png'
		}]);
		projectPhaseCtr.overlay = Ext.Viewport.add({
			xtype : 'selectFieldView',
			width :  182,
			height : 90,
			margin: '8px 0px 0px 12px',
			listeners : {
				itemsingletap : function(obj, index, target, record, e, eOpts){
					// hide
					projectPhaseCtr.overlay.hide();
					// go to the fillForm Container
					if(record.get('id') == '02'){
						projectPhaseCtr.goToFillForm();
					}
				}
			}
		});
		projectPhaseCtr.overlay.showBy(_this,"tl-bl?");
	},
	/**
	 * 进入月报填报页面
	 * 
	 */
	goToFillForm : function(){
		console.log("-----------119-----------"+Global.milestoneDic+"Global.projectState:"+Global.projectState);
		var milestoneDic = Global.milestoneDic;
		if (!this.fillForm) {
			this.fillForm = Ext.widget('fillForm');
		}
		this.getIndexNav().push(this.fillForm);
		
		var form = this.fillForm.down('formpanel'),
			totalStateSF = form.down('selectfield[name=totalStateSF]'),
			mainRiskSF = form.down('selectfield[name=mainRiskSF]'),
			milestone = form.down('selectfield[name=milestone]'),
			milestoneLabel = form.down('label[name=milestoneLabel]');
		
		totalStateSF.setOptions(null);
		mainRiskSF.setOptions(null);
		totalStateSF.setOptions([{
			totalStateText : Global.getTipsMsg('redText'),
			totalStateVal : 'Red'
		},{
			totalStateText : Global.getTipsMsg('yellowText'),
			totalStateVal : 'Yellow'
		},{
			totalStateText : Global.getTipsMsg('greenText'),
			totalStateVal : 'Green'
		}]);
		mainRiskSF.setOptions([{
			mainRiskText : Global.getTipsMsg('lowText'),
			mainRiskVal : 0
		},{
			mainRiskText : Global.getTipsMsg('middleText'),
			mainRiskVal : 1
		},{
			mainRiskText : Global.getTipsMsg('highText'),
			mainRiskVal : 2
		}]);
		
		var PrepareStatue = Global.projectState; //编制计划状态：Active(未编制计划)
		if(PrepareStatue == "Active") {
			milestone.setReadOnly(false);
			milestone.setOptions(milestoneDic);
		}else{
			milestone.setReadOnly(true);
			var CurMilestoneName = Global.CurMilestoneName;
			var CurMilestoneID = Global.CurMilestoneID;
			milestone.setOptions({
				Key: CurMilestoneID,
				Value: CurMilestoneName
			});
		}
		
		
		this.fillForm.down('button[align=right]').setDisabled(false);
		Global.btnPressCnt = 0;
		
		// scroll to top
		form.getScrollable().getScroller().scrollToTop();
		form.reset();

		// 获取上月填报参数填充表单
		iEPM.util.PubOperation.offlineAccess("mothHisFormVal"+Global.projectId,null,function(result){
			if(result){
				console.log("-------------------"+result);
				result = Ext.JSON.decode(result);
				form.setValues({
					fillFormConfirmTime : new Date(Date.parse(result.Monthly)),
					totalStateSF : result.MilestoneStatus,
					taskThisMonth : result.CompletedWorks,
					planforNextMonth : result.NextMonthPlan,
					mainRisk : result.Risk,
					mainRiskSF : result.RiskGrade,
					milestone : result.CurrMileStone,
					actualCost : result.ActualCost
				});	
			}else{
				form.reset();
			}
		});
	},
	/**
	 * 月报填报提交
	 * @param _this
	 * @param e
	 * @param eOpts
	 */
	fillFormCommitFn : function(_this,e,eOpts){
		var url = Global.domain + '/api/SubmmitReport.ashx',params,
			taskThisMonth = Ext.ComponentQuery.query('textareafield[name=taskThisMonth]')[0].getValue(),
			planforNextMonth = Ext.ComponentQuery.query('textareafield[name=planforNextMonth]')[0].getValue(),
			mainRisk = Ext.ComponentQuery.query('textareafield[name=mainRisk]')[0].getValue(),
			mainRiskSF = Ext.ComponentQuery.query('selectfield[name=mainRiskSF]')[0].getValue(),
			totalStateSF = Ext.ComponentQuery.query('selectfield[name=totalStateSF]')[0].getValue(),
			confirmDate = Ext.ComponentQuery.query('datepickerfield[name=fillFormConfirmTime]')[0].getValue(),
			CurrMileStone = Ext.ComponentQuery.query('selectfield[name=milestone]')[0].getValue(),
			ActualCost = Ext.ComponentQuery.query('textfield[name=actualCost]')[0].getValue();
		// empty tips
//		alert("regTest():"+reg.test(ActualCost)+"ActualCost:"+ActualCost+"typeof:"+typeof(ActualCost)+"isEmpty:"+Ext.isEmpty(ActualCost)+"isNumber"+Ext.isNumber(ActualCost));
		if(Ext.isEmpty(confirmDate)){
			iEPM.util.PubOperation.showTips('confirmDateEmpty','failure');return;
		}else if(Ext.isEmpty(taskThisMonth)){
			iEPM.util.PubOperation.showTips('taskThisMonthEmpty','failure');return;
		}else if(Ext.isEmpty(planforNextMonth)){
			iEPM.util.PubOperation.showTips('planforNextMonthEmpty','failure');return;
		}else if(Ext.isEmpty(mainRisk)){
			iEPM.util.PubOperation.showTips('mainRiskEmpty','failure');return;
		}else if(!Ext.isEmpty(ActualCost)) {
			if(isNaN(ActualCost)){
				iEPM.util.PubOperation.showTips('actualCostIsNumber','failure');return;
			} 
			if(ActualCost.length>16) {
				iEPM.util.PubOperation.showTips('actualCostLength','failure');return;
			}
		}
		
		_this.setDisabled(true);
		Global.btnPressCnt++;
		//当为不可编制计划（Active）时，参数传值，反之传空
		var PrepareStatue = Global.projectState;
		var rMileStone = PrepareStatue == "Active" ? CurrMileStone : "";
		console.log("----------"+rMileStone);
		// request params
		params = {
			CompletedWorks : taskThisMonth,
			NextMonthPlan : planforNextMonth,
			Risk : mainRisk,
			RiskGrade : mainRiskSF,
			MilestoneStatus : totalStateSF,
			ProjectID : Global.projectId,
			Monthly: Ext.Date.format(confirmDate,'Y-m'),
			CurrMileStone : rMileStone,
			ActualCost	: ActualCost
		};
		
		var resultFun = function(responseText) {
			var resJson = Ext.JSON.decode(responseText);
			if(resJson.result){
				if(Global.btnPressCnt==1){
					setTimeout(function(){iEPM.util.PubOperation.showTips('succeedMsg','success');},1000);
					mainCtr.getIndexNav().pop();
					// phonegap保存填报内容
					iEPM.util.PubOperation.onlineLoad("mothHisFormVal"+Global.projectId,null,Ext.JSON.encode(params));
					_this.setDisabled(false);
					Global.btnPressCnt = 0;
				}
			}else{
				setTimeout(function(){iEPM.util.PubOperation.showTips('failureMsg','failure');},1000);
				_this.setDisabled(false);
				Global.btnPressCnt = 0;
			}
	    };
	
		var failureFun = function() {
			setTimeout(function(){iEPM.util.PubOperation.showTips('requestErrorMsg','failure');},1000);
			_this.setDisabled(false);
			Global.btnPressCnt = 0;
		};
		// 调用ajax
		iEPM.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, false , 'fillForm');
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
	projectPhaseAnnexListTap : function(obj, index, target, record, e, eOpts){
		Cordova.exec(null, null, "UserInfo", "openUrl", [record.get('Url')]);
	}
});