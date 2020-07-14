Ext.define('ExtJSApp.view.productCard.ProductCard', {
  extend: 'Ext.window.Window',
  xtype: 'productWindow',

  requires: [
    'ExtJSApp.view.productCard.ProductCardController',
    'Ext.form.Panel'
  ],

  controller: 'productCardController',
  bodyPadding: 10,
  title: 'Карточка товара',
  closable: false,
  // autoShow: true,

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
      }, {
        xtype: 'displayfield',
        name: 'name',
        fieldLabel: 'Наименование:',
        hideEmptyLabel: false,
        value: '{}'
      }, {
        xtype: 'textfield',
        name: 'price',
        fieldLabel: 'Цена:',
        // allowBlank: false
      }, {
        xtype: 'textfield',
        name: 'count',
        fieldLabel: 'Кол-во:',
        // allowBlank: false
      }],
      buttons: [
        {
          text: 'Сохранить',
          formBind: true,
          listeners: {
            click: 'onSaveClick'
          }
        }, {
          text: 'Отмена',
          formBind: true,
          listeners: {
            click: 'onCancelClick'
          }
        }
      ],
  }

});