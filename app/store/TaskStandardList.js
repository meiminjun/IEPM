/**
 * 获取任务标准列表store
 * @author duwei
 * @date 2014-06-10
 */
Ext.define('iEPM.store.TaskStandardList', {
	extend : 'Ext.data.Store',
	config : {
		model : 'iEPM.model.TaskStandardList',
		autoLoad : false,
		pageSize : 10,
		proxy : {
			type : 'ajax',
			url : Global.domain+ '/api/GetTaskStandardList.ashx',
			timeout : 30000,
			reader : {
				type : 'json',
				rootProperty : 'rows'
			},
			listeners : {
				exception : function(proxy, response, operation) {
//					var params = operation.getRequest().getParams();
//					iEPM.util.PubOperation.offlineAccess("taskStandardList"+params.taskID, "ProjectMembers", operation);
				}
			}
		},
		listeners : {
			load : function(store, records, successful, operation, eOpts) {
				if (successful && operation.getResponse()) {
					var params = operation.getRequest().getParams();
					iEPM.util.PubOperation.onlineLoad("taskStandardList"+params.taskID,operation.getResponse());
				}
			}
		}
	}
});