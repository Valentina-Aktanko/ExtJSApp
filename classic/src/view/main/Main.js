/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('ExtJSApp.view.main.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'app-main',

  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',

    'ExtJSApp.view.main.MainController',
    'ExtJSApp.view.main.MainViewModel',
  ],

  controller: 'MainController',
  viewModel: 'MainViewModel',
  
  plugins: 'viewport',

  ui: 'navigation',

  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: 'stretchmax'
    },
    title: {
      bind: {
        text: 'Учет товаров'
      },
      flex: 0
    },
    items: [{
      xtype: 'button',
      text: 'Товары',
      margin: '10 10',
      handler: 'onClickButtonProducts'
    }, {
      xtype: 'button',
      text: 'Выход',
      margin: '10 0',
      handler: 'onClickButtonExit'
    }]
  },

  tabBar: {
    flex: 1,
    layout: {
      align: 'stretch',
      overflowHandler: 'none'
    }
  },

  responsiveConfig: {
    tall: {
      headerPosition: 'top'
    },
    wide: {
      headerPosition: 'left'
    }
  },

  defaults: {
    bodyPadding: 20,
    tabConfig: {
      plugins: 'responsive',
      responsiveConfig: {
        wide: {
          iconAlign: 'left',
          textAlign: 'left'
        },
        tall: {
          iconAlign: 'top',
          textAlign: 'center',
          width: 120
        }
      }
    }
  },

  items: [{
    title: 'Товары',
    items: [
      {
        xtype: 'product-grid',
        viewModel: 'productGridViewModel'
      }
    ]
  }],
});