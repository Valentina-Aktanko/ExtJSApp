Ext.define('ExtJSApp.store.Products', {
  extend: 'Ext.data.Store',
  alias: 'store.Products',
  id: 'ProductsStore',
  model: 'ExtJSApp.model.Product',
  pageSize: 5,
  proxy: {
    type: 'memory',
    enablePaging: true,
    reader: {
        type: 'json',
        rootProperty: 'items'
    }
  },

  data: data = {
    items: [
      {
        id: 1,
        name: 'Notebook Lenovo',
        description: 'Ноутбук LENOVO IdeaPad S340-14API, 14", IPS, AMD Ryzen 3 3200U 2.6ГГц, 8ГБ, 128ГБ SSD, AMD Radeon Vega 3, Free DOS, 81NB006VRK, серый',
        price: 32990,
        count: 2
      },
      {
        id: 2,
        name: 'Keyboard OKLICK',
        description: 'Клавиатура OKLICK 760G GENESIS, USB, черный',
        price: 970,
        count: 8
      },
      {
        id: 3,
        name: 'Network adapter',
        description: 'Сетевой адаптер Dell i350 QP 1Gb Low Profile KIT',
        price: 23810,
        count: 0
      },
      {
        id: 4,
        name: 'Mouse OKLICK',
        description: 'Мышь OKLICK 915G HELLWISH V2, игровая, оптическая, проводная, USB, черный и серебристый',
        price: 750,
        count: 4
      },
      {
        id: 5,
        name: 'Монитор SAMSUNG',
        description: 'Монитор SAMSUNG C24F390FHI 23.5", черный',
        price: 8990,
        count: 3
      },
      {
        id: 6,
        name: 'Сканер CANON',
        description: 'Сканер CANON Canoscan LIDE300',
        price: 5190,
        count: 0
      },
      {
        id: 7,
        name: 'Контроль электроприборов Redmond',
        description: 'Комплект Redmond RG-SK31S контроль электроприборов и доступа',
        price: 3790,
        count: 8
      },
    ]
  }
});


