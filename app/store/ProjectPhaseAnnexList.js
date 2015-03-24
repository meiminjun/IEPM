/**
 * 项目阶段附件 store
 * 
 * @author duwei
 * @date 2014-04-24
 */
Ext.define('iEPM.store.ProjectPhaseAnnexList', {
	extend : 'Ext.data.Store',
	config : {
		model : 'iEPM.model.AnnexList',
		pageSize : 10,
		proxy : {
			type : 'ajax',
			url : Global.domain+ '/api/GetAttachList.ashx',
			timeout : 30000,
			reader : {
				type : 'json',
				rootProperty : 'rows'
			},
			listeners : {
				exception : function(proxy, response, operation) {
//					var params = operation.getRequest().getParams();
//					iEPM.util.PubOperation.offlineAccess("projectPhaseAnnexList"+params.ProjectID+params.TaskID, "ProjectPhaseAnnexList", operation);
				}
			}
		},
		listeners : {
			load : function(store, records, successful, operation, eOpts) {
				if (successful && operation.getResponse()) {
					var params = operation.getRequest().getParams();
					iEPM.util.PubOperation.onlineLoad("projectPhaseAnnexList"+params.ProjectID+params.TaskID,operation.getResponse());
				}
			}
		}
	}
});