Ext.define('ExtJSApp.view.productGrid.ProductGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.productGridController',

  onCellClick: function (view, td, cellIndex, record, tr, rowIndex, e, eOpts) {

    if (cellIndex !== 1) {
      return;
    }

    var win = Ext.create({
      xtype: 'product-window'
    });

    win.down('form').loadRecord(record);
    win.show();
  },

  renderCount: function (value, meta) {
    if(value === 0) {
      meta.style = "background-color:red;";
    }
    return value;
  },

});