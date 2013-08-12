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
    
    requires: [
        'Ext.form.field.VTypes'
    ],
    
    // Flag to show splashscreen loading animation or to skip it.
    showSplashscreen: false,

    init: function () {
        if (this.showSplashscreen) {
            // Initialise a splashscreen.
            this.splashscreen = Ext.getBody().mask('Loading, please wait...', 'splashscreen');
            this.splashscreen.addCls('splashscreen');
        }
    },

    launch: function () {
        // me is a reference to the current scope, otherwise the callback will lose track of this.
        var me = this, task;
        
        // Custom validation for password fields.
        // todo: refactor in its own js file.
        Ext.apply(Ext.form.field.VTypes, {
            passwordValidation: function (value, field) {
                return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(value);
            },
            passwordValidationText: '1 digit, 1 symbol @#$%, ' + 
            '1 lower and 1 uppercase letter.'
        });
        
        // Fade in and out the splashscreen and the interface of the app (login first).
        if (me.showSplashscreen) {
            task = new Ext.util.DelayedTask(function () {

                me.splashscreen.fadeOut({
                    duration: 1000,
                    remove: true
                });

                me.splashscreen.next().fadeOut({
                    duration: 1000,
                    remove: true,
                    listeners: {
                        afteranimate: function(el, startTime, eOpts ){
                            // Open the login.
                            Ext.widget('login');
                        }
                    }
                })
            });

            task.delay(2000);
        }
        
        // No loading animation, show the login asap.
        if (!me.showSplashscreen) {
            Ext.widget('login');
        }
    }
});
