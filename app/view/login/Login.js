Ext.define('ExtJSApp.view.login.Login', {
  extend: 'Ext.window.Window',
  xtype: 'login',

  requires: [
    'ExtJSApp.view.login.LoginController',
    'Ext.form.Panel'
  ],

  controller: 'login',
  bodyPadding: 10,
  title: 'Login Window',
  closable: false,
  autoShow: true,

  items: {
      xtype: 'form',
      name: 'loginForm',
      reference: 'form',
      items: [{
        xtype: 'textfield',
        name: 'username',
        fieldLabel: 'Логин',
        allowBlank: false
      }, {
        xtype: 'textfield',
        name: 'password',
        inputType: 'password',
        fieldLabel: 'Пароль',
        allowBlank: false
      }, {
        xtype: 'displayfield',
        hideEmptyLabel: false,
        value: 'Введите пароль'
      }],
      buttons: [{
        text: 'Войти',
        formBind: true,
        listeners: {
          click: 'onLoginClick'
        }
      }]
  }
});