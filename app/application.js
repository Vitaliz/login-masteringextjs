Ext.define('Mej2.Application', {
    name: 'Mej2',

    extend: 'Ext.app.Application',

    views: [
        'Main',
        'Viewport',
        'Login'
    ],

    controllers: [
        'Main'
    ],

    stores: [
        // TODO: add stores here
    ]
});
