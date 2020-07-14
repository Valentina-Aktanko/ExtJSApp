Ext.define('ExtJSApp.view.productCard.ProductCard', {
  extend: 'Ext.window.Window',
  xtype: 'product-window',

  requires: [
    'ExtJSApp.view.productCard.ProductCardController',
    'Ext.form.Panel'
  ],
  
  width: 500,
  title: 'Карточка товара:',
  bodyPadding: 10,
  closable: false,
  controller: 'ProductCardController',

  viewModel: {
    type: 'ProductCardViewModel'
  },

  bind: {
    title: 'Карточка товара: {name}'
  },

  items: {
    xtype: 'form',
    name: 'productForm',
    reference: 'form',
    items: [{
        xtype: 'displayfield',
        fieldLabel: 'ID:',
        name: 'id',
        hideEmptyLabel: false
      },
      {
        xtype: 'displayfield',
        fieldLabel: 'Наименование:',
        name: 'name',
        bind: '{name}'
      },
      {
        xtype: 'numberfield',
        fieldLabel: 'Цена:',
        name: 'price'
      },
      {
        xtype: 'numberfield',
        fieldLabel: 'Кол-во:',
        name: 'count'
      }
    ],
    buttons: [{
        text: 'Сохранить',
        formBind: true,
        listeners: {
          click: 'onSaveClick'
        }
      },
      {
        text: 'Отмена',
        formBind: true,
        listeners: {
          click: 'onCancelClick'
        }
      }
    ],
    defaults: {
      anchor: '100%'
    }
  }
});