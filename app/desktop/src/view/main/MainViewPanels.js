Ext.define('BoilerplateSample.view.main.MainViewPanels', {
  extend: 'Ext.container.Container',
  xtype: 'mainviewpanels',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel',
  },
  flex: 1,
  items: [
    {
      xtype: 'panel',
      items: [
        {
          xtype: 'textfield',
          reference: 'inputField',
          inputLabel: 'Value',
        },
        {
          xtype: 'button',
          text: 'Click me',
          listeners: {
            click: 'changeName',
          },
        },
      ],
    },
    {
      xtype: 'panel',
      bind: {
        html: '<p>{name}</p>',
      },
    },
  ],
});
