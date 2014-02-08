var mongoose = require('mongoose');

var Favorites = new mongoose.Schema({
  name: String,
  date: String
});

module.exports = mongoose.model('Favorites', Favorites);