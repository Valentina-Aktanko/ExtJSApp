Ext.define('ExtJSApp.view.productGrid.productGridViewModel', {
  extend: 'Ext.app.ViewModel',
  alias: 'viewmodel.productGridViewModel',
  stores: {
    ProductsGridStore: {
        type: 'Products'
    },
  }
});