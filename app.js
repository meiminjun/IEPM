/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/
Ext.require('iEPM.util.PubOperation');

Ext.require('iEPM.ux.Manager');
Ext.require('iEPM.ux.CustomLoading');
Ext.require('iEPM.ux.ImageViewer');
Ext.require('iEPM.ux.SelectFieldView');
Ext.require('iEPM.ux.TimePicker');
Ext.require('iEPM.ux.Timefield');

Ext.require('iEPM.ux.override.Component');
Ext.require('iEPM.ux.override.Button');
Ext.require('iEPM.ux.override.Container');
Ext.require('iEPM.ux.override.TitleBar');
Ext.require('iEPM.ux.override.Toolbar');
Ext.require('iEPM.ux.override.field.Field');
Ext.require('iEPM.ux.override.field.DatePicker');
Ext.require('iEPM.ux.override.form.FieldSet');
Ext.require('iEPM.ux.override.navigation.Bar');
Ext.require('iEPM.ux.override.navigation.View');
Ext.require('iEPM.ux.override.picker.Picker');
Ext.require('iEPM.ux.override.picker.Date');
Ext.require('iEPM.ux.override.plugin.ListPaging');
Ext.require('iEPM.ux.override.plugin.PullRefresh');

Ext.application({
    name: 'iEPM',

    requires: [
        'Ext.MessageBox',
        'Ext.data.proxy.LocalStorage'
    ],

    views: [
		'Index',
		'Main',
		'MainList',
		'SettingView',
		'ProjectDetail',
		'ProjectFileList',
		'ProjectMembers',
		'ProjectPhaseList',
		'ProjectPlanList',
		'ProjectBaseInfo',
		'PlanActionSheet',
		'FillForm',
		'ProjectPlanAnnexList',
		'ProjectPhaseAnnexList',
		'ProjectPlanCommit',
		'ProjectHis',
		'MonthHisList',
		'RegisterProject',
		'BasicInfomation',
		'TeamInfomation',
		'MonthHisInfo',
		'TeamList'
    ],
    
    models: [
        'MainList',
        'ProjectPhaseList',
        'ProjectPlanList',
        'SelectFieldView',
        'ProjectFileList',
        'AnnexList',
        'ProjectMembers',
        'ProjectHis',
        'MonthHisList',
        'TeamList',
        'TaskStandardList'
    ],
    
    controllers: [
        'Main',
        'ProjectPhase',
        'SettingView',
        'ProjectDetail',
        'ProjectPlan'
    ],
    
    stores: [
        'MainList',
        'OfflineLocalStore',
        'ProjectPhaseList',
        'ProjectPlanList',
        'SelectFieldView',
        'ProjectFileList',
        'ProjectPlanAnnexList',
        'ProjectPhaseAnnexList',
        'ProjectMembers',
        'ProjectHis',
        'MonthHisList',
        'TeamList',
        'TaskStandardList'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        mainCtr = this.getApplication().getController('Main');
        projectPhaseCtr = this.getApplication().getController('ProjectPhase');
        projectPlanCtr = this.getApplication().getController('ProjectPlan');
        projectDetailCtr = this.getApplication().getController('ProjectDetail');
    }
});
