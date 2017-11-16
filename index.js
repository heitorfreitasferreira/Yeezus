var kanye = {};

kanye.music = {
    'The College Dropout': {
        albumName: 'The College Dropout',
        trackList: ["Coming soon.."]
    },

    'Late Registration': {
        albumName: 'Late Registration',
        trackList: ["Coming soon.."]
    },

    'Graduation': {
        albumName: 'The College Dropout',
        trackList: ["Coming soon.."]

    },

    "808's and Heartbreak": {
        albumName: "808's and Heartbreak",
        trackList: ["Coming soon.."]
    },

    'My Beautiful Dark Twisted Fantasy': {

        albumName: 'My Beautiful Dark Twisted Fantasy',
        trackList: ["Dark Fantasy", "Gorgeous", "Power", "All of the Lights (Interlude)", "All of the Lights", "Monster", "So Appalled", "Devil in a New Dress", "Runaway", "Hell of a Life", "Blame Game", "Lost in the World", "Who Will Survive in America"]
    },

    'Watch the Throne': {
        albumName: 'Watch the Throne',
        trackList: ["Coming soon.."]

    },

    'Yeezus': {
        albumName: 'Yeezus',
        trackList: ["Coming soon.."]

    },

    'The Life of Pablo': {
        albumName: 'The Life of Pablo',
        trackList: ["Coming soon.."]

    }


};

kanye.quotes = [];


kanye.quote = function() {
    return 'Quotes to be added';
};


kanye.interrupt = function(text) {
  if ( text === undefined ) {
    text = 'Beyonce has the greatest album of all time';
  }

  var interruption = 'Imma let you finish, but ' + text;

  return interruption;
};


kanye.getAlbumObject = function(selectedAlbum) {
    if (selectedAlbum === undefined) {
        var albums = Object.keys(this.music);

        return this.music[albums[Math.floor(Math.random() * 6)]];

    } else if (this.music[selectedAlbum] === undefined) {
        return 'not a valid album';

    } else {
        return this.music[selectedAlbum];
    }
};

kanye.getAlbumTracks = function(selectedAlbum) {
    if (selectedAlbum === undefined) {
        selectedAlbum = this.getAlbumObject();
    } else if (this.music[selectedAlbum] === undefined) {
        return 'not a valid album';
    }

    var tracks = this.music['My Beautiful Dark Twisted Fantasy'].trackList;
    return tracks;
};


module.exports = kanye;