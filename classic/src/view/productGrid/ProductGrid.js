/**
 * This view is list of products.
 */
Ext.define('ExtJSApp.view.productGrid.ProductGrid', {
  extend: 'Ext.grid.Panel',
  xtype: 'productGrid',

  requires: [
    'ExtJSApp.view.productGrid.ProductGridController',
    'Ext.toolbar.Paging',
  ],

  controller: 'productGridController',
  title: 'Список товаров',

  bind: '{ProductsGridStore}',
  columns: [{
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
      format: '0.00'
    },
    {
      text: 'Кол-во',
      dataIndex: 'count',
      renderer: 'renderCount',
      flex: 1
    }
  ],

  // signTpl: '<span style="' +
  //       'color:{"red")}"' +
  //       '>{text}</span>',

  signTpl: '<span style="' +
    'color:{value:sign(\'"#cf4c35"\',\'"#73b51e"\')}"' +
    '>{text}</span>',

  listeners: {
    cellclick: {
      fn: 'onCellClick'
    }
  },

  bbar: {
    xtype: 'pagingtoolbar',
    displayInfo: true,
    bind: '{ProductsGridStore}',
    // store: {
    //   type: 'Products'
    // },
    // displayMsg: 'Displaying topics {0} - {1} of {2}',
    // emptyMsg: "No items to display"
  },

  // dockedItems: [{
  //   xtype: 'pagingtoolbar',
  //   // store: {
  //   //   type: 'products'
  //   // },
  //   bind: '{ProductsGridStore}',
  //   dock: 'bottom',
  //   displayInfo: true
  // }],
});