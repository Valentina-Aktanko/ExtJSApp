Ext.define('ExtJSApp.view.productCard.ProductCardController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ProductCardController',

  onSaveClick: function () {
    
    var form = this.getView().down('form');
    var record = form.getRecord();
    var values = form.getValues();
    // var formValues = form.getForm().getFieldValues();

    var store = Ext.getStore('ProductsStore');
    record.set(formValues);
    this.getView().destroy();
    
    store.sync({
      success: function () {
        store.load();
      }
    });
  },

  onCancelClick: function () {
    this.getView().destroy();
  }
});