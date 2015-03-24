/**
 * 项目阶段计划变更选择项
 * @author duwei
 * @create 2014-04-24
 */
Ext.define('iEPM.ux.SelectFieldView', {
	extend : 'Ext.dataview.List',
	xtype : 'selectFieldView',
	requires : ['Ext.Toolbar','Ext.Button'],
	config : {
		// We give it a left and top property to make it floating by default
        left: 0,
        top: 0,
        
        // Make it modal so you can click the mask to hide the overlay
        modal: true,
        hideOnMaskTap: true,
        showAnimation : {
			type : 'slide',
			duration : 250,
			direction : 'left',
			easing : 'ease-out'
		},
		hideAnimation : {
			type : 'slideOut',
			duration : 250,
			direction : 'right',
			easing : 'ease-out'
		},
        // Make it hidden by default
        hidden: true,

        // Here we specify the #id of the element we created in `index.html`
        contentEl: 'content',

        // Style the content and make it scrollable
        styleHtmlContent: true,
        scrollable: false,
        loadingText : false,
        pressedCls : 'selectFieldList-item-pressed',
		selectedCls : 'customListItem-item-selected',
		
        itemHeight : 45,
        itemTpl: [
			'<div style="position:absolute;top:7px;left:12px">',
				'<div class="selectFieldList-img">',
					'<img class="selectFieldListImg" src="{imgUrl}" />',
				'</div>',
			'</div>',
			'<div class="selectFieldList-row defaultFont-style">',
				'<div class="head"><b>{title}</b></div>',
			'</div>'
        ],
        cls : 'selectFieldList',
        store : 'SelectFieldView',
        flex : 1
	}
});