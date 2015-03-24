/**
 * 项目阶段计划变更选择项model
 * @author duwei
 * @create 2014-04-24
 */
Ext.define('iEPM.model.SelectFieldView', {
	extend : 'Ext.data.Model',
	config : {
		fields : [{
			name : 'id',
			type : 'auto'
		},{
			name : 'title',
			type : 'auto'
		},{
			name : 'imgUrl',
			type : 'auto'
		}]
	}
});