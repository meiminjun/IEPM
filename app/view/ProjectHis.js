/**
 * 项目计划操作历史
 * 
 * @author duwei
 * @create 2014-05-12
 */
Ext.define('iEPM.view.ProjectHis', {
	extend : 'Ext.Container',
	xtype : 'projectHis',
	requires : [ 'Ext.TitleBar','Ext.List','Ext.Label','Ext.dataview.ListItemHeader'],
	config : {
		layout : 'vbox',
		items : [{
			xtype : 'titlebar',
			docked : 'top',
			cls : 'customToolBar',
			locales  : {
	            title : 'projectHis.title'
	        },
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
				}
			},{
				xtype : 'button',
				locales : {
            		text : 'projectHis.editBtn'	
            	},
            	align : 'right',
            	name : 'editBtn',
            	ui : 'customTitleBtn',
            	hidden : true,
            	listeners : {
            		element : 'element',
            		tap : function(){
            			projectPlanCtr.showPlanActionSheetFn();
            		}
            	}
			}]
		},{
			xtype : 'list',
			loadingText : false,
			flex : 9,
			ui : 'projectHis',
			cls : 'projectHis bgCls',
			store : 'ProjectHis',
			itemTpl : [ '<div class="defaultFont-style">',
				            '<div style="position:relative;top:12px;left:-5px">',
								'<div class="checkPoint-img">',
									'<tpl if="RecordStatus==\'Active\'">',
										'<img class="projectPlanListImg" src="resources/images/status/notLaunch.png" />',
									'<tpl elseif="RecordStatus==\'Processing\'">',
										'<img class="projectPlanListImg" src="resources/images/status/launch.png" />',
									'<tpl else>',
										'<img class="projectPlanListImg" src="resources/images/status/complete.png" />',
									'</tpl>',
								'</div>',
							'</div>',
							'<div class="checkHis-row">',
								'<div class="head text-overflow">',
									'<b>{UserName}</b>',
								'</div>',
								'<div class="rowscontent" style="color:#759297;margin-left:.3em;min-height: 20px">{[this.joinContent(values.Content)]}</div>',
								'<div class="rowscontent">',
									'<div style="position:relative;width:100%;height:20px;margin-left:.3em">',
										'<div style="position: absolute;width:0%;height:20px"></div>',
										'<div style="position: absolute;width:100%;left:0%;text-align:right;height:20px">{[iEPM.util.PubOperation.dataFormatLogogram(values.CreateTime,"")]}</div>',
									'</div>',
								'</div>',
							'</div>',
						'</div>',{
						// 编译
						compiled : true,
						joinContent : function(content) {
							if(!Ext.isEmpty(content)){
								return content;
							}else{
								return Global.getTipsMsg('hisNoContent');
							}
						},
						setLeftVal : function(index){
							if(index == 1){
								return 'margin-left:0px;';
							}else if(index == 2){
								return 'margin-left:45px;';
							}else if(index == 3){
								return 'margin-left:90px;';
							}
						}
			}],
//			plugins : [{
//				xclass : 'Ext.plugin.ListPaging',
//				autoPaging : false,
//				locales : {
//					loadMoreText : 'listPaging.loadMoreText',
//					noMoreRecordsText : 'listPaging.noMoreRecordsText'
//				}
//			}],
			items : [{
				xtype : 'container',
				scrollDock: 'top',
		        docked: 'top',
		        items : [{
		        	xtype : 'label',
		        	name : 'hisSummary',
		        	style : 'background-color : white',
					tpl: Ext.create('Ext.XTemplate',
							'<div style="position:relative;padding : .5em .5em">'+
							'<div class="checkPoint-img">'+
								'<tpl if="RecordStatus==\'Active\'">',
									'<img class="projectPlanListImg" src="resources/images/status/notLaunch.png" />',
								'<tpl elseif="RecordStatus==\'Processing\'">',
									'<img class="projectPlanListImg" src="resources/images/status/launch.png" />',
								'<tpl else>',
									'<img class="projectPlanListImg" src="resources/images/status/complete.png" />',
								'</tpl>',
							'</div>'+
							'<div class="checkPoint-row defaultFont-style" style="margin: 10px 0px 5px 40px;">'+
								'<div class="head"><b>{TaskName}</b></div>',
								'<div class="rowscontent text-overflow" style="color:#414042;">{[Global.getTipsMsg("schedule")]}：{[iEPM.util.PubOperation.dateFormatFun(values.EndTime)]}</div>',
							'</div>',
							{
								compile : true,
								setLeftVal : function(index){
									if(index == 1){
										return 'margin-left:0px;';
									}else if(index == 2){
										return 'margin-left:45px;';
									}else if(index == 3){
										return 'margin-left:90px;';
									}
								}
							})
					},{
						xtype : 'listitemheader',
						locales  : {
			                html : 'projectHis.historyVal'
			            }
					}]
				}]
		} ]
	}
});