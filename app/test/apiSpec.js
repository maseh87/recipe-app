var expect = require('expect.js');
var request = require('supertest');
var app = require('../../server.js');


describe('Api Server', function() {
  it('Should respond with 200', function(done) {
    request(app).get('/test').end(function(error, res) {
      expect(res.status).to.be(200);
      done();
    })
  })
})
describe('Index page', function() {
  it('Should load index.html', function(done) {
    request(app).get('/').end(function(error, res) {
      expect(res.status).to.be(200);
      expect(error).to.be(null);
      done();
    })
  })
})
describe('yummly api', function() {
  it('Should load recipes', function(done) {
    request(app).get('/chicken').end(function(error, res) {
      expect(res.status).to.be(200);
      expect(error).to.be(null);
      expect(res.body).to.be.an('object');
      expect(res.body.attribution).to.be.an('object');
      expect(res.body.matches).to.be.an('array');
      done();
    })
  })
})