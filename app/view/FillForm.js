/**
 * 月报填报
 * @author duwei
 * @date 2014-04-24
 */
Ext.define('iEPM.view.FillForm', {
	extend : 'Ext.Container',
	xtype : 'fillForm',
	requires : [ 'Ext.TitleBar', 'Ext.Button','Ext.form.Panel','Ext.field.TextArea', 'Ext.Label','Ext.field.Select'],
	config : {
		fullscreen : true,
		navigationBar : false,
		layout : 'fit',
		items : [{
			xtype : 'titlebar',
			docked : 'top',
			cls : 'customToolBar',
			locales : {
				title : 'fillForm.title'
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
            		text : 'fillForm.commitBtnText'	
            	},
            	align : 'right',
            	name : 'commitBtn',
            	ui : 'customTitleBtn'
			} ]
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
					html : 'fillForm.confirmTime'
	            }
			},{
				// 月份
				xtype : 'datepickerfield',
				name : 'fillFormConfirmTime',
				locales : {
					dateFormat : 'fillForm.dateFormat'
				},
				value : new Date(),
				picker : {
					enableLocale : true,
					cls : 'customPicker',
					ui : 'normal',
					modal : true,
					hideOnMaskTap : true,
					value : new Date(),
					slotOrder : ['month', 'year'],
					locales : {
						months : 'months'
					},
					doneButton : {
						ui : 'customBtn',
						locales : {
							text : 'fillForm.doneButtonText'
						}
					},
					cancelButton : {
						ui : 'customBtn',
						locales : {
							text : 'fillForm.cancelButtonText'
						}
					}
				}
			}, {
				xtype : 'label',
				locales  : {
					html : 'fillForm.totalStateSF'
	            }
			}, {
				// 整体状态
				xtype: 'selectfield',
				name : 'totalStateSF',
				labelCls : '',
				labelWidth : '0%',
				style : 'font-size:.7em',
				inputCls : 'text-overflow',
				locales : {
//					label: 'fillForm.twoCategory',
					placeHolder : 'fillForm.totalStatePlaceHolder'
				},
				displayField : 'totalStateText',
				valueField  :'totalStateVal',
				usePicker: true,
				defaultPhonePickerConfig : {
					cls : 'customPicker',
					ui : 'normal',
					modal : true,
					hideOnMaskTap : true,
					doneButton : {
						ui : 'customBtn',
						locales : {
							text : 'fillForm.doneButtonText'
						}
					},
					cancelButton : {
						ui : 'customBtn',
						locales : {
							text : 'fillForm.cancelButtonText'
						}
					}
				}
			},{
				xtype : 'label',
				locales  : {
					html : 'fillForm.taskThisMonth'
	            }
			}, {
				// 本月完成任务
				xtype : 'textareafield',
				name : 'taskThisMonth',
				maxRows: 4
			},{
				xtype : 'label',
				locales  : {
					html : 'fillForm.planforNextMonth'
	            }
			}, {
				// 下月计划
				xtype : 'textareafield',
				name : 'planforNextMonth',
				maxRows: 4
			},{
				xtype : 'label',
				locales  : {
					html : 'fillForm.mainRisk'
	            }
			}, {
				// 主要风险
				xtype : 'textareafield',
				name : 'mainRisk',
				maxRows: 4
			}, {
				xtype : 'label',
				locales  : {
					html : 'fillForm.mainRiskSF'
	            }
			}, {
				// 风险程度
				xtype: 'selectfield',
				name : 'mainRiskSF',
				labelCls : '',
				labelWidth : '0%',
				style : 'font-size:.7em',
				inputCls : 'text-overflow',
				locales : {
//					label: 'fillForm.twoCategory',
					placeHolder : 'fillForm.mainRiskPlaceHolder'
				},
				displayField : 'mainRiskText',
				valueField  :'mainRiskVal',
				usePicker: true,
				defaultPhonePickerConfig : {
					cls : 'customPicker',
					ui : 'normal',
					modal : true,
					hideOnMaskTap : true,
					doneButton : {
						ui : 'customBtn',
						locales : {
							text : 'fillForm.doneButtonText'
						}
					},
					cancelButton : {
						ui : 'customBtn',
						locales : {
							text : 'fillForm.cancelButtonText'
						}
					}
				}
			},{
				xtype : 'label',
				name : 'milestoneLabel',
				locales  : {
					html : 'fillForm.milestone'
	            }
			},{
				
				// 里程碑
				xtype: 'selectfield',
				name : 'milestone',
				labelCls : '',
				labelWidth : '0%',
				style : 'font-size:.7em',
				inputCls : 'text-overflow',
				locales : {
//					label: 'fillForm.twoCategory',
					placeHolder : ''
				},
				displayField : 'Value',
				valueField  :'Key',
				readOnly : true,
				usePicker: true,
				defaultPhonePickerConfig : {
					cls : 'customPicker',
					ui : 'normal',
					modal : true,
					hideOnMaskTap : true,
					doneButton : {
						ui : 'customBtn',
						locales : {
							text : 'fillForm.doneButtonText'
						}
					},
					cancelButton : {
						ui : 'customBtn',
						locales : {
							text : 'fillForm.cancelButtonText'
						}
					}
				}
			
			},
//			{
//				// 里程碑
//				xtype : 'textareafield',
//				name : 'milestone',
//				maxRows: 4
//			},
			{
				xtype : 'label',
				locales  : {
					html : 'fillForm.actualCost'
	            }
			}, {
				// 实际花费
				xtype : 'textfield',
				name : 'actualCost',
				maxLength:16
			}]
		}]
	}
});