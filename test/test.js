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

    expect(albums).to.equal(8);

  });
  it('should return a random album without input', function(){
    var album = kanye.getAlbumObject();
    expect(album).to.be.an('object');
    expect(album.albumName).to.be.a('string');
    expect(album.trackList).to.be.an('array');

  });

  it('should return a specified album with input', function(){

    var album = kanye.getAlbumObject('My Beautiful Dark Twisted Fantasy');

    expect(album).to.be.an('object');
    expect(album.albumName).to.be.a('string');
    expect(album.albumName).to.equal('My Beautiful Dark Twisted Fantasy');
    expect(album.trackList).to.be.an('array');
    expect(album.trackList[0]).to.equal('Dark Fantasy');
  });

});
