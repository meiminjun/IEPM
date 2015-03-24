/**
 * 项目计划定义actionsheet
 * 
 * @author duwei
 * @create 2014-04-23
 */
Ext.define('iEPM.view.PlanActionSheet', {
	extend : 'Ext.picker.Picker',
	xtype : 'planActionSheet',
	requires : [],
	config : {
		cls : 'customPicker',
		ui : 'normal',
		modal : true,
		hideOnMaskTap : true,
		doneButton : {
			ui : 'customBtn',
			locales : {
				text : 'planActionSheet.doneButtonText'
			}
		},
		cancelButton : {
			ui : 'customBtn',
			locales : {
				text : 'planActionSheet.cancelButtonText'
			}
		},
		toolbar : {
			locales : {
				title : 'planActionSheet.title'
			}
		}
	}
});
