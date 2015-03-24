/**
 * 项目阶段计划列表
 * 
 * @author duwei
 * @create 2014-04-22
 */
Ext.define('iEPM.view.ProjectPhaseList', {
	extend : 'Ext.Container',
	xtype : 'projectPhaseList',
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
					Global.projectState = '';
	            	mainCtr.getIndexNav().pop();
	            	mainCtr.mainListInitFun();
				}
			},{
				xtype : 'button',
            	align : 'right',
            	name : 'changeBtn',
            	ui : 'plain',
            	iconCls : 'fillFormAddBtnCls',
            	iconMask : true
			}]
		}, {
			xtype : 'list',
			loadingText : false,
			scrollToTopOnRefresh : false,
			store : 'ProjectPhaseList',
			ui : 'normal',
			cls : 'projectPhaseList bgCls',
			selectedCls : '',
			itemTpl : ['<div class="placeItemDiv defaultFont-style">',
						 '<div class="phaseDetails">',
							 '<div class="title text-overflow">{TaskName}</div>',
						 	 '<div class="content text-overflow">{[iEPM.util.PubOperation.dateFormatFun(values.StartTime)]}~{[iEPM.util.PubOperation.dateFormatFun(values.EndTime)]}</div>',
							 '<div class="itemDiv_right">',
			                    '<div class="itemDiv_percente">' ,
				                    '<div style="height:100%;width: {PassedPercent}%;left:0%;background-color:#23903F;position: absolute;">' ,
				                    '</div>',
				                    '<div style="height:100%;width: {NotPassPercent}%;left:{PassedPercent}%;background-color:#909193;position: absolute;">',
				                    '</div>',
			                    '</div>',
			                    '<div class="itemDiv_percente1">' ,
				                    '<div style="border-right:1px solid #ffffff;height:100%;width: {PassedPercent}%;left:0%;background-color:#485864;position: absolute;">' ,
					                    '<tpl if="PassedPercent &gt; 10">',
					                    	'{PassedPercent}%' ,
					                    '</tpl>',
				                    '</div>',
				                    '<div style="height:100%;width: {NotPassPercent}%;left:{PassedPercent}%;background-color: #485864;position: absolute;">' ,
					                    '<tpl if="NotPassPercent &gt; 10">',
					                    '{NotPassPercent}%' ,
					                    '</tpl>',
				                    '</div>',
			                    '</div>',
		                    '</div>',
		                 '</div>',
	                 '</div>',
	                 // 检查是否有图纸附件
					 '<tpl if="Attach == 1">',
						'<div style="position:absolute;top:28px;right:10px">',
							'<div class="projectPhase-img">',
								'<img class="projectPhaseListImg" src="resources/images/annex.png" />',
							'</div>',
						'</div>',
					 '</tpl>']
		} ]
	}
});
