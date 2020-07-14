Ext.define('ExtJSApp.view.productFilterForm.ProductFilterForm', {
  extend: 'Ext.form.Panel',
  xtype: 'product-filters',

  requires: [
    // 'ExtJSApp.view.productGrid.ProductGridController'
  ],

  items: [
    {
      xtype: 'textfield',
      fieldLabel: 'ID:',
      name: 'filerID',
      emptyText: 'Введите фильтр...'
    },
    {
      xtype: 'textfield',
      fieldLabel: 'Описание:',
      name: 'filterDescription',
      emptyText: 'Введите фильтр...'
    },
  ],

});