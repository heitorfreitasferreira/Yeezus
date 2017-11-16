[![Build Status](https://travis-ci.org/abishakkodi/Yeezus.svg?branch=master)](https://travis-ci.org/abishakkodi/Yeezus)
# Yeezus
A monument to Kanye and also a reminder to have fun

## Installation

  `npm install yeezus --save`

## Usage
    var kanye = require('yeezus');
    kanye.interrupt();
    kanye.interrupt('California Burritos are the best burritos ever');


  
  Kanye will interrupt with a phrase of your saying,  
  'Imma let you finish, but California Burritos are the best burritos ever.'
  
  If no argument is supplied, it should return - 'Imma let you finish, but Beyonce had the best album of all time' - Kanye's most quoted line.
  

    kanye.getAlbumObject();
    kanye.getAlbumObject('My Beautiful Dark Twisted Fantasy');

  Get an object that holds data from his albums. If no album is selected, a random one is chosen.

    kanye.getAlbumTracks();
    kanye.getAlbumTracks('My Beautiful Dark Twisted Fantasy');
  Get an array of tracks from a specified album. If no album is selected, a random one is chosen.

## Tests

  `npm test`

## Copyright

Under Section 107 of the Copyright Act 1976, allowance is made for "fair use" for purposes such as criticism, comment, news reporting, teaching, scholarship, and research. Fair use is a use permitted.

Please don't sue me.
