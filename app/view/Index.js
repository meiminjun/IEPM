/**
 * index navigationView
 * @author duwei
 * @date 2013-11-8
 */
Ext.define('iEPM.view.Index', {

	extend: 'Ext.NavigationView',
	id : 'indexNav',
	xtype: 'indexNav',

	config: {

        autoDestroy: false,
        navigationBar :false,
		useTitleForBackButtonText: false,
		
		// add pop event listeners
		listeners : {
			'pop' : function(obj,view,eOpts){
				mainCtr.navigationViewBack();
		        if(Global.backBtn){Global.backBtn.setDisabled(false);}
			}
		},

		items: [
			{
				xclass : 'iEPM.view.Main'
			}
		]
	}
});