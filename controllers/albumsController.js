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
        genres: req.body.genres
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
  // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
  // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
  // find one album by id, update it based on request body,
  // and send it back as JSON
}


// controllers/albumsController.js
module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
