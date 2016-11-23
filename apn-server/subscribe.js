// Manual subscribe to node pushserver instance running locally
var http = require('http');

var user = {
  user: 'user1',
  type: 'ios',
  token: '64a2535473a4a0c92dcc2f0dfcc7672cd4524d4630767a6609a2d3d0d8bfae6e'
}

var userString = JSON.stringify(user);

var headers = {
  'Content-Type': 'application/json',
  'Content-Length': userString.length
};

var options = {
  host: 'localhost',
  port: 8000,
  path: '/subscribe',
  method: 'POST',
  headers: headers
};

// Setup the request.  The options parameter is
// the object we defined above.
var req = http.request(options, function(res) {
  res.setEncoding('utf-8');

  var responseString = '';

  res.on('data', function(data) {
    responseString += data;
    console.log("Data " + responseString);
  });

  res.on('end', function() {
    //var resultObject = JSON.parse(responseString);
    console.log("End ");
  });
});

req.on('error', function(e) {
  console.log("Error " + e);
});

req.write(userString);
req.end();
