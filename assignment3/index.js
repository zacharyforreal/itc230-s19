'use strict';


const path = require('path');
const http = require("http"), fs = require('fs');
const movies = require('./lib/movies.js');

const express = require("express");
const app = express();


const handlebars = require('express-handlebars')
  .create({ defaultLayout: 'main' });
  

app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.use(require('stylus').middleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('body-parser')());


http.createServer(app).listen(app.get('port'), function () {
    console.log('Express server listening on port ' + app.get('port'));
});


app.get('/', function (req, res) {
    res.type('text/html');
    res.sendFile(__dirname + '/public/home.html');
});



app.get('/about', function (req, res) {
    res.render('about', {
        Title: movieCollections.title,
        Releasedate: movieCollections.releasedate,
        IMDBRating: movieCollections.IMDBRating
    });
});

//get object
app.get('/get', function (req, res) {
    var item = movies.get(req.query.title)
    if (item) {
        res.send("Looking for movie called " + req.query.title + "\n" + JSON.stringify(item));
    } else {
        res.send("Movie not found");
    }

});

app.post('/get', function (req, res) {
    var item = movies.get(req.body.title)
    res.render('details', { title: req.body.title, item: item });

});

//delete object
app.get('/delete', function (req, res) {
    var result = movies.delete(req.query.title)
    console.log(result)
    //res.send("Deleted Movie " + req.query.title + "\n" + JSON.stringify(result));
    res.render('delete', { title: req.query.title, result: result });
});


// 404 handler
app.use(function (req, res, next) {
    res.status(404);
    res.render('404');
});
// 500 handler
app.use(function (err, req, res, next) {
    console.error(err.stack);
    res.status(500);
    res.render('500');
});  