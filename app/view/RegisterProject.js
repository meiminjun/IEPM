/**
 * 注册新项目
 * @author duwei
 * @date 2014-05-15
 */
Ext.define('iEPM.view.RegisterProject', {
	extend : 'Ext.Container',
	xtype : 'registerProject',
	selector: 'registerProject',
	
	requires : ['Ext.Label'],
	
	config : {
		layout:'vbox',
		scrollable : {
			direction : 'vertical',
			directionLock : true
		},
		cls : 'formBgCls',
        items:[{
        	xtype: 'titlebar',
		    docked: 'top',
		    cls : 'customToolBar',
            locales : {
            	title : 'registerProject.title'
            },
			items : [{
				xtype:'button',
	            ui:'plain',
	            iconCls:'backBtnCls',
	            iconMask:true,
	            docked:'left',
				handler : function(obj, e, eOpts) {
					Global.backBtn = this;
					this.setDisabled(true);
	            	mainCtr.getIndexNav().pop();
	            	mainCtr.mainListInitFun();
				}
			},{
				xtype : 'button',
				locales : {
            		text : 'registerProject.regSubmitBtnText'	
            	},
            	align : 'right',
            	name : 'registerSubmitBtn',
            	ui : 'customTitleBtn'
			}]
        },{
            xtype:'label',
            cls:'x-expandingHeaderCls',
            style:'background-color:#e9ecf1;',
            locales  : {
				html : 'registerProject.baseInfoLabel'
            },
            listeners:{
                tap:{
                    fn : function() {
                        var me = this,form = me.up('registerProject').down('formpanel[name=basicInfomation]'),cls = me.getCls();
                        if(form.isHidden()){
                        	form.setHidden(false);
                        }else{
                        	form.setHidden(true);
                        }
                        switch (cls[0]){
                            case "x-collapsingHeaderCls":
                                me.removeCls("x-collapsingHeaderCls");
                                me.addCls("x-expandingHeaderCls");
                                break;
                            case "x-expandingHeaderCls":
                                me.removeCls("x-expandingHeaderCls");
                                me.addCls("x-collapsingHeaderCls");
                                break;
                        }
                    },
                    element : 'element'
                }
            }
        },{
        	xtype : 'basicInfomation',
        	name : 'basicInfomation',
        	height : 546
        },{
        	xtype:'label',
            cls:'x-expandingHeaderCls',
            style:'background-color:#e9ecf1;',
            locales  : {
				html : 'registerProject.teamMeberLabel'
            },
            listeners:{
                tap:{
                    fn : function() {
                        var me = this,form = me.up('registerProject').down('formpanel[name=teamInfomation]'),cls = me.getCls();
                        if(form.isHidden()){
                        	form.setHidden(false);
                        }else{
                        	form.setHidden(true);
                        }
                        switch (cls[0]){
                            case "x-collapsingHeaderCls":
                                me.removeCls("x-collapsingHeaderCls");
                                me.addCls("x-expandingHeaderCls");
                                break;
                            case "x-expandingHeaderCls":
                                me.removeCls("x-expandingHeaderCls");
                                me.addCls("x-collapsingHeaderCls");
                                break;
                        }
                    },
                    element : 'element'
                }
            }
        },{
        	xtype : 'teamInfomation',
        	name : 'teamInfomation',
        	height : 250
        }]
	}
});