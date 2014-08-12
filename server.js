'use strict';

var express = require('express'),
    http    = require('http'),
    app     = express(),
    date    = new Date,
    hour    = date.getHours(),
    min     = date.getMinutes();

if (hour > 12){
  hour -= 12;
}
if (min < 10){
  min += "0";
}


app.get('/time', function(req, res) {
  res.send('The local time is ' + hour + ":" + min);
  console.log(date);
});

app.get('/:input1', function(req, res) {
  res.send({'msg' : 'Hello ' + req.params.input1 + "!"});
});

app.use(express.static(__dirname + '/static'));

var server = http.createServer(app);

server.listen(3000, function() {
  console.log('server running on port 3000');
});
