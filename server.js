var express = require('express'),
    bodyParser = require('body-parser'),
    // db = require('..ar/models'),
    app = express(),
    //server.js
    controllers = require('./controllers');

app.use(express.static('public'));
app.use(bodyParser());

app.get('/', function (req, res) {
    res.sendFile('/views/index.html', {
        root: __dirname
    });
});

app.get('/api', controllers.api.index);

app.get('/api/albums', controllers.albums.index);

app.post('/api/albums', controllers.albums.create);


app.listen(3000, function() {
    console.log("Listening at Port 3000!");
});
