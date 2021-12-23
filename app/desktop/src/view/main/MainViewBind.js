Ext.define('BoilerplateSample.view.main.MainViewBind', {
  extend: 'Ext.container.Container',
  xtype: 'mainviewbind',
  viewModel: {
    type: 'mainviewmodel',
  },
  layout: {
    type: 'center',
    align: 'middle',
  },
  items: [
    {
      bodyStyle: {
        border: 0,
      },
      bind: {
        html: 'Hello {name}',
      },
    },
  ],
});
