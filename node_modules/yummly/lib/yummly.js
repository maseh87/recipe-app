'use strict';

var
  http = require('http'),
  querystring = require('querystring');

function getJSON(options, callback) {

  if (options.query) {
    options.path += '?' + querystring.stringify(options.query);
  }

  http.get({
    host: options.host || 'api.yummly.com',
    path: (options.root || '/v1/api/') + options.path,
    headers: options.headers || {
      'Content-Type': 'application/json',
      'X-Yummly-App-ID': options.credentials.id,
      'X-Yummly-App-Key': options.credentials.key
    }
  }, function (response) {
    var json = '';

    response.on('error', function (error) {
      callback(error);
    }).on('data', function (data) {
      json += data;
    }).on('end', function (error) {
      callback(error, response.statusCode, JSON.parse(json));
    });
  });
}

module.exports = {
  search: function (options, callback) {
    options.path = 'recipes';

    getJSON(options, callback);
  },
  recipe: function (options, callback) {
    options.path = 'recipe/' + options.id;

    getJSON(options, callback);
  }
};
