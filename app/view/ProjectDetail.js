Ext.define('iEPM.view.ProjectDetail', {
	extend : 'Ext.Container',
	xtype : 'projectDetail',
	requires : [ 'Ext.TitleBar', 'Ext.Button', 'Ext.Label' ],
	config : {
		fullscreen : true,
		navigationBar : false,
		layout : 'vbox',
		cls: 'formBgCls',
		items : [ {
			xtype : 'titlebar',
			docked : 'top',
			cls : 'customToolBar',
			flex : 1,
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
		}, {
			xtype : 'container',
			flex : 9,
			name : 'contentDiv',
			layout : 'fit',
			items : [{
				xtype : 'projectBaseInfo',
				hidden : false
			},{
				xtype : 'monthHisList',
				hidden : true
			},{
				xtype : 'projectFileList',
				hidden : true
			}]
		} ,{
			xtype : 'container',
			height : 60,
			layout : 'hbox',
			docked : 'bottom',
			defaults : {
				flex : 1
			},
			items : [ {
				xtype : 'button',
				name : 'basicInfo',
				ui : 'customSelectBtn',
				pressedCls : 'customPressedCls',
				iconCls : 'basicInfoWhiteIconCls',
				iconMask : true,
				iconAlign : 'top',
				locales : {
					text : 'projectDetail.basicInfoBtnText'
				}
			}, {
				xtype : 'button',
				name : 'monthHis',
				ui : 'customDefaultBtn',
				pressedCls : 'customPressedCls',
				iconCls : 'monthHisIconCls',
				iconMask : true,
				iconAlign : 'top',
				locales : {
					text : 'projectDetail.monthHisBtnText'
				}
			}, {
				xtype : 'button',
				name : 'annex',
				ui : 'customDefaultBtn2',
				pressedCls : 'customPressedCls',
				iconCls : 'annexGaryIconCls',
				iconMask : true,
				iconAlign : 'top',
				locales : {
					text : 'projectDetail.annexBtnText'
				}
			} ]
		}]
	}
});
