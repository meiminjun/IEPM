Ext.define('iEPM.view.ProjectBaseInfo', {
	extend : 'Ext.form.Panel',
	xtype : 'projectBaseInfo',
	requires : [ 'Ext.field.Text', 'Ext.Label' ],
	config : {
		ui : 'normal',
		cls : 'formBgClsWhite',
		scrollable : {
			direction : 'vertical',
			directionLock : true
		},
		padding : '5 10 5 10',
		defaults : {
			margin : '10 0 10 0',
			cls : 'div-corners defaultFont-style'
		},
		items : [{
   			xtype : 'label',
			locales  : {
				html : 'projectBaseInfo.lblProgress'
            }
		},{
			xtype : 'label',
			locales  : {
				html : 'projectBaseInfo.lblProjectName'
            }
		}, {
			// 项目名称
			xtype : 'textfield',
			name : 'proName',
			readOnly : true,
			style : 'border: 1px solid #CECECE'
		},{
			xtype : 'label',
			locales  : {
				html : 'projectBaseInfo.lblCountry'
            }
		}, {
			// 国家
			xtype : 'textfield',
			name : 'country',
			readOnly : true,
			style : 'border: 1px solid #CECECE'
		},{
			xtype : 'label',
			locales  : {
				html : 'projectBaseInfo.lblBudget'
            }
		}, {
			// 项目预算
			xtype : 'textfield',
			name : 'GFA',
			readOnly : true,
			style : 'border: 1px solid #CECECE'
		}, {
			xtype : 'label',
			locales  : {
				html : 'projectBaseInfo.lblBeginTime'
            }
		}, {
			// 开始日期
			xtype : 'textfield',
			name : 'commencementDate',
			readOnly : true,
			style : 'border: 1px solid #CECECE'
		}, {
			xtype : 'label',
			locales  : {
				html : 'projectBaseInfo.lblEndTime'
            }
		}, {
			// 结束日期
			xtype : 'textfield',
			name : 'completeDate',
			readOnly : true,
			style : 'border: 1px solid #CECECE'
		}, {
			xtype : 'label',
			locales  : {
				html : 'projectBaseInfo.lblProjectManager'
            }
		}, {
			// 项目经理
			xtype : 'textfield',
			name : 'projectManager',
			readOnly : true,
			style : 'border: 1px solid #CECECE'
		}, {
			xtype : 'label',
			locales  : {
				html : 'projectBaseInfo.lblBusinessLeader'
            }
		}, {
			// 业务负责人
			xtype : 'textfield',
			name : 'businessLeader',
			readOnly : true,
			style : 'border: 1px solid #CECECE'
		}, {
			xtype : 'label',
			locales  : {
				html : 'projectBaseInfo.lblMembers'
            }
		}, {
			// 项目成员
			xtype : 'textfield',
			name : 'members',
			cls : 'memberTFCls',
			readOnly : true,
			padding : '0px 40px 0px 0px',
			style : 'border: 1px solid #CECECE'
		}, {
			xtype : 'panel',
			html : '<div class="arrow-black" style="margin:-3em 1em auto auto;"></div>'
		}]
	}
});