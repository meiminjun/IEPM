/**
 * 注册新项目团队信息
 * @autor duwei
 * @date 2014-05-15
 */
Ext.define('iEPM.view.TeamInfomation', {
	extend : 'Ext.form.Panel',
	xtype : 'teamInfomation',
	requires : [ 'Ext.field.Text', 'Ext.Label' ,'Ext.field.Hidden'],
	config : {
		ui : 'normal',
		scrollable : false,
		padding : '5 10 5 10',
		cls: 'formBgClsWhite',
		defaults : {
			margin : '10 0 10 0',
			cls : 'div-corners defaultFont-style'
		},
		items : [ {
			xtype : 'label',
			locales  : {
				html : 'teamInfomation.proManager'
            }
		}, {
			xtype: 'hiddenfield',
            name: 'proManagerHF'
		},{
			// 项目经理
			xtype : 'textfield',
			name : 'proManager',
			readOnly : true,
			padding : '0px 40px 0px 0px',
			style : 'border: 1px solid #CECECE'
		}, {
			xtype : 'panel',
			html : '<div class="arrow-black" style="margin:-2.9em 1em auto auto;"></div>'
		},{
			xtype : 'label',
			locales  : {
				html : 'teamInfomation.businessOwner'
            },
            margin : '-20px auto auto auto'
		}, {
			xtype: 'hiddenfield',
            name: 'businessOwnerHF'
		},{
			// 业务负责人
			xtype : 'textfield',
			name : 'businessOwner',
			readOnly : true,
			padding : '0px 40px 0px 0px',
			style : 'border: 1px solid #CECECE'
		}, {
			xtype : 'panel',
			html : '<div class="arrow-black" style="margin:-2.9em 1em auto auto;"></div>'
		},{
			xtype : 'label',
			locales  : {
				html : 'teamInfomation.teamMembers'
            },
            margin : '-20px auto auto auto'
		},{
			xtype: 'hiddenfield',
            name: 'teamMembersHF'
		},{
			// 团队成员
			xtype : 'textfield',
			name : 'teamMembers',
			readOnly : true,
			padding : '0px 40px 0px 0px',
			style : 'border: 1px solid #CECECE'
		}, {
			xtype : 'panel',
			html : '<div class="arrow-black" style="margin:-2.9em 1em auto auto;"></div>'
		}]
	}
});