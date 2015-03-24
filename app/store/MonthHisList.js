/**
 * 历史月报 store
 * 
 * @author duwei
 * @date 2014-05-13
 */
Ext.define('iEPM.store.MonthHisList', {
	extend : 'Ext.data.Store',
	config : {
		model : 'iEPM.model.MonthHisList',
//		sorters :[{
//	    	property : "Monthly",
//	    	direction: "DESC"
//	    }], 
		autoLoad : false,
		pageSize : 10,
		proxy : {
			type : 'ajax',
			url : Global.domain+ '/api/GetProjectReportList.ashx',
			timeout : 30000,
			reader : {
				type : 'json',
				rootProperty : 'rows'
			},
			listeners : {
				exception : function(proxy, response, operation) {
//					var params = operation.getRequest().getParams();
//					iEPM.util.PubOperation.offlineAccess("monthHisList"+Global.projectId, "MonthHisList", operation);
				}
			}
		},
		listeners : {
			load : function(store, records, successful, operation, eOpts) {
				if (successful && operation.getResponse()) {
					var params = operation.getRequest().getParams();
					iEPM.util.PubOperation.onlineLoad("monthHisList"+params.ProjectID,operation.getResponse());
				}
			}
		}
	}
});