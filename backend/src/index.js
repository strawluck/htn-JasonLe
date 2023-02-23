/*var https = require('follow-redirects').https;
var fs = require('fs');
const express = require('express');
const app = express();

try {
app.get('/api/events', (req, res) => {
  var options = {
    'method': 'GET',
    'hostname': 'api.hackthenorth.com',
    'path': '/v3/events',
    'headers': {
    },
    'maxRedirects': 20
  };

  var req = https.request(options, function (response) {  // renamed 'res' to 'response'
    var chunks = [];

    response.on("data", function (chunk) {
      chunks.push(chunk);
    });

    response.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      var events = JSON.parse(body.toString());

      events.sort(function(a, b) {
          return new Date(a.start_time) - new Date(b.start_time);
      });
      console.log(events);
      res.send(events);
    });

    response.on("error", function (error) {
      console.error(error);
    });
  });

  req.end();
});
} catch (error) {
  console.log(error);
}*/
/*
app.listen(3000, () => {
  console.log('Server started on port 3000');
});*/

/*
var https = require('follow-redirects').https;
var fs = require('fs');
const express = require('express');
const app = express();


var options = {
  'method': 'GET',
  'hostname': 'api.hackthenorth.com',
  'path': '/v3/events',
  'headers': {
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    //console.log(body.toString());
    var events = JSON.parse(body.toString());

    events.sort(function(a, b) {
        return new Date(a.start_time) - new Date(b.start_time);
    });
    console.log(events);
    //res.send(events);
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();
*/