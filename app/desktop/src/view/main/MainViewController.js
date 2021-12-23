Ext.define('BoilerplateSample.view.main.MainViewController', {
  extend: 'Ext.app.ViewController',
  alias: 'controller.mainviewcontroller',
  changeName: function () {
    const f = this.lookupReference('inputField');
    this.getViewModel().set('name', f.value);
  },
});
