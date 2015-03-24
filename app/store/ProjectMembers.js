/**
 * 项目成员列表store
 * @author yangkun
 * @date 2014-04-23
 */
Ext.define('iEPM.store.ProjectMembers', {
	extend : 'Ext.data.Store',
	config : {
		model : 'iEPM.model.ProjectMembers',
		autoLoad : false,
		pageSize : 10,
		proxy : {
			type : 'ajax',
			url : Global.domain+ '/api/GetProjectTeamMemberList.ashx',
			timeout : 30000,
			reader : {
				type : 'json',
				rootProperty : 'rows'
			},
			listeners : {
				exception : function(proxy, response, operation) {
//					var params = operation.getRequest().getParams();
//					iEPM.util.PubOperation.offlineAccess("projectMembers"+Global.projectId, "ProjectMembers", operation);
				}
			}
		},
		listeners : {
			load : function(store, records, successful, operation, eOpts) {
				if (successful && operation.getResponse()) {
					var params = operation.getRequest().getParams();
					iEPM.util.PubOperation.onlineLoad("projectMembers"+params.ProjectID,operation.getResponse());
				}
			}
		}
	}
});