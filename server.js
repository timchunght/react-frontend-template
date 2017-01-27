// start the server
var port = process.env.PORT || 3000;
// const env = process.env.NODE_ENV || 'production';
var express = require('express')
var path    = require("path")
var app = express()

app.use(express.static('public'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/index.html'));
})

app.listen(port)
console.log("Running at Port " + port);