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
        name: 'id',
        fieldLabel: 'ID:',
        hideEmptyLabel: false,
        value: '{}'
      },
      {
        xtype: 'displayfield',
        name: 'name',
        fieldLabel: 'Наименование:',
        hideEmptyLabel: false,
        value: '{}',
        bind: '{name}'
      },
      {
        xtype: 'textfield',
        name: 'price',
        fieldLabel: 'Цена:'
      },
      {
        xtype: 'textfield',
        name: 'count',
        fieldLabel: 'Кол-во:',
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