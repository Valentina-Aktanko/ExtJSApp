Ext.define('ExtJSApp.model.Product', {
  extend: 'Ext.data.Model',
  alias: 'model.Product',
  fields: [
    { name: 'id',           type: 'number' },
    { name: 'name',         type: 'string' },
    { name: 'description',  type: 'string' },
    { name: 'price',        type: 'number' },
    { name: 'count',        type: 'number' }
  ],
});