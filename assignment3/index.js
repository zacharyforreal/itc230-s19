'use strict'


const qs = require("querystring");
const http = require("http"), fs = require('fs');
const movies = require('./lib/movies.js');

const express = require("express");
const app = express();


http.createServer((req,res) => {
  let url = req.url.split("?");
  let movie = qs.parse(url[1]);
  let path = url[0];
  
  //https://itc230-s19-xingli313.c9users.io/get?title=workPlease
  

  switch(path) {
    
    case '/':
    fs.readFile("public/home.html", (err, data) => {
     if (err) return console.error(err);
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data.toString());
  });
      break;
      
    case '/about':
    fs.readFile("public/about.html", (err, data) => {
     if (err) return console.error(err);
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data.toString());
  });
      break;
      
     //get specific movie 
     case '/get':
       //console.log(movie);
      var input = movies.get(movie.title);
      //console.log(input);
      //if (input == NOT_FOUND) input = 'Not Found';
      let results = (input) ? JSON.stringify(input) : "Not found";
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end('results for ' + movie.title + '...............' + results);
      break;
      
      
    // get all movies
    case '/getall':  
      console.log('getall')
      var allItems = movies.getAll();
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end(JSON.stringify(allItems));
      break;
      

    //delete one movie
    case '/delete':
      console.log('Deleted action')
      var deleteItem = movies.delete(movie.title);
      //console.log("A1")
      let result = deleteItem;
      if (result = (deleteItem > -1)) {
      // let result = (deleteItem > -1) ? JSON.stringify(deleteItem) : "Not found"
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("The movie " + movie.title + " has been deleted."); 
      } else {
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("We can not find this movie. ");  
      }
      break;
      
    //add movie to the array 
    case '/add':
      res.writeHead(200, {'Content-Type': 'text/plain'});
      res.end("\n \n"); // delete specific movie title
      break;

    
      
      
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found.  ');
  }
  
}).listen(process.env.PORT || 3000);