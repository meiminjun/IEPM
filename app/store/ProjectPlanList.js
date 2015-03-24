/**
 * 项目计划列表store
 * @author duwei
 * @date 2014-04-23
 */
Ext.define('iEPM.store.ProjectPlanList', {
	extend : 'Ext.data.Store',
	config : {
		model : 'iEPM.model.ProjectPlanList',
		autoLoad : false,
		pageSize : 10,
		proxy : {
			type : 'ajax',
			url : Global.domain+ '/api/GetProjectTaskList.ashx',
			timeout : 30000,
			reader : {
				type : 'json',
				rootProperty : 'rows'
			},
			listeners : {
				exception : function(proxy, response, operation) {
//					var params = operation.getRequest().getParams();
//					iEPM.util.PubOperation.offlineAccess("projectPhaseList"+params.ProjectID+params.ParentID, "ProjectPhaseList", operation);
				}
			}
		},
		listeners : {
			load : function(store, records, successful, operation, eOpts) {
				if (successful && operation.getResponse()) {
					var params = operation.getRequest().getParams();
					iEPM.util.PubOperation.onlineLoad("projectPlanList"+params.ProjectID+params.ParentID,operation.getResponse());
				}
			}
		}
	}
});