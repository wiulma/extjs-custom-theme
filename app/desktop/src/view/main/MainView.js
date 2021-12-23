Ext.define('BoilerplateSample.view.main.MainView', {
  extend: 'Ext.panel.Panel',
  alias: 'mainview',
  // without this: use style from component.scss
  // with ui property, use style from panel.scss
  ui: 'highlight', // scss custom
  xtype: 'mainview',
  layout: {
    type: 'center',
    align: 'middle',
  },
  title: 'Main Panel',
  html: 'Hello world',
  header: true,
  renderTpl: [
    // headingEl can also be inserted in updateHeader
    '<tpl if="headingText">',
        '<div id="{id}-headingEl" data-ref="headingEl" role="heading"',
            ' class="', Ext.baseCSSPrefix, 'hidden-clip" style="height:0">',
                '{headingText}',
        '</div>',
    '</tpl>',
    '<tpl if="hasTabGuard">{% this.renderTabGuard(out, values, \'before\'); %}</tpl>',
    '<div id="{id}-bodyWrap" data-ref="bodyWrap" class="{baseCls}-bodyWrap">',
        // If this Panel is framed, the framing template renders the docked items round the frame
        '{% this.renderDockedItems(out,values,0); %}',
        '<div id="{id}-body" data-ref="body" class="{baseCls}-body<tpl if="bodyCls"> {bodyCls}</tpl>',
            ' {baseCls}-body-{ui}<tpl if="uiCls">',
                '<tpl for="uiCls"> {parent.baseCls}-body-{parent.ui}-{.}</tpl>',
            '</tpl>{childElCls}"',
            '<tpl if="bodyAriaAttributes">',
                '<tpl foreach="bodyAriaAttributes"> {$}="{.}"</tpl>',
            '<tpl else>',
                ' role="presentation"',
            '</tpl>',
            '<tpl if="bodyStyle"> style="{bodyStyle}"</tpl>>',
            '{%this.renderContainer(out,values);%}',
        '</div>',
        '{% this.renderDockedItems(out,values,1); %}',
    '</div>',
  ],
});

/*













  renderTpl: [
    // headingEl can also be inserted in updateHeader
    '<tpl if="headingText">',
        '<div id="{id}-headingEl" data-ref="headingEl" role="heading"',
            ' class="', Ext.baseCSSPrefix, 'hidden-clip" style="height:0">',
                '{headingText}',
        '</div>',
    '</tpl>',
    '<tpl if="hasTabGuard">{% this.renderTabGuard(out, values, \'before\'); %}</tpl>',
    '<div id="{id}-bodyWrap" data-ref="bodyWrap" class="{baseCls}-bodyWrap">',
        // If this Panel is framed, the framing template renders the docked items round the frame
        '{% this.renderDockedItems(out,values,0); %}',
        '<div id="{id}-body" data-ref="body" class="{baseCls}-body<tpl if="bodyCls"> {bodyCls}</tpl>',
            ' {baseCls}-body-{ui}<tpl if="uiCls">',
                '<tpl for="uiCls"> {parent.baseCls}-body-{parent.ui}-{.}</tpl>',
            '</tpl>{childElCls}"',
            '<tpl if="bodyAriaAttributes">',
                '<tpl foreach="bodyAriaAttributes"> {$}="{.}"</tpl>',
            '<tpl else>',
                ' role="presentation"',
            '</tpl>',
            '<tpl if="bodyStyle"> style="{bodyStyle}"</tpl>>',
            '{%this.renderContainer(out,values);%}',
        '</div>',
        '{% this.renderDockedItems(out,values,1); %}',
    '</div>',
  ],
  renderTpl_org: [
    // headingEl can also be inserted in updateHeader
    '<tpl if="headingText">',
        '<div id="{id}-headingEl" data-ref="headingEl" role="heading"',
            ' class="', Ext.baseCSSPrefix, 'hidden-clip" style="height:0">',
                '{headingText}',
        '</div>',
    '</tpl>',
    '<tpl if="hasTabGuard">{% this.renderTabGuard(out, values, \'before\'); %}</tpl>',
    '<div id="{id}-bodyWrap" data-ref="bodyWrap" class="{baseCls}-bodyWrap"',
        '<tpl if="bodyWrapAriaAttributes">',
            '<tpl foreach="bodyWrapAriaAttributes"> {$}="{.}"</tpl>',
        '<tpl else>',
            ' role="presentation"',
        '</tpl>',
        '>',
        // If this Panel is framed, the framing template renders the docked items round the frame
        '{% this.renderDockedItems(out,values,0); %}',
        '<div id="{id}-body" data-ref="body" class="{baseCls}-body<tpl if="bodyCls"> {bodyCls}</tpl>',
            ' {baseCls}-body-{ui}<tpl if="uiCls">',
                '<tpl for="uiCls"> {parent.baseCls}-body-{parent.ui}-{.}</tpl>',
            '</tpl>{childElCls}"',
            '<tpl if="bodyAriaAttributes">',
                '<tpl foreach="bodyAriaAttributes"> {$}="{.}"</tpl>',
            '<tpl else>',
                ' role="presentation"',
            '</tpl>',
            '<tpl if="bodyStyle"> style="{bodyStyle}"</tpl>>',
            '{%this.renderContainer(out,values);%}',
        '</div>',
        '{% this.renderDockedItems(out,values,1); %}',
    '</div>',
    '<tpl if="hasTabGuard">{% this.renderTabGuard(out, values, \'after\'); %}</tpl>'
  ],
*/