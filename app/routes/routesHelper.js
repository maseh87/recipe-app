var favorites = require('../models/favorites');
var yummly = require('yummly');
var credits = require('../config/serverConfig').yummly;

module.exports = {
  get: function(req, res) {
    res.send('it still works');
  },
  test: function(req, res) {
    var fav = new favorites();
    fav.name = 'Mac and Cheese';
    fav.date = 'Today';
    fav.save(function(err) {
      if(err) {
        console.log('error', err);
      }
      res.send(200);
    });
  },
  getChicken: function(req, res) {
    var food = req.params.food;
    yummly.search({
      credentials: credits,
      query: {
        q: food
      }
    },function(error, response, json) {
      if(error) {
        console.log(error);
      } else {
        res.json(json);
      }
    });
  }
}