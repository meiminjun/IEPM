/**
 * 首页controller
 */
Ext.define('iEPM.controller.SettingView', {
	extend : 'Ext.app.Controller',

	config : {
		refs : {
			indexNav : 'indexNav',
			checkPointList : 'settingview list'
		},
		control : {
			checkPointList : {
				itemsingletap : 'onCheckPointListTap'
			}
		}
	},
	/**
	 * 设置语言
	 * @param list
	 * @param index
	 * @param item
	 * @param record
	 * @param e
	 * @param eOpts
	 */
	onCheckPointListTap : function(list, index, item, record, e, eOpts){
		Global.language = record.get('value');
		//缓存当前用户选择的语言数据
		iEPM.util.PubOperation.onlineLoad('iEPMLanguage',null,record.get('value'));
		iEPM.ux.Manager.updateLocale(record.get('value'));
		
		if(record.get('value') == 'zh-cn'){
			Ext.Date.monthNames = ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"];
		}else{
			Ext.Date.monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
		}
	}
});