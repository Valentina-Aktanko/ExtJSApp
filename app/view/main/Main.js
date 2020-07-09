Ext.define('ExtJSApp.view.main.Main', {
  extend: 'Ext.tab.Panel',
  xtype: 'app-main',

  requires: [
    'Ext.plugin.Viewport',
    'Ext.window.MessageBox',

    'ExtJSApp.view.main.MainController',
    'ExtJSApp.view.main.MainModel',
    'ExtJSApp.view.main.List'
  ],

  controller: 'main',
  viewModel: 'main',
  plugins: 'viewport',

  ui: 'navigation',

  tabBarHeaderPosition: 1,
  titleRotation: 0,
  tabRotation: 0,

  header: {
    layout: {
      align: 'stretchmax'
    },
    title: {
      bind: {
        text: '{name}'
      },
      flex: 0
    },
    iconCls: 'fa-th-list',
    items: [{
      xtype: 'button',
      text: 'Выход',
      margin: '10 0',
      handler: 'onClickButton'
    }]
  },

  tabBar: {
    flex: 1,
    layout: {
      align: 'stretch',
      overflowHandler: 'none',
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

  dafaults: {
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
        title: 'Home',
        iconCls: 'fa-home',
        items: [{
            xtype: 'mainlist'
        }]
    }, {
        title: 'Users',
        iconCls: 'fa-user',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        iconCls: 'fa-users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});