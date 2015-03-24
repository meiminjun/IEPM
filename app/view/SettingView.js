/**
 * Created with JetBrains WebStorm. User: issuser Date: 13-6-19 Time: 下午4:23 To
 * change this template use File | Settings | File Templates.
 */
Ext.define('iEPM.view.SettingView', {
	extend : 'Ext.Container',
	xtype : 'settingview',
	requires : [ 'Ext.TitleBar','Ext.form.FieldSet', 'Ext.List' ],
	config : {
		fullscreen : true,
		padding : '10px 10px 10px 10px',
		cls : 'bgCls',
		items : [ {
			xtype: 'titlebar',
		    docked: 'top',
		    cls : 'customToolBar',
            locales : {
            	title : 'settingview.title'
            },
            items : [{
            	xtype : 'button',
            	ui:'plain',
	            iconCls:'backBtnCls',
	            iconMask:true,
	            align : 'left',
	            handler : function(){
	            	Global.backBtn = this;
					this.setDisabled(true);
	            	mainCtr.getIndexNav().pop();
	            	mainCtr.mainListInitFun();
	            }
            }]
		},{
			xtype : 'fieldset',
			style : 'font-size:12px',
			height : 'auto',
			locales  : {
                title        : 'settingview.fieldset.title',
                instructions : 'settingview.fieldset.instructions'
            },
			items : [ {
				xtype : 'list',
				height : 88,
				scrollable : false,
				loadingText : false,
				cls : 'settingListCls',
				itemTpl : [
					'<div style="position:absolute;top:8px;left:12px">',
						'<div class="settingList-img">',
							'<img class="settingListImg" src="{imgUrl}" />',
						'</div>',
					'</div>',
					'<div class="settingList-row defaultFont-style">',
						'<div class="head"><b>{title}</b></div>',
					'</div>'
				],
				selectedCls : 'settingSelected',
				data : [ {
					title : "中文",
					value : 'zh-cn',
					imgUrl : 'resources/images/zh_icon.png'
				}, {
					title : "English",
					value : 'en-us',
					imgUrl : 'resources/images/en_icon.png'
				} ]
			} ]
		} ]
	},
	initialize : function() {
		this.callParent(arguments);
		var languageList = this.down('list'), store = languageList.getStore();
		var record = store.findRecord('value',Global.language);

		languageList.select(record, true, true);
	}
});