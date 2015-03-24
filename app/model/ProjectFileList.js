Ext.define('iEPM.model.ProjectFileList', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ {
			// 文件名称
			name : 'Title',
			type : 'auto'
		}, {
			// 文件类型
			name : 'Type',
			type : 'auto'
		}, {
			// 文件大小
			name : 'Size',
			type : 'auto'
		}, {
			// 作者
			name : 'Author',
			type : 'auto'
		}, {
			// 日期
			name : 'date',
			type : 'auto'
		}, {
			// 地址
			name : 'Url',
			type : 'auto'
		}, {
			// 阶段
			name : 'Stage',
			type : 'auto'
		},{
			name : 'Description',
			type : 'auto'
		} ]
	}
});
