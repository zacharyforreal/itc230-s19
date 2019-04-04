const http = require("http"); 
const fs = require("fs");
http.createServer((req,res) => {
  const path = req.url.toLowerCase();
  switch(path) {
    case '/':
    //   res.writeHead(200, {'Content-Type': 'text/plain'});
    //   res.end('Home page');
    fs.readFile("public/home.html", (err, data) => {
     if (err) return console.error(err);
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data.toString());
  });
      break;
      
    case '/about':
    //   res.writeHead(200, {'Content-Type': 'text/plain'});
    //   res.end('About page');
    fs.readFile("public/about.html", (err, data) => {
     if (err) return console.error(err);
     res.writeHead(200, {'Content-Type': 'text/html'});
     res.end(data.toString());
  });
      break;
      
    default:
      res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
      break;
    }
}).listen(process.env.PORT || 3000);
