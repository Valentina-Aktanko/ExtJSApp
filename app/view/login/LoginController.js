Ext.define('ExtJSApp.view.login.LoginController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.login',

onLoginClick: function() {

  


  localStorage.setItem('ExtJSAppLoggedIn', true);
  

  this.getView().destroy();
  Ext.create({
    xtype: 'app-main'
  });
}
});