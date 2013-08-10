Ext.define('Mej2.view.Login', {
    extend: 'Ext.window.Window',
    alias: 'widget.login',

    autoShow: true,
    width: 375,
    height: 170,
    layout: {
        type: 'fit'
    },
    iconCls: 'key',
    title: 'Login',
    closeAction: 'hide',
    closeable: false,

    items: [
        {
            xtype: 'form',
            frame: false,
            bodyPadding: 15,

            defaults: {
                xtype: 'textfield',
                anchor: '100%',
                labelWidth: 60,
                vtype: 'alphanum',
                minLength: 3,
                msgTarget: 'under'
            },

            items: [
                {
                    name: 'user',
                    fieldLabel: 'User',
                    maxLength: 25,
                    value: 'Nadjib'
                },
                {
                    name: 'password',
                    inputType: 'password',
                    fieldLabel: 'Password',
                    maxLength: 15,
                    value: 'qwe123',
                    msgTarget: 'side'
                }
            ]
        }
    ]
});















