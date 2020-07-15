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
      name: 'id',
      emptyText: 'Введите фильтр...',
      regex: /^\d+$/,
      regexText: 'Только положительные числа',
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
      name: 'description',
      emptyText: 'Введите фильтр...',
      enableKeyEvents: true,
      listeners: {
        keyUp: 'onKeyUp',
        change: 'onChange'
      }
    },
  ],

});