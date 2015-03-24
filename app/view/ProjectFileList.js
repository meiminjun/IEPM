/**
 * 首页详情附件
 * @author yangkun
 * @date 2014-04-23
 */
Ext.define('iEPM.view.ProjectFileList', {
	extend: 'Ext.List',
	xtype: 'projectFileList',
	config: {
		style : 'background:#ffffff;',
		ui : 'normal',
		grouped : true,
		scrollToTopOnRefresh : false,
		flex : 9,
		loadingText : false,
		cls : "projectFileList bgCls",
		selectedCls : '',
		store : 'ProjectFileList',
		itemTpl : [
			'<div class="projectFileListDiv defaultFont-style">',
			'<div class="projectFileListDetails">',
				'<div class="head text-overflow">',
					'{Title}',
				'</div>',
				'<div class="rowscontent">',
					'<div style="position:relative;width:100%;height:20px">',
						'<div class="text-overflow" style="position: absolute;width:100%;top:0px;">{Description}</div>',
					'</div>',
				'</div>',	
			'</div>',
			'</div>'
		]
	}
});