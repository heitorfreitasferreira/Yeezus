# Yeezus
A monument to Kanye and also a reminder to have fun

## Installation

  `npm install yeezus --save`

## Usage
    var kanye = require('yeezus');
    kanye.interrupt();


  This should return - 'Imma let you finish, but Beyonce had the best album of all time' - Kanye's most quoted line.

    kanye.getAlbumObject();
    kanye.getAlbumObject('My Beautiful Dark Twisted Fantasy');

  Get an object that holds data from his albums. If no album is selected, a random one is chosen.

    kanye.getAlbumTracks();
    kanye.getAlbumTracks('My Beautiful Dark Twisted Fantasy');
  Get an array of tracks from a specified album. If no album is selected, a random one is chosen.

## Tests

  `npm test`