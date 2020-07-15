Ext.define('ExtJSApp.view.productFilter.ProductFilterController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.ProductFilterController',

  onKeyUp: function (object, e, eOpts) {
    var value = object.getValue();
    var eventName = e.target.name;
    var form = this.getView().getForm();
    var grid = this.getView().up('product-grid'),
       store = grid.getStore();
       
    
    if (e.getKey() !== 13 || !value || !form.isValid()) {
      return;
    }
      
    if (eventName === 'id') {
      store.filter([{property:'id', value:value}]);
    } else if (eventName === 'description') {
      store.filter([{property:'description', value:value}]);
    }
  },

  onChange: function(object, value) {
    var grid = this.getView().up('product-grid'),
        store = grid.getStore();

    if (!value) {
      store.getFilters().removeAll();
    }
  },
});