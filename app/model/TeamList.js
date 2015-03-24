/**
 * 注册新项目成员列表model
 * 
 * @author duwei
 * @create 2014-06-04
 */
Ext.define('iEPM.model.TeamList', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ {
			// 用户ID
			name : 'ID',
			type : 'auto'
		}, {
			// 名字
			name : 'Key',
			type : 'auto'
		},{
			name : 'isSelect',
			type : 'auto',
			defaultValue : false
		}]
	}
});