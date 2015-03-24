Ext.define('iEPM.ux.override.Component', {
    override : 'Ext.Component',

    requires : [
        'iEPM.ux.Manager'
    ],

    enableLocale : false,
    locale       : null,
    locales      : null,

    constructor : function(config) {
        var me = this;

        config = iEPM.ux.Manager.isLocalable(me, config);

        me.callParent([config]);

        if (me.enableLocale) {
            me.setLocale(iEPM.ux.Manager.getLanguage());
        }
    },

    setLocale : function(locale) {
        var me          = this,
            locales     = me.locales || me.getInitialConfig().locales,
            html        = locales.html,
            manager     = me.locale,
            defaultText = '';

        if (html) {
            if (Ext.isObject(html)) {
                defaultText = html.defaultText;
                html        = html.key;
            }

            html = manager.get(html, defaultText);

            if (Ext.isString(html)) {
                me.setHtml(html);
            }
        }
    }
});
