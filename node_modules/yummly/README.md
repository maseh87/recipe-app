##Yummly API Module for Node.js

1.) Register an account at [http://developer.yummly.com/](http://developer.yummly.com/).

    var credentials = {
      id: '********',
      key: '********************************'
    }

2.) Install Yummly module.

    npm install yummly

3.) Require the search/recipe modules.

    var yummly = require('yummly');

4.) Call search/recipe function and have fun with [Yummly's JSON object](http://developer.yummly.com/wiki)!

Search:

    yummly.search({
      credentials: credentials,
      query: {
        q: 'chicken'
      }
    }, function (error, response, json) {
      if (error) {
        console.error(error);
      } else if (response.statusCode === 200) {
        console.log(json);
      }
    });

Recipe:

    yummly.search({ // calling search first to get a recipe id
      credentials: credentials,
      query: {
        q: 'pasta'
      }
    }, function (error, response, json) {
      if (error) {
        console.error(error);
      } else if (response.statusCode === 200) {
        yummly.recipe({
          credentials: credentials,
          id: json.matches[0].id // id of the first recipe returned by search
        }, function (error, response, json) {
          if (error) {
            console.error(error);
          } else {
            console.log(json);
          }
        });
      }
    });

###Contributing

1.) Fork then clone this repository.

2.) Install development dependencies.

    cd ~/node-yummly
    npm install -d

3.) Make changes.

4.) Run unit tests.

`make` runs all tests
`make test-search` runs only search tests
`make test-recipe` runs only recipe tests

5.) Send a pull request.
