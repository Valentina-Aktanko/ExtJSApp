/**
 * This view is an example list of people.
 */
Ext.define('ExtJSApp.view.main.List', {
  extend: 'Ext.grid.Panel',
  xtype: 'mainlist',

  requires: [
    'ExtJSApp.store.Products'
  ],

  title: 'Список товаров',

  store: {
    type: 'products'
  },

  columns: [
    {
      text: 'ID',
      dataIndex: 'id',
    },
    {
      text: 'Имя',
      dataIndex: 'name',
      flex: 1
    },
    {
      text: 'Описание',
      dataIndex: 'description',
      flex: 1
    },
    {
      text: 'Цена',
      dataIndex: 'price',
      flex: 1,
      xtype: 'numbercolumn',
      format:'0.00'
    },
    {
      text: 'Кол-во',
      dataIndex: 'count',
      flex: 1
    }
  ],

  listeners: {
    cellclick: {
      fn: 'onItemClick'
    }
  }
});