/**
 * 项目附件 store
 * 
 * @author yangkun
 * @date 2014-04-23
 */
Ext.define('iEPM.store.ProjectFileList', {
	extend : 'Ext.data.Store',
	config : {
		model : 'iEPM.model.ProjectFileList',
		autoLoad : false,
		pageSize : 10,
		grouper : {
			groupFn : function(record) {
				return record.get('Stage');
			}
		},
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
//					iEPM.util.PubOperation.offlineAccess("projectFileList"+params.ProjectID, "ProjectFileList", operation);
				}
			}
		},
		listeners : {
			load : function(store, records, successful, operation, eOpts) {
				if (successful && operation.getResponse()) {
					var params = operation.getRequest().getParams();
					iEPM.util.PubOperation.onlineLoad("projectFileList"+params.ProjectID,operation.getResponse());
				}
			}
		}
	}
});