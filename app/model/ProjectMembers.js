/**
 * 项目成员列表model
 * 
 * @author yangkun
 * @create 2014-04-23
 */
Ext.define('iEPM.model.ProjectMembers', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ {
			// 用户ID
			name : 'MemberID',
			type : 'auto'
		}, {
			// 名字
			name : 'Name',
			type : 'auto'
		}, {
			// 电话
			name : 'Phone',
			type : 'auto'
		} ]
	}
});