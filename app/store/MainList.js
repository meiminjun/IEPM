/**
 * 首页列表store
 * @author duwei
 * @date 2013-11-6
 */
Ext.define('iEPM.store.MainList', {
	extend : 'Ext.data.Store',
	config : {
		model : 'iEPM.model.MainList',
		autoLoad : false,
		pageSize : 10,
		grouper: {
	       groupFn: function(record) {
	           return record.get('ProjectType');
	       },
	       sortProperty : 'Sort'
	    },
	    sorters :[{
	    	property : "StatusSort",
	    	direction : "ASC"
	    },{
	    	property : "LaunchDate",
	    	direction: "ASC"
	    }], 
	    proxy : {
			type : 'ajax',
			url : Global.domain+ '/api/GetProjectList.ashx',
			timeout : 30000,
			reader : {
				type : 'json',
				rootProperty : 'rows'
			},
			listeners : {
				exception : function(proxy, response, operation) {
//					iEPM.util.PubOperation.offlineAccess("mainList", "MainList", operation);
				}
			}
		},
		listeners : {
			load : function(store, records, successful, operation, eOpts) {
				if (successful && operation.getResponse()) {
					iEPM.util.PubOperation.onlineLoad("mainList",operation.getResponse());
				}
			}
		}
	}
});