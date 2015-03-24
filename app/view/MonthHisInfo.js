/**
 * 历史月报详情
 * @author duwei
 * @date 2014-04-24
 */
Ext.define('iEPM.view.MonthHisInfo', {
	extend : 'Ext.Container',
	xtype : 'monthHisInfo',
	requires : [ 'Ext.TitleBar', 'Ext.Button','Ext.form.Panel','Ext.Panel','Ext.field.TextArea', 'Ext.Label','Ext.field.Select'],
	config : {
		fullscreen : true,
		navigationBar : false,
		layout : 'fit',
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
			}]
		},{
			xtype : 'formpanel',
			ui : 'normal',
			cls : 'formBgCls',
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
					html : 'monthHisInfo.confirmTime'
	            }
			},{
				// 月份
				xtype : 'datepickerfield',
				name : 'hisInfoConfirmTime',
				readOnly : true,
				usePicker: false,
				locales : {
					dateFormat : 'monthHisInfo.dateFormat'
				}
			}, {
				xtype : 'label',
				locales  : {
					html : 'monthHisInfo.totalStateSF'
	            }
			}, {
				// 整体状态
				xtype: 'selectfield',
				name : 'totalStateSF',
				labelCls : '',
				labelWidth : '0%',
				readOnly : true,
				usePicker: false,
				style : 'font-size:.7em',
				inputCls : 'text-overflow',
				locales : {
//					label: 'fillForm.twoCategory',
					placeHolder : 'monthHisInfo.totalStatePlaceHolder'
				},
				displayField : 'totalStateText',
				valueField  :'totalStateVal'
			},{
				xtype : 'label',
				locales  : {
					html : 'monthHisInfo.taskThisMonth'
	            }
			}, {
				// 本月完成任务
				xtype : 'panel',
				name : 'taskThisMonth',
				style : 'background : #FFFFFF',
				padding : '5px 5px',
				tpl : Ext.create('Ext.XTemplate',
			   			'<div class="defaultFont-style">',
			   				'<div style="word-break: break-all">{taskThisMonth}</div>',
			   			'</div>')
			},{
				xtype : 'label',
				locales  : {
					html : 'monthHisInfo.planforNextMonth'
	            }
			}, {
				// 下月计划
				xtype : 'panel',
				name : 'planforNextMonth',
				style : 'background : #FFFFFF',
				padding : '5px 5px',
				tpl : Ext.create('Ext.XTemplate',
		   			'<div class="defaultFont-style">',
		   				'<div style="word-break: break-all">{planforNextMonth}</div>',
		   			'</div>')
			},{
				xtype : 'label',
				locales  : {
					html : 'monthHisInfo.mainRisk'
	            }
			}, {
				// 主要风险
				xtype : 'panel',
				name : 'mainRisk',
				style : 'background : #FFFFFF',
				padding : '5px 5px',
				tpl : Ext.create('Ext.XTemplate',
		   			'<div class="defaultFont-style">',
		   				'<div style="word-break: break-all">{mainRisk}</div>',
		   			'</div>')
			}, {
				xtype : 'label',
				locales  : {
					html : 'monthHisInfo.mainRiskSF'
	            }
			}, {
				// 风险程度
				xtype: 'selectfield',
				name : 'mainRiskSF',
				labelCls : '',
				labelWidth : '0%',
				readOnly : true,
				usePicker: false,
				style : 'font-size:.7em;',
				inputCls : 'text-overflow',
				locales : {
//					label: 'monthHisInfo.twoCategory',
					placeHolder : 'monthHisInfo.mainRiskPlaceHolder'
				},
				displayField : 'mainRiskText',
				valueField  :'mainRiskVal'
			},
			{
				xtype : 'label',
				name: 'milestoneLab',
				locales  : {
					html : 'monthHisInfo.milestone'
	            }
			},{
				// 里程碑
				xtype: 'selectfield',
				name : 'currmilestone',
				labelCls : '',
				labelWidth : '0%',
				readOnly : true,
				usePicker: false,
				style : 'font-size:.7em;',
				inputCls : 'text-overflow',
				locales : {
//					label: 'monthHisInfo.twoCategory',
					placeHolder : '',
				},
				displayField : 'currmilestoneText',
				valueField  :'currmilestoneVal',
			},
//			{
//				// 里程碑
//				xtype : 'panel',
//				name : 'currmilestone',
//				style : 'background : #FFFFFF',
//				padding : '5px 5px',
//				tpl : Ext.create('Ext.XTemplate',
//		   			'<div class="defaultFont-style">',
//		   				'<div style="word-break: break-all">{mainRisk}12323</div>',
//		   			'</div>')
//			},
			{
				xtype : 'label',
				locales  : {
					html : 'monthHisInfo.actualCost'
	            }
			}, {
				// 实际花费
				xtype : 'panel',
				name : 'actualCost',
				style : 'background : #FFFFFF',
				padding : '5px 5px',
				tpl : Ext.create('Ext.XTemplate',
		   			'<div class="defaultFont-style">',
		   				'<div style="word-break: break-all">{mainCost}</div>',
		   			'</div>')
			}]
		}]
	}
});