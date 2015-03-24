/**
 * 项目成员列表
 * @author yangkun
 * @date 2014-04-24
 */
Ext.define('iEPM.view.ProjectMembers', {
	extend : 'Ext.Container',
	xtype : 'projectMembers',
	requires : [ 'Ext.TitleBar', 'Ext.Button', 'Ext.Label','Ext.dataview.List' ],
	config : {
		fullscreen : true,
		navigationBar : false,
		layout : 'vbox',
		items : [ {
			xtype : 'titlebar',
			docked : 'top',
			cls : 'customToolBar',
			flex : 1,
			locales : {
				title : 'projectMembers.title'
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
			} ]
		},{
			xtype : 'list',
			style : 'background:#ffffff;',
			ui : 'normal',
			cls : 'bgCls',
			grouped : false,
			scrollToTopOnRefresh : false,
			flex : 9,
			loadingText : false,
			cls : "projectMembersCls bgCls",
			selectedCls : '',
			store : 'ProjectMembers',
			itemTpl : [
				'<div class="projectMembersListDiv defaultFont-style">',
					'<div class="projectMembersListDetails">',
						'<div class="head text-overflow">',
							'{Name}',
						'</div>',
//						'<div class="rowscontent">',
//							'<div style="position:relative;width:100%;height:20px">',
//								'<div class="text-overflow" style="position: absolute;width:60%;top:0px;">{Author}</div>',
//								'<div class="text-overflow" style="position: absolute;left:60%;width:40%;top:2px">{date}</div>',
//							'</div>',
//						'</div>',	
					'</div>',
				'</div>'
			]
		}]
	}
});
