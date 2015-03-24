/**
 * 注册新项目基本信息
 * @autor duwei
 * @date 2014-05-15
 */
Ext.define('iEPM.view.BasicInfomation', {
	extend : 'Ext.form.Panel',
	xtype : 'basicInfomation',
	requires : [ 'Ext.field.Text', 'Ext.Label','Ext.field.Select','Ext.field.DatePicker' ],
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
				html : 'basicInfomation.proName'
            }
		}, {
			// 项目名称
			xtype : 'textfield',
			name : 'proName',
			style : 'border: 1px solid #CECECE'
		},{
			xtype : 'label',
			locales  : {
				html : 'basicInfomation.proCompany'
            }
		},{
			// 所属公司
			xtype: 'selectfield',
			name : 'proCompany',
			labelCls : '',
			labelWidth : '0%',
			style : 'font-size:.7em;border: 1px solid #CECECE',
			inputCls : 'text-overflow',
			locales : {
				placeHolder : 'basicInfomation.proCompanyPlaceHolder'
			},
			displayField : 'CompanyName',
			valueField  :'CompanyID',
			usePicker: true,
			defaultPhonePickerConfig : {
				cls : 'customPicker',
				ui : 'normal',
				id : 'proCompanyPicker',
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
				html : 'basicInfomation.proTypeList'
            }
		},{
			// 项目类型
			xtype: 'selectfield',
			name : 'proTypeList',
			labelCls : '',
			labelWidth : '0%',
			style : 'font-size:.7em;border: 1px solid #CECECE',
			inputCls : 'text-overflow',
			locales : {
				placeHolder : 'basicInfomation.proTypeListPlaceHolder'
			},
			displayField : 'Key',
			valueField  :'ID',
			usePicker: true,
			defaultPhonePickerConfig : {
				cls : 'customPicker',
				ui : 'normal',
				id : 'proTypeListPicker',
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
				html : 'basicInfomation.proScale'
            }
		},{
			// 项目规模
			xtype: 'selectfield',
			name : 'proScaleList',
			labelCls : '',
			labelWidth : '0%',
			style : 'font-size:.7em;border: 1px solid #CECECE',
			inputCls : 'text-overflow',
			locales : {
				placeHolder : 'basicInfomation.proScaleListPlaceHolder'
			},
			displayField : 'Key',
			valueField  :'ID',
			usePicker: true,
			defaultPhonePickerConfig : {
				cls : 'customPicker',
				ui : 'normal',
				id : 'proScaleListPicker',
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
				html : 'basicInfomation.proBudget'
            }
		}, {
			// 项目预算
			xtype : 'textfield',
			name : 'proBudget',
			maxLength : 14,
			style : 'border: 1px solid #CECECE'
		}, {
			xtype : 'label',
			locales  : {
				html : 'basicInfomation.proStartTime'
            }
		}, {
			// 开始日期
			xtype : 'datepickerfield',
			style : 'border: 1px solid #CECECE',
			name : 'proStartTime',
			locales : {
				placeHolder : 'basicInfomation.begindatePlaceholder',
				dateFormat : 'basicInfomation.dateFormat'
			},
			value : new Date(),
			picker : {
				enableLocale : true,
				cls : 'customPicker',
				ui : 'normal',
				modal : true,
				hideOnMaskTap : true,
				value : new Date(),
				yearFrom : 2000,
				yearTo  : 2024,
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
				html : 'basicInfomation.proEndTime'
            }
		}, {
			// 结束日期
			xtype : 'datepickerfield',
			name : 'proEndTime',
			style : 'border: 1px solid #CECECE',
			locales : {
				placeHolder : 'basicInfomation.enddatePlaceholder',
				dateFormat : 'basicInfomation.dateFormat'
			},
			value : new Date(),
			picker : {
				enableLocale : true,
				cls : 'customPicker',
				ui : 'normal',
				modal : true,
				hideOnMaskTap : true,
				value : new Date(),
				yearFrom : 2000,
				yearTo  : 2024,
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
		}]
	}
});