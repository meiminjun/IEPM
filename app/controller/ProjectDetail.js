Ext.define('iEPM.controller.ProjectDetail', {
	extend : 'Ext.app.Controller',

	requires : [

	],

	config : {
		refs : {
			indexNav : 'indexNav',
			projectDetail : 'projectDetail',
			basicInfoBtn : 'projectDetail button[name=basicInfo]',
			annexBtn : 'projectDetail button[name=annex]',
			monthHisBtn : 'projectDetail button[name=monthHis]',
			membersBtn : 'projectBaseInfo textfield[name=members]',
			projectFileList : 'projectFileList',
			projectMembersList : 'projectMembers list',
			projectDetail : 'projectDetail',
			monthHisList : 'monthHisList'
		},
		control : {
			basicInfoBtn : {
				tap : 'basicInfoBtnTapFun'
			},
			annexBtn : {
				tap : 'annexBtnTapFun'
			},
			monthHisBtn : {
				tap : 'monthHisBtnTapFun'
			},
			membersBtn : {
				focus : 'membersBtnFocus'
			},
			projectFileList : {
				itemsingletap : 'projectFileListTapFun'
			},
			projectMembersList : {
				itemsingletap : 'projectMembersListTapFun'
			},
			monthHisList : {
				itemsingletap : 'monthHisListTapFun'
			}
		}
	},
	/**
	 * 基本信息
	 * 
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	basicInfoBtnTapFun : function(obj, e, eOpts) {
		var projectDetail = this.getProjectDetail(),
			basicInfoBtn = this.getBasicInfoBtn(), 
			monthHisBtn = this.getMonthHisBtn(),
			annexBtn = this.getAnnexBtn(),
			containerObj = projectDetail.down('container[name=contentDiv]')
			projectBaseInfo = containerObj.down('projectBaseInfo'),
			monthHisList = containerObj.down('monthHisList'),
			projectFileList = containerObj.down('projectFileList');
		if (basicInfoBtn.getUi() == 'customSelectBtn') {
			return;
		}
		
		basicInfoBtn.setUi('customSelectBtn');
		basicInfoBtn.setIconCls('basicInfoWhiteIconCls');
		monthHisBtn.setUi('customDefaultBtn');
		monthHisBtn.setIconCls('monthHisIconCls');
		annexBtn.setUi('customDefaultBtn2');
		annexBtn.setIconCls('annexGaryIconCls');
		
		projectBaseInfo.setHidden(false);
		monthHisList.setHidden(true);
		projectFileList.setHidden(true);
		
		var form = mainCtr.getProjectDetail().down('projectBaseInfo');
		mainCtr.loadBaseInfo(form);
	},
	/**
	 * 历史月报
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	monthHisBtnTapFun : function(obj, e, eOpts){
		var projectDetail = this.getProjectDetail(), 
			monthHisBtn = this.getMonthHisBtn(),
			basicInfoBtn = this.getBasicInfoBtn(), 
			annexBtn = this.getAnnexBtn(),
			containerObj = projectDetail.down('container[name=contentDiv]'),
			projectBaseInfo = containerObj.down('projectBaseInfo'),
			monthHisList = containerObj.down('monthHisList'),
			projectFileList = containerObj.down('projectFileList'),
			store = Ext.getStore('MonthHisList'),
			params = {
				ProjectID : Global.projectId
			};
		
		if (monthHisBtn.getUi() == 'customSelectBtn') {
			return;
		}
		
		basicInfoBtn.setUi('customDefaultBtn');
		basicInfoBtn.setIconCls('basicInfoGrayIconCls');
		annexBtn.setUi('customDefaultBtn2');
		annexBtn.setIconCls('annexGaryIconCls');
		monthHisBtn.setUi('customSelectBtn');
		monthHisBtn.setIconCls('basicInfoMonthHisCls');
		
		projectBaseInfo.setHidden(true);
		monthHisList.setHidden(false);
		projectFileList.setHidden(true);
		
		iEPM.util.PubOperation.pubListLoad(store, params, true, true, 'monthHisList'+Global.projectId,null,monthHisList);
	},
	/**
	 * 附件
	 * 
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	annexBtnTapFun : function(obj, e, eOpts) {
		var projectDetail = this.getProjectDetail(),
			basicInfoBtn = this.getBasicInfoBtn(), 
			monthHisBtn = this.getMonthHisBtn(),
			annexBtn = this.getAnnexBtn(),
			containerObj = projectDetail.down('container[name=contentDiv]'),
			projectBaseInfo = containerObj.down('projectBaseInfo'),
			monthHisList = containerObj.down('monthHisList'),
			projectFileList = containerObj.down('projectFileList'),
			store = Ext.getStore('ProjectFileList'),
			params = {
				ProjectID : Global.projectId
			};
		
		if (annexBtn.getUi() == 'customSelectBtn') {
			return;
		}
		
		basicInfoBtn.setUi('customDefaultBtn');
		basicInfoBtn.setIconCls('basicInfoGrayIconCls');
		monthHisBtn.setUi('customDefaultBtn');
		monthHisBtn.setIconCls('monthHisIconCls');
		annexBtn.setUi('customSelectBtn');
		annexBtn.setIconCls('annexWhiteIconCls');
		
		projectBaseInfo.setHidden(true);
		monthHisList.setHidden(true);
		projectFileList.setHidden(false);
		
		iEPM.util.PubOperation.pubListLoad(store, params, true, true, 'projectFileList'+Global.projectId,null,projectFileList);
	},
	/**
	 * 项目成员
	 * 
	 * @param obj
	 * @param e
	 * @param eOpts
	 */
	membersBtnFocus : function(obj, e, eOpts){
		if (!this.projectMembers) {
			this.projectMembers = Ext.widget('projectMembers');
		}
		this.getIndexNav().push(this.projectMembers);
		
		var store = Ext.getStore('ProjectMembers'),
			list = this.projectMembers.down('list'),
			params = {
				ProjectID : Global.projectId
			};
		
		iEPM.util.PubOperation.pubListLoad(store, params, true, true, 'projectMembers'+Global.projectId,null,list);
	},
	/**
	 * 历史月报进入月报详情
	 * @param obj
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	monthHisListTapFun : function(obj, index, target, record, e, eOpts){
		if (!this.monthHisInfo) {
			this.monthHisInfo = Ext.widget('monthHisInfo');
		}
		this.getIndexNav().push(this.monthHisInfo);
		this.monthHisInfo.down('titlebar').setTitle(iEPM.util.PubOperation.dateFormatMYFun(record.get('Monthly'))+' - '+ Global.getTipsMsg('monthlyText'));
		
		var form = this.monthHisInfo.down('formpanel'),
			totalStateSF = form.down('selectfield[name=totalStateSF]'),
			mainRiskSF = form.down('selectfield[name=mainRiskSF]'),
			taskThisMonthPanel = form.down('panel[name=taskThisMonth]'),
			planforNextMonthPanel = form.down('panel[name=planforNextMonth]'),
			mainRiskPanel = form.down('panel[name=mainRisk]'),
			actualCostPanel = form.down('panel[name=actualCost]'),
			currmilestone = form.down('selectfield[name=currmilestone]'),
			milestoneLab = form.down('label[name=milestoneLab]'),
			completedWorks =  record.get('CompletedWorks').replace(/[\r\n]/g,"<BR>"),
			nextMonthPlan =  record.get('NextMonthPlan').replace(/[\r\n]/g,"<BR>"),
			risk = record.get('Risk').replace(/[\r\n]/g,"<BR>"),
			actualCost = record.get('ActualCost').replace(/[\r\n]/g,"<BR>"),
			mileStoneText = record.get('CurrMileStone').replace(/[\r\n]/g,"<BR>");
		
		// set mainRiskSF options
		totalStateSF.setOptions(null);
		mainRiskSF.setOptions(null);
		currmilestone.setOptions(null);
		if(Ext.isEmpty(mileStoneText)) {
//			currmilestone.setHidden(true);
//			milestoneLab.setHidden(true);
			currmilestone.setOptions([{
				currmilestoneText : "",
				currmilestoneVal : "1"
			}]);
		}else {
			currmilestone.setOptions([{
				currmilestoneText : mileStoneText,
				currmilestoneVal : "1"
			}]);
		}
		if(Ext.isEmpty(actualCost)) {
			actualCostPanel.setData({"mainCost" : "0.00"});
		}else {
			var cost1 = parseFloat(actualCost);
			var cost2 = iEPM.util.PubOperation.convert(cost1);
			actualCostPanel.setData({"mainCost" : cost2});
		}
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
		
		form.setValues({
			totalStateSF : record.get('MilestoneStatus'),
			mainRiskSF : record.get('RiskGrade'),
			hisInfoConfirmTime : new Date(Date.parse(record.get('Monthly')))
		});
		taskThisMonthPanel.setData({"taskThisMonth" : completedWorks});
		planforNextMonthPanel.setData({"planforNextMonth" : nextMonthPlan});
		mainRiskPanel.setData({"mainRisk" : risk});
		
	},
	/**
	 * 点击预览附件
	 * 
	 * @param obj
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	projectFileListTapFun : function(obj, index, target, record, e, eOpts){
		Cordova.exec(null, null, "UserInfo", "openUrl", [record.get('Url')]);
	},
	/**
	 * 拨打电话
	 * 
	 * @param obj
	 * @param index
	 * @param target
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	projectMembersListTapFun : function(obj, index, target, record, e, eOpts){
		var tellNum = record.get('Phone');
		if (Ext.os.is.Android) {
			if(!Ext.isEmpty(tellNum)){
				navigator.app.loadUrl('tel:'+ tellNum, { openExternal:true } );
			}
		}else if(Ext.os.is.iOS){
			if(!Ext.isEmpty(tellNum)){
				window.location.href = 'tel:' + tellNum;
			}
		}
	}
});