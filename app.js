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

    launch: function () {
        // Custom validation for password fields.
        // todo: refactor in its own js file.
        Ext.apply(Ext.form.field.VTypes, {
            customPass: function (value, field) {
                return /^((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/.test(value);
            },
            customPassText: 'Not a valid password. ' +
            'Password must contain one digit, one letter lowercase, one letter uppercase, ' + 
            'one special symbol @#$% and between 6 and 20 characters.'
        });
        
        // Open the login.
        Ext.widget('login');
    }
});
