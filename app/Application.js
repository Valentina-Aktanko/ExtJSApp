/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */
Ext.define('ExtJSApp.Application', {
  extend: 'Ext.app.Application',

  name: 'ExtJSApp',

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true
    }
  },

  stores: [
    // TODO: add global / shared stores here
  ],

  launch: function () {

    var loggedIn;

    loggedIn = localStorage.getItem('ExtLoggedIn');

    Ext.create({
      xtype: loggedIn ? 'app-main' : 'login'
    });

  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});