Ext.define('ExtJSApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

onLoginClick: function() {
  debugger

  localStorage.setItem('ExtLoggedIn', true);
  
  this.getView().destroy();
  Ext.create({
    xtype: 'app-main'
  });
}
});