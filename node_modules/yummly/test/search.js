'use strict';

var search;

describe('search', function () {

  it('should be fast', function (done) {
    yummly.search({
      credentials: credentials,
      query: {
        q: 'chicken'
      }
    }, function (error, statusCode, json) {
      if (error) {
        console.error(error);
      } else if (statusCode === 200) {
        search = json;
        done();
      }
    });
  });

  it('should return 40 recipes', function () {
    expect(search.matches.length).to.be(40);
  });

  it('should return recipe names', function () {
    expect(search.matches[0].recipeName).to.be.ok();
    console.log(search.matches[0].recipeName);
  });

});
