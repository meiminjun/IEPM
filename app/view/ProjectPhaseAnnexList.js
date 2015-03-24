/**
 * 项目阶段附件列表
 * @author duwei
 * @date 2014-04-24
 */
Ext.define('iEPM.view.ProjectPhaseAnnexList', {
	extend : 'Ext.Container',
	xtype : 'projectPhaseAnnexList',
	requires : [ 'Ext.TitleBar', 'Ext.Button', 'Ext.Label', 'Ext.tab.Panel','Ext.dataview.List' ],
	config : {
		fullscreen : true,
		navigationBar : false,
		layout : 'fit',
		items : [ {
			xtype : 'titlebar',
			docked : 'top',
			cls : 'customToolBar',
			locales : {
				title : 'annexList.title'
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
			}]
		}, {
			xtype : 'list',
			style : 'background:#ffffff;',
			ui : 'normal',
			cls : 'bgCls',
			grouped : false,
			scrollToTopOnRefresh : false,
			flex : 9,
			loadingText : false,
			cls : "projectFileList bgCls",
			selectedCls : '',
			store : 'ProjectPhaseAnnexList',
			itemTpl : [
					'<div class="projectFileListDiv defaultFont-style">',
					'<div class="projectFileListDetails">',
						'<div class="head text-overflow">',
							'{Title}',
						'</div>',
						'<div class="rowscontent">',
							'<div style="position:relative;width:100%;height:20px">',
								'<div class="text-overflow" style="position: absolute;width:100%;top:0px;">{Description}</div>',
							'</div>',
						'</div>',	
					'</div>',
					'</div>'
			]
		} ]
	}
});