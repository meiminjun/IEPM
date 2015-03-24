/**
 * 首页列表
 * @author duwei
 * @date 2014-04-21
 */
Ext.define('iEPM.view.MainList', {
	extend: 'Ext.List',
	xtype: 'mainList',
	config: {
		style : 'background:#ffffff;',
		ui : 'normal',
		grouped : true,
		scrollToTopOnRefresh : true,
		flex : 9,
		loadingText : false,
		cls : "mainList bgCls",
		selectedCls : '',
		itemTpl : [
			'<div class="mainListDiv defaultFont-style">',
				'<div style="position:absolute;top:50px;left:5px">',
					'<div class="projectPlan-img">',
						// 红灯
						'<tpl if="ProjectStatus==\'Red\'">',
							'<img class="projectPlanListImg" src="resources/images/status/red.png" />',
						// 黄灯
						'<tpl elseif="ProjectStatus==\'Yellow\'">',
							'<img class="projectPlanListImg" src="resources/images/status/yellow.png" />',
						// 绿灯
						'<tpl else>',
							'<img class="projectPlanListImg" src="resources/images/status/green.png" />',
						'</tpl>',
					'</div>', 
				'</div>',
				'<div class="mainListDetails">',
					'<div class="head text-overflow">',
						'{ProjectName}',
					'</div>',
					'<div class="rowscontent text-overflow" style="margin-bottom: -5px;color:#7B8992">',
						'{AreaName}',
					'</div>',
					'<div class="rowscontent" style="margin-bottom: -5px;color:#7B8992">',
						'{[this.getResponsiblePerson()]} : {ResponsiblePerson}',
					'</div>',
					'<div class="rowscontent" style="margin-bottom: -5px;color:#7B8992">',
						'{[this.getProjectManager()]} : {ProjectManager}',
					'</div>',
					'<div class="rowscontent">',
						'<div style="position:relative;width:100%;height:20px">',
							'<div class="text-overflow" style="position: absolute;width:40%;top:0px">{[iEPM.util.PubOperation.dateFormatFun(values.LaunchDate)]}</div>',
							'<div class="text-overflow" style="position: absolute;left:40%;width:50%;top:0px">{[iEPM.util.PubOperation.toDecimal(values.ProjectBudget)]}(SG$)</div>',
							'<div class="text-overflow" style="position: absolute;left:90%;width:10%;top:2px;text-align:right;color:{MilestoneStatus}"><b>{Milestone}</b></div>',
						'</div>',
					'</div>',	
				'</div>',
			'</div>',{
				compiled : true,
				getResponsiblePerson : function(){
					return Global.getTipsMsg('responsiblePerson');
				},
				getProjectManager : function(){
					return Global.getTipsMsg('projectManager');
				}
			}
		],
		onItemDisclosure : function(record,btn,index){
			mainCtr.goToProjectDetail(record,index);
		}
	}
});