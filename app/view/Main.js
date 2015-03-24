Ext.define('iEPM.view.Main', {
	extend : 'Ext.Container',
    xtype: 'main',
    requires : [ 'Ext.TitleBar','Ext.Button', 'Ext.Label','iEPM.view.MainList'],
    config: {
    	fullscreen: true,
		navigationBar :false,
	    layout: 'fit',
		items:[{
			xtype: 'titlebar',
		    docked: 'top',
		    cls : 'customToolBar',
            title : 'ePM',
			items : [{
				xtype:'button',
	            ui:'plain',
	            iconCls:'backBtnCls',
	            iconMask:true,
	            docked:'left'
			},{
				xtype:'button',
				name : 'categoryBtn',
				align : 'right',
	            ui:'plain',
	            iconCls:'categoryBtnCls',
	            iconMask:true
			}]
		},{
			xtype : 'mainList',
			store : 'MainList'
		}, {
			xtype : 'toolbar',
			docked : 'bottom',
			cls : 'custom-bottom-toolbar',
			ui : 'dark',
			defaults : {
				xtype : 'button',
				ui : 'dark',
				iconMask : true
			},
			items : [{
                align : 'left',
                ui:'customBtn',
                name : 'registerBtn',
                locales : {
            		text : 'main.registerBtnText'	
            	},
                handler:function(){
                }
			}, {
				xtype : 'spacer'
			},{
				align : 'right',
				iconCls : 'settingIconCls',
				ui : 'customBtn',
				locales : {
					text : 'main.settingsBtnText'
				}
			} ]
		}]
    }
});
