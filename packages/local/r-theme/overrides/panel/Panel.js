Ext.define('RTheme.panel.Panel', {
    override: 'Ext.panel.Panel',
    titleAlign: 'center',
    initComponent: function() {
        this.tpl = new Ext.XTemplate(
        '<tpl for=".">',
        '  <div class="comment">',
        '      <h1>title</h1>',
        '  </div>',
        '</tpl>',
        {
          strict: true,
          parameter: this.parameter
        });
        this.callParent(arguments);
      }
});