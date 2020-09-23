const tablePageGenerator = require('./plop-templates/table-page/prompt');
const viewGenerator = require('./plop-templates/view/prompt');
const componentGenerator = require('./plop-templates/component/prompt');
const storeGenerator = require('./plop-templates/store/prompt');

module.exports = function(plop) {
  plop.setGenerator('table-page', tablePageGenerator);
  plop.setGenerator('view', viewGenerator);
  plop.setGenerator('component', componentGenerator);
  plop.setGenerator('store', storeGenerator);
};
