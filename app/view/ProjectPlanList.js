/**
 * 项目计划列表
 * 
 * @author duwei
 * @create 2014-04-23
 */
Ext.define('iEPM.view.ProjectPlanList', {
	extend : 'Ext.Container',
	xtype : 'projectPlanList',
	requires : [ 'Ext.TitleBar', 'Ext.Button', 'Ext.Label', 'Ext.tab.Panel','Ext.dataview.List' ],
	config : {
		fullscreen : true,
		navigationBar : false,
		layout : 'fit',
		items : [ {
			xtype : 'titlebar',
			docked : 'top',
			cls : 'customToolBar',
			items : [ {
				xtype : 'button',
				ui : 'plain',
				iconCls : 'backBtnCls',
				iconMask : true,
				docked : 'left',
				handler : function() {
					Global.backBtn = this;
					this.setDisabled(true);
	            	mainCtr.getIndexNav().pop();
	            	mainCtr.projectPhaseListLoad();
				}
			} ]
		}, {
			xtype : 'list',
			loadingText : false,
			scrollToTopOnRefresh : false,
			store : 'ProjectPlanList',
			ui : 'normal',
			cls : 'projectPlanList bgCls',
			selectedCls : '',
			itemTpl : [ '<div style="position:absolute;top:9px;left:7px">',
							'<div class="projectPlan-img">',
								// 未启动
								'<tpl if="RecordStatus==\'Active\'">',
									'<img class="projectPlanListImg" src="resources/images/status/notLaunch.png" />',
								// 启动
								'<tpl elseif="RecordStatus==\'Processing\'">',
									'<img class="projectPlanListImg" src="resources/images/status/launch.png" />',
								// 完成
								'<tpl else>',
									'<img class="projectPlanListImg" src="resources/images/status/complete.png" />',
								'</tpl>',
							'</div>', 
						'</div>',
						// 检查是否有图纸附件
						'<tpl if="Attach == 1">',
							'<div style="position:absolute;top:44px;left:10px">',
								'<div class="projectPhase-img">',
									'<img class="projectPhaseListImg" src="resources/images/annex.png" />',
								'</div>',
							'</div>',
						'</tpl>',
						'<div class="projectPlan-row defaultFont-style">',
							'<div class="head"><b>{TaskName}</b></div>',
							'<div class="rowscontent text-overflow">{[iEPM.util.PubOperation.dateFormatFun(values.StartTime)]}~{[iEPM.util.PubOperation.dateFormatFun(values.EndTime)]}</div>',	
						'</div>',
						// 未启动显示灰色
						'<tpl if="RecordStatus == \'Active\'">',
							'<div class="checkPoint-disable"></div>',							
						'<tpl else>',
							'<div class="checkPoint-enable"></div>',
						'</tpl>']
		} ]
	}
});
