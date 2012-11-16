/**
 * Created with IntelliJ IDEA.
 * User: nchangnon
 * Date: 11/15/12
 * Time: 9:26 PM
 * To change this template use File | Settings | File Templates.
 */

var tpl = Ext.create('Ext.Template',
    [ 'Hello {firstName} {lastName}!']);

var formPanel = Ext.create('Ext.form.FormPanel', {
    itemId : 'formPanel',
    frame : true,
    layout : 'anchor',
    defaultType : 'textfield',
    defaults    : {
        anchor     : '-10',
        labelWidth : 65
    },
    items : [
        {
            fieldLabel : 'First name',
            name       : 'firstName'
        },  {
            fieldLabel : 'Last name',
            name       : 'lastName'
        }
    ],
    buttons : [
        {
            text    : 'Submit',
            handler : function() {
                var formPanel = this.up('#formPanel'),
                    vals = formPanel.getValues(),
                    greeting = tpl.apply(vals);
                Ext.Msg.alert('Hello!', greeting);
            }
        }
    ]
});

Ext.onReady(function(){
    Ext.create('Ext.window.Window', { height : 125,
        width    : 200,
        closable : false,
        title    : 'Input needed.',
        border   : false,
        layout   : 'fit',
        items    : formPanel
    }).show();
});

//Ext.application({
//    name: 'ExtJsMaven',
//    appFolder: 'app',
//
//    launch: function() {
//        console.log("here i am")
//        Ext.create('Ext.container.Viewport', {
//            layout: 'fit',
//            padding: '5px',
//            items: [
//                {
//                    xtype:textfield
//                }
//            ]
//        });
//    }
//});