Ext.define('iEPM.model.MainList', {
	extend : 'Ext.data.Model',
	config : {
		fields : [{
			name : 'ProjectName',
			type : 'auto'
		}, {
			name : 'ProjectType',
			type : 'auto'
		}, {
			name : 'ProjectID',
			type : 'auto'
		},{
			name : 'AreaName',
			type : 'auto'
		},{
			name : 'AreaId',
			type : 'auto'
		},{
			name : 'Desc',
			type : 'auto'
		},{
			name : 'ProjectBudget',
			type : 'auto'
		}, {
			name : 'StartTime',
			type : 'auto'
		},{
			name : 'EndTime',
			type : 'auto'
		},{
			name : 'Milestone',
			type : 'auto'
		},{
			name : 'MilestoneStatus',
			type : 'auto'
		},{
			name : 'Sort',
			type : 'auto'
		},{
			// 延期状态
			name : 'ProjectStatus',
			type : 'auto'
		},{
			// 上线日期
			name : 'LaunchDate',
			type : 'date'
		},{
			// 业务负责人
			name : 'ResponsiblePerson',
			type : 'auto'
		},{
			// 项目pm
			name : 'ProjectManager',
			type : 'auto'
		},{
			// 项目预算
			name : 'ProjectBudget',
			type : 'auto'
		},{
			name : 'StatusSort',
			type : 'auto'
		},{
			// 项目状态
			name : 'RecordStatus',
			type : 'auto'
		},{
        	name : 'CurMilestoneID',
        	type : 'string'
        },{
        	name : 'CurMilestoneName',
        	type : 'string'
        }]
	}
});
		