/**
 * 注册新项目成员列表store
 * @author duwei
 * @date 2014-06-04
 */
Ext.define('iEPM.store.TeamList', {
	extend : 'Ext.data.Store',
	config : {
		model : 'iEPM.model.TeamList',
		autoLoad : false,
		pageSize : 10,
		proxy : {
			type : 'ajax',
			url : Global.domain+ '/api/GetMemberList.ashx',
			timeout : 30000,
			reader : {
				type : 'json',
				rootProperty : 'rows'
			},
			listeners : {
				exception : function(proxy, response, operation) {
//					var params = operation.getRequest().getParams();
//					iEPM.util.PubOperation.offlineAccess("teamList"+params.CompanyID, "TeamList", operation);
				}
			}
		},
		listeners : {
			load : function(store, records, successful, operation, eOpts) {
				if (successful && operation.getResponse()) {
					var params = operation.getRequest().getParams();
					iEPM.util.PubOperation.onlineLoad("teamList"+params.CompanyID,operation.getResponse());
				}
			}
		}
	}
});