// controllers/albumsController.js

var db = require('../models');

// GET /api/albums
function index(req, res) {
  db.Album.find({}, function(err, albums){
    if (err) {
      return console.log('Error: ' + err);
    }
    res.json(albums);
  })
}

// POST /api/albums
function create(req, res) {
  var newAlbum = new db.Album({
        artistName: req.body.artistName,
        name: req.body.name,
        releaseDate: req.body.releaseDate,
        genres: req.body.genres.split(',')
    });
    newAlbum.save(function(err, album) {
        if (err) {
            return console.log("Error " + err);
        }
        console.log("Saved " + album.name);
        res.json(album);
    });
}

// GET /api/albums/:albumId
function show(req, res) {
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  db.Album.findOne({_id : req.params._id})
  // find one album by id, update it based on request body,
  // and send it back as JSON
}

// // POST /api/albums/:album_id/songs
// function createSong(req, res) {
//   var newSong = new db.Song({
//
//   })
// }

// controllers/albumsController.js
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
