/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSApp.view.main.MainController', {

  extend: 'Ext.app.ViewController',

  alias: 'controller.MainController',

  // onItemClick: function (sender, record) {
  //   Ext.Msg.confirm('Confirm', 'Клик по товару', 'onConfirm', this);
  // },

  onConfirm: function (choice) {
    if (choice === 'yes') {
      //
    }
  },

  onClickButtonProducts: function () {
    var tabPanel= this.getView();
    var addIndex = tabPanel.items.length -1;
    
    tabPanel.add(
      addIndex, 
      {
        title:'Товары',
        items: [{
          xtype: 'productGrid'
        }]
      });

    tabPanel.setActiveTab(0);
  },

  onClickButtonExit: function () {
    localStorage.removeItem('ExtLoggedIn');
    this.getView().destroy();
    Ext.create({
      xtype: 'loginWindow'
    });
  }
});