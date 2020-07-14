Ext.define('ExtJSApp.view.productGrid.ProductGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ProductGridController',

  renderCount: function (value, meta) {
    if(value === 0) {
      meta.style = "background-color:red;";
    }
    return value;
  },

  onCellClick: function (view, td, cellIndex, record, tr, rowIndex, e, eOpts) {

    if (cellIndex !== 1) {
      return;
    }

    var productWindow = Ext.create({
      xtype: 'product-window'
    });

    productWindow.down('form').loadRecord(record);
    productWindow.show();
  }
});