/**
 * 项目计划历史model
 * 
 * @author duwei
 * @create 2014-05-12
 */
Ext.define('iEPM.model.ProjectHis', {
	extend : 'Ext.data.Model',
	config : {
		fields : [{
			name : 'UserName',
			type : 'auto'
		}, {
			name : 'CreateTime',
			type : 'auto'
		}, {
			name : 'Content',
			type : 'auto'
		}, {
			name : 'RecordStatus',
			type : 'auto'
		}, {
			// 附件数量
			name : 'AttachCount',
			type : 'int'
		}, {
			// 附件列表
			name : 'AttachList',
			type : 'object'
		}, {
			// 附件列表str
			name : 'ImgList',
			type : 'string'
		}, {
			// 是否只有一条记录
			name : 'isOnly',
			type : 'boolean',
			defaultValue : false
		} ]
	}
});