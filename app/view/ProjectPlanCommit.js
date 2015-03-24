/**
 * 项目计划提交
 * @author duwei
 * @date 2014-04-24
 */
Ext.define('iEPM.view.ProjectPlanCommit', {
	extend : 'Ext.Container',
	xtype : 'projectPlanCommit',
	requires : [ 'Ext.TitleBar', 'Ext.Button','Ext.form.Panel','Ext.field.TextArea'],
	config : {
		fullscreen : true,
		navigationBar : false,
		layout : 'vbox',
		items : [{
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
				}
			},{
				xtype : 'button',
				locales : {
            		text : 'projectPlanCommit.commitBtnText'	
            	},
            	align : 'right',
            	name : 'commitBtn',
            	ui : 'customTitleBtn'
			} ]
		},{
			xtype : 'formpanel',
			ui : 'normal',
			cls : 'formBgCls',
			flex : 2,
			scrollable :false,
			padding : '5 10 5 10',
			defaults : {
				margin : '10 0 10 0',
				cls : 'div-corners defaultFont-style'
			},
			items : [{
				xtype : 'textareafield',
				name : 'planTaskRemark',
				maxRows: 4
			}]
		},{
			xtype : 'toolbar',
			cls : 'titleBarCls',
			hidden : false,
			items : [ {
				xtype : 'button',
				ui : 'plain',
				locales : {
					text : 'projectPlanCommit.itemText'
				},
				cls : 'tagBtnCls'
			}, {
				xtype : 'label',
				cls : 'tagTriggleCls'
			}, {
				xtype : 'spacer'
			} ]
		},{
			xtype : 'list',
			flex : 5,
			name : 'taskStandardList',
			style : 'background:#ffffff;',
			ui : 'normal',
			pressedCls : 'customListItem-item-pressed',
			selectedCls : 'customListItem-item-selected',
			cls : "projectMembersCls bgCls",
			hidden : false,
			loadingText : false,
			scrollToTopOnRefresh : false,
			store : 'TaskStandardList',
			itemTpl: [
				'<div class="teamListItemDiv defaultFont-style">',
					'<div class="teamListItem-img">',
						'<tpl if="isSelect">',
							'<img class="checkImg" src="resources/images/icon_select.png" />',
						'<tpl else>',
							'<img class="checkImg" src="resources/images/icon_unselect.png" />',
						'</tpl>',
					'</div>',
					'<div class="teamListDetails">',
						'<div class="head text-overflow">{Content}</div>',
					'</div>',
				'</div>'
			]
		}]
	}
});