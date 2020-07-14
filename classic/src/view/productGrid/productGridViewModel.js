Ext.define('ExtJSApp.view.productGrid.ProductGridViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.ProductGridViewModel',
  stores: {
    ProductsGridStore: {
      type: 'Products'
    },
  }
});