/**
 * 首页controller
 * @author duwei
 * @date 2014-5-20
 */
Ext.define('iEPM.controller.Main', {
	extend : 'Ext.app.Controller',

	requires : [],

	config : {
		refs : {
			indexNav : 'indexNav',
			main : 'main',
			mainBackBtn : 'main button[iconCls=backBtnCls]',
			mainSettingsBtn : 'main button[iconCls=settingIconCls]',
			categoryBtn : 'main button[name=categoryBtn]',
			mainList : 'main list',
			regProBtn : 'main > toolbar button[name=registerBtn]',
			projectDetail: 'projectDetail',
			proManagerTF : 'teamInfomation textfield[name=proManager]',
			businessOwnerTF : 'teamInfomation textfield[name=businessOwner]',
			teamMemberTF : 'teamInfomation textfield[name=teamMembers]',
			teamList : 'teamList list',
			teamListConfirmBtn : 'teamList > titlebar button[align=right]',
			teamInfomation : 'teamInfomation',
			regSubmitBtnText : 'registerProject > titlebar button[align=right]',
			projectPhaseList : 'projectPhaseList'
		},
		control : {
			mainBackBtn : {
				tap : 'mainBackBtnTapFun'
			},
			mainSettingsBtn : {
				tap : 'mainSettingsBtnTapFun'
			},
			main : {
				initialize : 'mainListInitFun'
			},
			mainList : {
				itemsingletap : 'mainListTapFun'
			},
			regProBtn : {
				tap : 'regProBtnTapFn'
			},
			proManagerTF: {
				focus : 'proManagerFocusFn'
			},
			businessOwnerTF : {
				focus : 'businessOwnerFocusFn'
			},
			teamMemberTF : {
				focus : 'teamMemberFocusFn'
			},
			teamList : {
				itemsingletap : 'teamListTapFn'
			},
			teamListConfirmBtn : {
				tap : 'confirmBtnTapFn'
			},
			regSubmitBtnText : {
				tap : 'regSubmitBtnTapFn'
			},
			categoryBtn : {
				tap : 'categoryBtnTapFn'
			}
		}
	},
	init : function() {
		// 获取用户选择的语言缓存信息
		iEPM.util.PubOperation.initLanguage();
	},
	/**
	 * 首页列表初始化方法
	 * @param cmp
	 * @param eOpts
	 * @param e
	 * @param tag
	 */
	mainListInitFun : function(cmp,eOpts,e,tag){
		var store = Ext.getStore('MainList'),
			list = this.getMainList(),
			param = {};
		//获取填月报的里程碑字段
		Ext.Ajax.request({
		    url: Global.domain +'/api/GetMilestoneDic.ashx?lan='+Global.language,
		    method:'GET',
		    success: function(response){
		        var response = Ext.JSON.decode(response.responseText);
		        if(response.result) {
		        	Global.milestoneDic = response.rows;
		        }
		    }
		});
		iEPM.util.PubOperation.pubListLoad(store, param, true, true, 'mainList',null,list);

	},
	/**
	 * navigationview back
	 */
	navigationViewBack : function() {
		var indexNav = mainCtr.getIndexNav(),
			activeItem = indexNav.getActiveItem(), 
			activeItemType = activeItem.xtype,
			previousItemType = indexNav.getPreviousItem()== undefined ? '' : indexNav.getPreviousItem().xtype;

//		console.log('activeItemType: ' + activeItemType);
//		console.log('previousItemType: ' + previousItemType);
	},
	/**
	 * 首页返回
	 * 
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	mainBackBtnTapFun : function(obj, e, eOpts) {
		if (iEPM.util.PubOperation.isGoogleChrome()) {
			Ext.Msg.alert('homeBack');
		} else {
			PhoneGapAPI.exit();
		}
	},
	/**
	 * 首页设置语言
	 * 
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	mainSettingsBtnTapFun : function(obj, e, eOpts) {
		if (!this.settingview) {
			this.settingview = Ext.widget('settingview');
		}
		this.getIndexNav().push(this.settingview);
	},
	/**
	 * 首页list点击事件
	 * 
	 * @param obj
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	mainListTapFun : function(obj, index, target, record, e, eOpts) {
		var className = e.target.className,
			store = Ext.getStore('ProjectPhaseList'),
			params = {
				ProjectID : record.get('ProjectID')
			};
		
		Global.projectState = record.get('RecordStatus');
		Global.CurMilestoneName = record.get('CurMilestoneName');
		Global.CurMilestoneID = record.get('CurMilestoneID');
		if(className != 'x-unsized x-list-disclosure'){
			if (!this.projectPhaseList) {
				this.projectPhaseList = Ext.widget('projectPhaseList');
			}
			this.getIndexNav().push(this.projectPhaseList);
			
			var titlebar = this.projectPhaseList.down('titlebar'),
				list = this.projectPhaseList.down('list');
			
			titlebar.setTitle(record.get('ProjectName'));
			Global.projectId = record.get('ProjectID');
			iEPM.util.PubOperation.pubListLoad(store, params, true, true, 'projectPhaseList'+record.get('ProjectID'),null,list);
		}
	},
	/**
	 * 刷新项目阶段计划列表
	 */
	projectPhaseListLoad : function(){
    	var store = Ext.getStore('ProjectPhaseList'),
    		list = this.getProjectPhaseList().down('list');
			params = {
				ProjectID : Global.projectId
			};
    	iEPM.util.PubOperation.pubListLoad(store, params, true, true, 'projectPhaseList'+Global.projectId,null,list);
	},
	/**
	 * 跳转到项目详细
	 * 
	 * @param record
	 * @param index
	 */
	goToProjectDetail : function(record, index) {
		if (!this.projectDetail) {
			this.projectDetail = Ext.widget('projectDetail');
		}
		this.getIndexNav().push(this.projectDetail);
		
		var projectDetails = this.projectDetail;
		// show projectBaseInfo
		projectDetails.down('button[name=basicInfo]').fireEvent('tap');
		// scroll to top
		projectDetails.down('projectBaseInfo').getScrollable().getScroller().scrollToTop();
		
		var titlebar = projectDetails.down('titlebar'),
			form = projectDetails.down('projectBaseInfo');
		
		titlebar.setTitle(record.get('ProjectName'));
		Global.projectId = record.get('ProjectID');
		
		this.loadBaseInfo(form);
	},
	/**
	 * 加载项目详情基本信息
	 * @param form
	 */
	loadBaseInfo : function(form){
		//ajaxFun
		var url = Global.domain + '/api/GetProjectDetail.ashx',
			params = {
				ProjectID : Global.projectId
			};
		
		
		var resultFun = function(responseText) {
           if(Ext.isEmpty(responseText)){
        	   form.reset();
           }else{
        	   
        	   var resJson = Ext.JSON.decode(responseText),
        	       projectDetail = resJson.ProjectDetail;
        	   
	       	   form.setValues({
	       		    proName : projectDetail.ProjectName,
	       		    country : Ext.isEmpty(projectDetail.AreaName) ? Global.getTipsMsg('consultantEmpty') : projectDetail.AreaName,
	       		    GFA : iEPM.util.PubOperation.toDecimal(projectDetail.ProjectBudget),
	       		    commencementDate : iEPM.util.PubOperation.dateFormatFun(projectDetail.StartTime),
	       		    completeDate : iEPM.util.PubOperation.dateFormatFun(projectDetail.EndTime),
	       		    projectManager : projectDetail.ProjectManager,
	       		    businessLeader : projectDetail.ResponsiblePerson,
	       		    members : Ext.isEmpty(projectDetail.TeamMember) ? Global.getTipsMsg('consultantEmpty') : projectDetail.TeamMember
	       	   });
	       	   
	       	   // 项目进度
	       	   var lblProgressTpl = new Ext.XTemplate(
	       			'<table class="lblProgress">',
						'<tbody>',
							'<tpl for="rows">',
								'<tr>',
									'<td class="phase"><div class="projectProgressDivCls">{TaskName}</div></td>',
									'<td class="time-block" style="{[this.getTimeStyle(values)]}"><div class="projectProgressDivCls">{[iEPM.util.PubOperation.dateFormatFun(values.EndTime)]}</div></td>',
								'</tr>', 
							'</tpl>', 
						'</tbody>',
					'</table>', {
						compiled : true,
						getDateAttribute : function(date) {
							return Ext.Date.format(date,'d-m-Y');
						},
						getTimeStyle : function(values) {
							return 'padding-top:.2em;background:'+ values.Color;
						}
					}
	       	   );
		       if(form.down('panel[name=lblProgressTb]')){
				   form.down('panel[name=lblProgressTb]').destroy();
			   }
	       	   form.insert(1,{
				   xtype : 'panel',
				   name : 'lblProgressTb',
				   cls : 'projectProgressCls'
			   });
	       	   form.down('panel[name=lblProgressTb]').setHtml(lblProgressTpl.apply(resJson.ProjectDetail));
           }
        };
	
		var failureFun = function() {
			iEPM.util.PubOperation.showTips('requestErrorMsg','failure');
		};
		// 调用ajax
		iEPM.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, true , 'projectDetails'+params.ProjectID);
	},
	/**
	 * 进入注册新项目
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	regProBtnTapFn : function(obj, e, eOpts){
		if(!this.registerProject){
			this.registerProject = Ext.widget('registerProject');
		}
		this.getIndexNav().push(this.registerProject );
		// scroll to Top
		this.registerProject.getScrollable().getScroller().scrollToTop();
		
		var basicInfomation = this.registerProject.down('basicInfomation'), 
			proCompanySF = basicInfomation.down('selectfield[name=proCompany]'),
			proTypeSF = basicInfomation.down('selectfield[name=proTypeList]'),
			proScaleSF = basicInfomation.down('selectfield[name=proScaleList]'),
			teamInfomation = this.getTeamInfomation(),
			proManagerTF = teamInfomation.down('textfield[name=proManager]'),
			proManagerHF = teamInfomation.down('hiddenfield[name=proManagerHF]'),
			businessOwnerTF = teamInfomation.down('textfield[name=businessOwner]'),
			businessOwnerHF = teamInfomation.down('hiddenfield[name=businessOwnerHF]'),
			teamMembersTF = teamInfomation.down('textfield[name=teamMembers]'),
			teamMembersHF = teamInfomation.down('hiddenfield[name=teamMembersHF]');
			
		this.registerProject.down('button[align=right]').setDisabled(false);
		Ext.ComponentQuery.query('textfield[name=proName]')[0].setValue('');
		Ext.ComponentQuery.query('textfield[name=proBudget]')[0].setValue('');
		Ext.ComponentQuery.query('datepickerfield[name=proStartTime]')[0].setValue('');
		Ext.ComponentQuery.query('datepickerfield[name=proEndTime]')[0].setValue('');
		proManagerTF.setValue('');
		proManagerHF.setValue('');
		businessOwnerTF.setValue('');
		businessOwnerHF.setValue('');
		teamMembersTF.setValue('');
		teamMembersHF.setValue('');
		
		var url = Global.domain + '/api/GetCompanyList.ashx',
			params = {};
		
		var resultFun = function(responseText) {
			var jsonRs = Ext.JSON.decode(responseText),
				proCompanyRs = jsonRs.CompanyList,
				proTypeRs = jsonRs.ProjectTypeList,
				proScaleRs = jsonRs.ProjectBudgetList;
				
			// 先清空原有数据
			proCompanySF.setOptions(null);
			proTypeSF.setOptions(null);
			proScaleSF.setOptions(null);
			// 所属公司
			proCompanySF.setOptions(proCompanyRs);
			if(proCompanyRs.length>1){proCompanySF.setValue(proCompanyRs[0].CompanyID);}
			// 项目类型
			proTypeSF.setOptions(proTypeRs);
			if(proTypeRs.length>1){proTypeSF.setValue(proTypeRs[0].ID);}
			// 项目规模
			proScaleSF.setOptions(proScaleRs);
			if(proScaleRs.length>1){proScaleSF.setValue(proScaleRs[0].ID);}
        };
        
		var failureFun = function() {
			iEPM.util.PubOperation.showTips('requestErrorMsg','failure');
		};
		// 调用ajax
		iEPM.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, true , 'companyList');
	},
	/**
	 * 注册新项目提交
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	regSubmitBtnTapFn : function(_this, e, eOpts){
		var url = Global.domain + '/api/RegistrationProject.ashx',params,
			proName = Ext.ComponentQuery.query('textfield[name=proName]')[0].getValue(),
			proCompany = Ext.ComponentQuery.query('selectfield[name=proCompany]')[0].getValue(),
			proType = Ext.ComponentQuery.query('selectfield[name=proTypeList]')[0].getValue(),
			proScale = Ext.ComponentQuery.query('selectfield[name=proScaleList]')[0].getValue(),
			proBudget = Ext.ComponentQuery.query('textfield[name=proBudget]')[0].getValue(),
			proStartTime = Ext.ComponentQuery.query('datepickerfield[name=proStartTime]')[0].getValue(),
			proEndTime = Ext.ComponentQuery.query('datepickerfield[name=proEndTime]')[0].getValue(),
			proManagerHF = Ext.ComponentQuery.query('hiddenfield[name=proManagerHF]')[0].getValue(),
			businessOwnerHF = Ext.ComponentQuery.query('hiddenfield[name=businessOwnerHF]')[0].getValue(),
			teamMembersHF = Ext.ComponentQuery.query('hiddenfield[name=teamMembersHF]')[0].getValue();
		console.log(Ext.isEmpty(proName)+"--------"+proName+"typeof:"+typeof(proName));
		// empty tips
		if(Ext.isEmpty(proName)){
			console.log("dfasdfasdfsa");
			iEPM.util.PubOperation.showTips('proNameEmpty','failure');return;
		}else if(Ext.isEmpty(proBudget)){
			iEPM.util.PubOperation.showTips('proBudgetEmpty','failure');return;
		}else if(isNaN(proBudget)){
			iEPM.util.PubOperation.showTips('proBudgetNotNum','failure');return;
		}else if(proBudget.length>14) {
			iEPM.util.PubOperation.showTips('proBudgetLength','failure');return;
		}else if(Ext.isEmpty(proStartTime)){
			iEPM.util.PubOperation.showTips('proStartTimeEmpty','failure');return;
		}else if(Ext.isEmpty(proEndTime)){
			iEPM.util.PubOperation.showTips('proEndTimeEmpty','failure');return;
		}else if(Ext.util.Format.date(proStartTime, "Y-m-d") > Ext.util.Format.date(proEndTime, "Y-m-d")){
			iEPM.util.PubOperation.showTips('dateInvalid', 'failure');return;
		}else if(Ext.isEmpty(proManagerHF)){
			iEPM.util.PubOperation.showTips('proManagerHFEmpty','failure');return;
		}else if(Ext.isEmpty(businessOwnerHF)){
			iEPM.util.PubOperation.showTips('businessOwnerHFEmpty','failure');return;
		}else if(Ext.isEmpty(teamMembersHF)){
			iEPM.util.PubOperation.showTips('teamMembersHFEmpty','failure');return;
		}
		
		_this.setDisabled(true);
		
		// request params
		params = {
			ProjectName : proName,
			CompanyID : proCompany,
			ProjectType : proType,
			ProjectScale : proScale,
			ProjectBudget : proBudget,
			ProjectManager : proManagerHF,
			ResponsiblePerson : businessOwnerHF,
			Member : teamMembersHF,
			StartTime : Ext.isEmpty(proStartTime) ? '' : Ext.Date.format(proStartTime,'Y-m-d'),
			EndTime : Ext.isEmpty(proEndTime) ? '' : Ext.Date.format(proEndTime,'Y-m-d')
		};
		
		var resultFun = function(responseText) {
			var resJson = Ext.JSON.decode(responseText);
			if(resJson.result){
				// 返回首页
				mainCtr.getIndexNav().pop();
				// 更新首页
				setTimeout(function(){mainCtr.mainListInitFun();},1000);
				_this.setDisabled(false);
			}else{
				setTimeout(function(){iEPM.util.PubOperation.showTips('failureMsg','failure');},1000);
				_this.setDisabled(false);
			}
	    };
	
		var failureFun = function() {
			setTimeout(function(){iEPM.util.PubOperation.showTips('requestErrorMsg','failure');},1000);
			_this.setDisabled(false);
		};
		
		iEPM.util.PubOperation.ajaxFun(url, params, resultFun, failureFun, true, false , 'registerPro');
	},
	/**
	 * 进入注册新项目成员列表
	 */
	goToTeamList : function(){
		var store = Ext.getStore('TeamList'),list,
			proCompany = Ext.ComponentQuery.query('selectfield[name=proCompany]')[0].getValue(),
			params = {
				CompanyID : proCompany
			};
	
		if (!this.teamList) {
			this.teamList = Ext.widget('teamList');
		}
		this.getIndexNav().push(this.teamList);
		list = this.teamList.down('list');
		iEPM.util.PubOperation.pubListLoad(store, params, true, true, 'teamList'+params.CompanyID,null,list);
		
		// set confirmBtn disabled false
		this.teamList.down('button[name=confirmBtnText]').setDisabled(false);
		// reset Global.btnPressCnt
		Global.btnPressCnt = 0;
	},
	/**
	 * 项目经理focus fn
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	proManagerFocusFn : function(obj, e, eOpts){
		this.goToTeamList();
		Global.teamListParent = 'proManager';
	},
	/**
	 * 业务负责人focus fn
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	businessOwnerFocusFn : function(obj, e, eOpts){
		this.goToTeamList();
		Global.teamListParent = 'businessOwner';
	},
	/**
	 * 团队成员focus fn
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	teamMemberFocusFn : function(obj, e, eOpts){
		this.goToTeamList();
		Global.teamListParent = 'teamMember';
	},
	/**
	 * 团队成员列表点击事件
	 * @param obj
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	teamListTapFn: function(obj, index, target, record, e, eOpts){
		record.set('isSelect',!record.get('isSelect'));
	},
	/**
	 * 注册新项目成员列表选择确定
	 * @param _this
	 * @param e
	 * @param eOpts
	 */
	confirmBtnTapFn : function(_this, e, eOpts){
		var store = Ext.getStore('TeamList'),
			teamInfomation = this.getTeamInfomation(),
			proManagerTF = teamInfomation.down('textfield[name=proManager]'),
			proManagerHF = teamInfomation.down('hiddenfield[name=proManagerHF]'),
			businessOwnerTF = teamInfomation.down('textfield[name=businessOwner]'),
			businessOwnerHF = teamInfomation.down('hiddenfield[name=businessOwnerHF]'),
			teamMembersTF = teamInfomation.down('textfield[name=teamMembers]'),
			teamMembersHF = teamInfomation.down('hiddenfield[name=teamMembersHF]'),
			tempNameArr = [],
			tempIDArr = [],
			tempNameStr = '',
			tempIDStr = '';
		
		_this.setDisabled(true);
		Global.btnPressCnt++;
		
		store.each(function(item,index,length){
			if(item.get('isSelect')){
				tempNameArr.push(item.get('Key'));
				tempIDArr.push(item.get('ID'));
			}
		});
		
		if(tempNameArr && tempNameArr.length > 0){
			tempNameStr = tempNameArr.toString();
			tempIDStr = tempIDArr.toString();
//			console.log(tempNameStr);
//			console.log(tempIDStr);
//			console.log(Global.teamListParent);
			
			// 项目经理
			if(Global.teamListParent == 'proManager'){
				proManagerTF.setValue(tempNameStr);
				proManagerHF.setValue(tempIDStr);
			// 业务负责人
			}else if(Global.teamListParent == 'businessOwner'){
				businessOwnerTF.setValue(tempNameStr);
				businessOwnerHF.setValue(tempIDStr);
			// 团队成员
			}else{
				teamMembersTF.setValue(tempNameStr);
				teamMembersHF.setValue(tempIDStr);
			}
			if(Global.btnPressCnt==1){
				mainCtr.getIndexNav().pop();
			}
		}else{
			iEPM.util.PubOperation.showTips('teamSelectEmpty', 'failure');
			_this.setDisabled(false);
			Global.btnPressCnt = 0;
		}
	},
	/**
	 * 项目首页分类按钮点击事件
	 * @param _this
	 * @param e
	 * @param eOpts
	 */
	categoryBtnTapFn : function(_this, e, eOpts){
		var me = this,
			categoryBtn = me.getCategoryBtn(),
			store = Ext.getStore('MainList'),
			list = this.getMainList(),
			param = {};
		
		store.removeAll(true,true);
		if(categoryBtn.getIconCls() == 'categoryBtnCls'){
			categoryBtn.setIconCls('noCategoryBtnCls');
			list.setGrouped(false);
			store.setGrouper(null);
		}else{
			categoryBtn.setIconCls('categoryBtnCls');
			list.setGrouped(true);
			store.setGrouper({
				groupFn: function(record) {
		           return record.get('ProjectType');
		        },
		        sortProperty : 'Sort'
			});
		}
		iEPM.util.PubOperation.pubListLoad(store, param, true, true, 'mainList',null,list);
	}
});