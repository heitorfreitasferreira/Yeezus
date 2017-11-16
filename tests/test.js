'use strict';

var expect = require('chai').expect;
var kanye = require('../index.js');


describe('Kanye', function(){

  it('should be defined', function(){
    var defined = false;
    if(kanye) {
      defined = true;
    }

    expect(defined).to.be.true;
  });

  it('should contain all his albums', function(){
    var albums = Object.keys(kanye.music).length;

    expect(albums).to.equal(7);

  });
  it('should return a random album without input', function(){


  });
  it('should return a specified album with input')

});
