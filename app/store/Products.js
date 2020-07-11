Ext.define('ExtJSApp.store.Products', {
  extend: 'Ext.data.Store',

  alias: 'store.products',

  fields: [{
    name: 'id',
    type: 'number'
  }, {
    name: 'name',
    type: 'string'
  }, {
    name: 'description',
    type: 'string'
  }, {
    name: 'price',
    type: 'number'
  }, {
    name: 'count',
    type: 'number'
  }],

  data: { items: [{
    id: 1,
    name: 'Notebook Lenovo',
    description: 'Ноутбук LENOVO IdeaPad S340-14API, 14", IPS, AMD Ryzen 3 3200U 2.6ГГц, 8ГБ, 128ГБ SSD, AMD Radeon Vega 3, Free DOS, 81NB006VRK, серый',
    price: 32990,
    count: 2
  }, {
    id: 2,
    name: 'Keyboard OKLICK',
    description: 'Клавиатура OKLICK 760G GENESIS, USB, черный',
    price: 970,
    count: 8
  }, {
    id: 3,
    name: 'Network adapter',
    description: 'Сетевой адаптер Dell i350 QP 1Gb Low Profile KIT',
    price: 23810,
    count: 0
  }, {
    id: 4,
    name: 'Mouse OKLICK',
    description: 'Мышь OKLICK 915G HELLWISH V2, игровая, оптическая, проводная, USB, черный и серебристый',
    price: 750,
    count: 4
  }]},

  proxy: {
      type: 'memory',
      reader: {
          type: 'json',
          rootProperty: 'items'
      }
  }
});
