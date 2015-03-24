/**
 * 项目计划列表model
 * 
 * @author duwei
 * @create 2014-04-23
 */
Ext.define('iEPM.model.ProjectPlanList', {
	extend : 'Ext.data.Model',
	config : {
		fields : [{
			name : 'TaskID',
			type : 'auto'
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
        },{
        	// 任务状态  Active:未启动，Processing:已启动,Completed：已经完成
        	name : 'RecordStatus',
        	type : 'auto'
        },{
        	// 是否关键任务 true/false
        	name : 'IsKeyTask',
        	type : 'auto'
        }]
	}
});