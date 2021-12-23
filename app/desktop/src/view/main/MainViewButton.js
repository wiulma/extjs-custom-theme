Ext.define('BoilerplateSample.view.main.MainViewButton', {
  extend: 'Ext.container.Container',
  xtype: 'mainviewbutton',
  layout: {
    type: 'center',
    align: 'middle',
  },
  items: [
    {
      xtype: 'button',
      text: 'Click me',
      listeners: {
        click: function () {
          Ext.Msg.alert('Success', 'button clicked');
        },
      },
    },
  ],
});
