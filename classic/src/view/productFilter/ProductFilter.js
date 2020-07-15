Ext.define('ExtJSApp.view.productFilter.ProductFilter', {
  extend: 'Ext.form.Panel',
  xtype: 'product-filters',

  requires: [
    'ExtJSApp.view.productFilter.ProductFilterController'
  ],
  controller: 'ProductFilterController',

  items: [
    {
      xtype: 'numberfield',
      fieldLabel: 'ID:',
      name: 'filerID',
      emptyText: 'Введите фильтр...',
      regex: /^\d+$/,
      regexText: 'Only positive numbers',
      hideTrigger: true,
      enableKeyEvents: true,
      listeners: {
        keyUp: 'onKeyUp',
        change: 'onChange'
      }
    },
    {
      xtype: 'textfield',
      fieldLabel: 'Описание:',
      name: 'filterDescription',
      emptyText: 'Введите фильтр...'
    },
  ],

});