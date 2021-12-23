Ext.define('BoilerplateSample.Application', {
  extend: 'Ext.app.Application',
  name: 'BoilerplateSample',
  requires: ['BoilerplateSample.*', 'Ext.app.ViewModel'],
  defaultToken: 'homeview',

  launch: function () {
    Ext.ariaWarn = Ext.emptyFn;
    Ext.getBody().removeCls('launching');
    var elem = document.getElementById('splash');
    elem.parentNode.removeChild(elem);

    document.getElementById('appcontainer').style.display = 'block';

    Ext.create('mainview', {
      renderTo: 'appcontainer',
      height: '100%',
      width: '100%',
    });
  },
});
