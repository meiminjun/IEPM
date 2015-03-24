/**
 * 项目计划操作历史store
 * 
 * @author duwei
 * @create 2014-05-12
 */
Ext.define('iEPM.store.ProjectHis', {
	extend : 'Ext.data.Store',
	config : {
		model : 'iEPM.model.ProjectHis',
		autoLoad : false,
		pageSize : 10,
		sorters : [{
			property : "CreateTime",
            direction: "DESC"
		}],
		proxy : {
			type : 'ajax',
			url : Global.domain+ '/api/GetProjectTaskHistoryList.ashx',
			timeout : 30000,
			limitParam : 'PageSize',
			pageParam : 'CurrentPage',
			reader : {
				type : 'json',
				rootProperty : 'rows'
			},
			listeners : {
				exception : function(proxy, response, operation) {
//					var params = operation.getRequest().getParams();
//					iEPM.util.PubOperation.offlineAccess("projectHis"+params.TaskID, "ProjectHis", operation);
				}
			}
		},
		listeners : {
			load : function(store, records, successful, operation, eOpts) {
				if (successful && operation.getResponse()) {
					var params = operation.getRequest().getParams();
					iEPM.util.PubOperation.onlineLoad("projectHis"+params.TaskID,operation.getResponse());
				}
			}
		}
	}
});