/**
 * 历史月报列表
 * @author duwei
 * @date 2014-05-13
 */
Ext.define('iEPM.view.MonthHisList', {
	extend: 'Ext.List',
	xtype: 'monthHisList',
	config: {
		style : 'background:#ffffff;',
		ui : 'normal',
		scrollToTopOnRefresh : false,
		flex : 9,
		loadingText : false,
		cls : "projectFileList bgCls",
		selectedCls : '',
		store : 'MonthHisList',
		itemTpl : [
			'<div class="monthHisListDiv defaultFont-style">',
			'<div class="monthHisListDetails">',
				'<div class="head text-overflow">',
					'{[iEPM.util.PubOperation.dateFormatMYFun(values.Monthly)]} - {[this.getMonthlyText()]}',
				'</div>',
				'<div class="rowscontent">',
					'<div style="position:relative;width:100%;height:20px">',
						'<div class="text-overflow" style="position: absolute;width:60%;top:0px;"></div>',
						'<div class="text-overflow" style="position: absolute;left:60%;width:40%;top:2px">{[iEPM.util.PubOperation.dateFormatFun(values.ReportDate)]}</div>',
					'</div>',
				'</div>',	
			'</div>',
			'</div>',{
				// 编译
				compiled : true,
				getMonthlyText : function(){
					return Global.getTipsMsg('monthlyText');
				}
			}
		]
	}
});