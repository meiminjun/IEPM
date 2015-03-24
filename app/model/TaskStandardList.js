/**
 * 获取任务标准列表model
 * 
 * @author duwei
 * @create 2014-06-10
 */
Ext.define('iEPM.model.TaskStandardList', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ {
			name : 'CheckID',
			type : 'auto'
		}, {
			name : 'Completed',
			type : 'auto'
		},{
			name : 'Content',
			type : 'auto'
		},{
			name : 'isSelect',
			type : 'auto',
			defaultValue : false
		}]
	}
});