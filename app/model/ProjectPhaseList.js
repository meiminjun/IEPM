/**
 * 项目阶段计划列表model
 * 
 * @author duwei
 * @create 2014-04-22
 */
Ext.define('iEPM.model.ProjectPhaseList', {
	extend : 'Ext.data.Model',
	config : {
		fields : [{
			name : 'TaskID',
			type : 'int'
		},{
			name : 'TaskName',
			type : 'string'
		},{
			name : 'StartTime',
			type : 'auto'
		},{
			name : 'EndTime',
			type : 'auto'
		},{
			name : 'PlannedWorkDays',
			type : 'auto'
		},{
			name : 'Status',
			type : 'string'
		},{
			// 0 无，1有
			name : 'Attach',
			type : 'string'
		},
        {
        	// 代表绿色检查通过 Passed
            name:'PassedPercent',
            type:'int'
        },
        {
        	// 未通过
        	name : 'NotPassPercent',
        	type : 'int',
        	convert: function(value, record) {
                var notPassPercent  = 100 - record.get('PassedPercent');
                return notPassPercent;
            }
        }]
	}
});