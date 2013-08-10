/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when upgrading.
*/

// DO NOT DELETE - this directive is required for Sencha Cmd packages to work.
//@require @packageOverrides

Ext.application({
    name: 'Mej2',

    extend: 'Mej2.Application',

    // The splashscreen property is not necessary because it isn't refered to outside this scope. splashscreen gets created in init function.
    //splashscreen: {},

    init: function () {

        // It's important to define splashscreen as part of the scope of this, otherwise it pollutes the global space.
        this.splashscreen = Ext.getBody().mask('Loading, please wait...', 'splashscreen');

        this.splashscreen.addCls('splashscreen');
    },

    launch: function () {

        // me is a reference to the current scope, otherwise the callback will lose track of this.
        var me = this,
        task = new Ext.util.DelayedTask(function () {

            me.splashscreen.fadeOut({
                duration: 1000,
                remove: true
            });

            me.splashscreen.next().fadeOut({
                duration: 1000,
                remove: true
            })
        });

        task.delay(2000);
    }

});
