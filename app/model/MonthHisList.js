/**
 * 历史月报model
 * @author duwei
 * @date 2014-05-13
 */
Ext.define('iEPM.model.MonthHisList', {
	extend : 'Ext.data.Model',
	config : {
		fields : [ {
			// 月报ID
			name : 'ReportID',
			type : 'auto'
		},{
			// 本月完成任务
			name : 'CompletedWorks',
			type : 'auto'
		}, {
			// 下月计划
			name : 'NextMonthPlan',
			type : 'auto'
		},{
			// 主要风险
			name : 'Risk',
			type : 'auto'
		},{
			// 风险程度  0：低，1：中，2：高
			name : 'RiskGrade',
			type : 'int'
		}, {
			// 日期
			name : 'ReportDate',
			type : 'auto'
		},{
			// 填报月份
			name : 'Monthly',
			type : 'auto'
		},{
			name : 'Milestone',
			type : 'auto'
		},{
			// 整体状态  Red、Yellow、Green
			name : 'MilestoneStatus',
			type : 'auto'
		},{
			// 里程碑
			name : 'CurrMileStone',
			type : 'auto',
			defaultValue: '空',
		},{
			// 实际花费
			name : 'ActualCost',
			type : 'auto',
			defaultValue: '空',
		}]
	}
});
