/**
 * 注册新项目成员列表
 * @author duwei
 * @date 2014-06-04
 */
Ext.define('iEPM.view.TeamList', {
	extend : 'Ext.Container',
	xtype : 'teamList',
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
				title : 'teamList.title'
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
            		text : 'teamList.confirmBtnText'	
            	},
            	align : 'right',
            	name : 'confirmBtnText',
            	ui : 'customTitleBtn'
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
			store : 'TeamList',
			itemTpl : [
		           '<div class="teamListItemDiv defaultFont-style">',
				    	'<div class="teamListItem-img">',
				    		'<tpl if="isSelect">',
				    			'<img class="checkImg" src="resources/images/icon_select.png" />',
				    		'<tpl else>',
				    			'<img class="checkImg" src="resources/images/icon_unselect.png" />',
			    			'</tpl>',
				    	'</div>',
						'<div class="teamListDetails">',
							'<div class="head text-overflow">{Key}</div>',
						'</div>',
				   '</div>'
			]
		}]
	}
});
