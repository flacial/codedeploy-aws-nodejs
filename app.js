var express = require('express')
var app = express()

app.get('/*', function (req, res) {
  res.send('testing auto scaling', req.originalUrl)
})

app.listen(80, function () {
  console.log('Server listening at 80')
})
