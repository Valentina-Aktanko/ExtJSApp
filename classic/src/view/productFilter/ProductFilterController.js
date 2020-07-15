Ext.define('ExtJSApp.view.productFilter.ProductFilterController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ProductFilterController',

  onKeyUp: function (object, e, eOpts) {
    if (e.getKey() !== 13) {
        return;
    }
    
    var value = object.getValue();
    var grid = this.getView().up('product-grid'),
        store = grid.getStore();
      
    store.filter([{property:'id', value:value}]);
  },

  onChange: function(object, value) {
    var grid = this.getView().up('product-grid'),
        store = grid.getStore();

    if (!value) {
      store.getFilters().removeAll();
    }
  }
});