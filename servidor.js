// content of index.js
const http = require('http')
const port = 8080
const fs = require('fs');
var url = require('url');

const requestHandler = function(request, response){
  let endpoint = url.parse(request.url, true);
  switch (endpoint.pathname) {
    case "/":
      fs.readFile("site/index.html", function(error, html){
        response.write(html);
        response.end();
      });
      break;
    case "/hello":
      let name = endpoint.query.name;
      let idade = endpoint.query.name;
      fs.readFile("site/hello.html", function(error, html){
        response.write(html);
        response.end();
      });
      break;
    default:
  }
}

const server = http.createServer(requestHandler);

server.listen(port, function(err){
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
});
