Ext.define('ExtJSApp.view.productCard.ProductCardViewModel', {
  extend: 'Ext.app.ViewModel',

  alias: 'viewmodel.ProductCardViewModel',

  data: {
    name: null
  },

  formulas: {
    name: function () {
      var form = this.getView().down('form');
      var record = form.getRecord();
      return record.data.name;
    }
  }
});