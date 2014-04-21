helper = require('./routesHelper');

module.exports = function(app) {
  app.get('/get', helper.get);
  app.get('/test', helper.test);
  app.get('/:food?', helper.getChicken);

};