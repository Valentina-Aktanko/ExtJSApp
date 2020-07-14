/**
 * This view is list of products.
 */
Ext.define('ExtJSApp.view.productGrid.ProductGrid', {
  extend: 'Ext.grid.Panel',
  xtype: 'product-grid',

  requires: [
    'ExtJSApp.view.productGrid.ProductGridController',
    'Ext.toolbar.Paging'
  ],

  controller: 'productGridController',
  title: 'Список товаров',
  bind: '{ProductsGridStore}',
 
  // stores: {
  //   ProductsGridStore: {
  //       type: 'Products'
  //   }
  // },

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
 
  tbar: [
    {
      xtype: 'product-filters',
    }
    
  ],

  bbar: {
    xtype: 'pagingtoolbar',
    displayInfo: true,
    bind: '{ProductsGridStore}',    
  },

  listeners: {
    cellclick: {
      fn: 'onCellClick'
    }
  }
});