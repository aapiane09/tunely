// CLIENT-SIDE JS



$(document).ready(function() {
  console.log('app.js loaded!');
  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: getAlbums,
    error: onError
  })

  // $('form').on('submit', function(event){
  $('#addArtistInfoBtn').click(function(event){
    event.preventDefault();
    $.ajax({
      method: "POST",
      url: '/api/albums',
      data: $('form').serialize(),
      success: postAlbum,
      error: onError
    });
  });

});

// iterates through all returned albums
function getAlbums(res){
  res.forEach(function(album){
    renderAlbum(album);
  })
}

// posts an album to the database
function postAlbum(res) {
  console.log("Album Post!", res);
  renderAlbum(res);
}

// this function takes a single album and renders it to the page
function renderAlbum(album) {
  var source = $('#album-template').html();
  var albumTemplate = Handlebars.compile(source);
  var albumHtml = albumTemplate({
    name: album.name,
    artistName: album.artistName,
    releaseDate: album.releaseDate
  });
  $('.panel-body').append(albumHtml);

}

function onError(res){
  res.status(500).send('server error');
}
