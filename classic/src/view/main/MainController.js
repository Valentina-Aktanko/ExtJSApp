/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSApp.view.main.MainController', {

  extend: 'Ext.app.ViewController',

  alias: 'controller.MainController',

  onClickButtonProducts: function () {
    var tabPanel= this.getView();
    var addIndex = tabPanel.items.length -1;
    
    tabPanel.add(
      addIndex, 
      {
        title:'Товары',
        items: [{
          xtype: 'product-grid',
          viewModel: 'ProductGridViewModel'
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