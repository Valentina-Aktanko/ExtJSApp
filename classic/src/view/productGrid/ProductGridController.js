Ext.define('ExtJSApp.view.productGrid.ProductGridController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.productGridController',

  // this, td, cellIndex, record, tr, rowIndex, e, eOpts
  onCellClick: function(view, td, cellIndex, record, tr, rowIndex, e, eOpts) {
    //debugger

    var data = record.data;
    // console.log(data);

    // if (cellIndex !== 1) {
    //   return;
    // }
    
    // var win = Ext.create({
    //   xtype: 'product-сard'
    // });

    var win = Ext.create({
      xtype: 'product-window'
    });

    win.down('form').loadRecord(record);
    win.show();

    // if (td.tagname === 'ID') {
    //   // Ext
    //   console.log('click item');
    // }
  },

  renderCount: function(value) {
    return this.renderSign(value, '0');
  },

  renderSign: function(value, format) {
    // var text = Ext.util.Format.number(value, format),
    //     tpl = this.signTpl,
    //     data = this.data;

    // debugger

    // if (value == 0) {
    //     if (!tpl) {
    //         // this.signTpl = tpl = this.getView().lookupTpl('signTpl');
    //         this.signTpl = tpl = this.getView().signTpl;
    //         this.data = data = {};
    //     }

    //     data.value = value;
    //     data.text = text;

        // text = tpl.apply(data);
    // }

    // return text;
  }
});