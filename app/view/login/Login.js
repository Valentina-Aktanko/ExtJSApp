Ext.define('ExtJSApp.view.login.Login', {
  
  extend: 'Ext.window.Window',
  xtype: 'login',

  requires: [
    'ExtJSApp.view.login.LoginController',
    'Ext.form.Panel'
  ],

  controller: 'login',
  bodyPadding: 10,
  title: 'Окно входа',
  closable: false,
  autoShow: true,

  items: {
      xtype: 'form',
      name: 'loginForm',
      reference: 'form',
      items: [{
        xtype: 'textfield',
        name: 'username',
        fieldLabel: 'Пользователь:',
        regex: /admin/,
        invalidText: 'Логин должен быть "admin"',
        allowBlank: false
      }, {
        xtype: 'textfield',
        name: 'password',
        inputType: 'password',
        fieldLabel: 'Пароль:',
        regex: /padmin/,
        invalidText: 'Пароль должен быть "padmin"',
        allowBlank: false
      }, {
        xtype: 'displayfield',
        hideEmptyLabel: false,
        value: 'Введите Ваш пароль.'
      }],
      buttons: [{
        text: 'Войти',
        formBind: true,
        listeners: {
          click: 'onLoginClick'
        },
        iconCls: 'x-fa fa-arrow-right'
      }],
  }
});