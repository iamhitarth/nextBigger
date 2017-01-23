var expect = require("chai").expect;
var nextBigger = require('../index.js').nextBigger;

describe('#nextBigger', function(){
  it('returns a number', function(){
    expect(nextBigger(1)).to.be.a('number');
  });
});
