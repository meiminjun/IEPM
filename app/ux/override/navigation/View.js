Ext.define('iEPM.ux.override.navigation.View', {
    override: 'Ext.navigation.View',

    requires: [
        'iEPM.ux.Manager'
    ],

    enableLocale: false,
    locale: null,
    locales: null,

    constructor : function(config) {
        var me = this;

        config = iEPM.ux.Manager.isLocalable(me, config);

        me.callParent([config]);

        if (me.enableLocale) {
            me.setLocale(iEPM.ux.Manager.getLanguage());
        }
    },

    setLocale : function(locale) {
        var me                    = this,
            locales               = me.locales || me.getInitialConfig().locales,
            defaultBackButtonText = locales.defaultBackButtonText,
            defaultText           = '',
            manager               = me.locale;
        
        if (defaultBackButtonText) {
            if (Ext.isObject(defaultBackButtonText)) {
                defaultText = defaultBackButtonText.defaultText;
                defaultBackButtonText = defaultBackButtonText.key;
            }

            defaultBackButtonText = manager.get(defaultBackButtonText, defaultText);

            if (Ext.isString(defaultBackButtonText)) {
                me.setDefaultBackButtonText(defaultBackButtonText);
            }
        }
    }
});