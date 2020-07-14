Ext.define('ExtJSApp.view.productCard.ProductCardController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.productCardController',

  onSaveClick: function() {
    var form = this.getView().down('form');
    var record = form.getRecord();
    var values = form.getValues();
    var store = Ext.getStore('ProductsStore');
    record.set(values);
    debugger
    store.sync({
        success:function() {
            store.load()
        }
    });
    
  },

  onCancelClick: function() {
    this.getView().destroy();
  }
});