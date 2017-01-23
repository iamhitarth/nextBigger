let expect = require("chai").expect;
let nextBigger = require('../index.js').nextBigger;

describe('#nextBigger', function() {
  it('returns a number', function() {
    expect(nextBigger(1)).to.be.a('number');
  });

  it('returns next bigger number', function() {
    expect(nextBigger(12)).to.be.equal(21);
    expect(nextBigger(513)).to.be.equal(531);
    expect(nextBigger(414)).to.be.equal(441);
    expect(nextBigger(144)).to.be.equal(414);
    expect(nextBigger(2017)).to.be.equal(2071);
    expect(nextBigger(2315)).to.be.equal(2351);
    expect(nextBigger(7710862)).to.be.equal(7712068);
    expect(nextBigger(987963)).to.be.equal(989367);
    expect(nextBigger(2796192143791)).to.be.equal(2796192143917);
  });

  it('returns same number if no bigger number with same digits', function() {
    expect(nextBigger(9999)).to.be.equal(9999);
  });
});
