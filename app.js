var express = require('express')
var app = express()

app.get('/*', function (req, res) {
  console.log(req.originalUrl)
  res.send({ msg: 'Hello World' })
})

app.listen(80, function () {
  console.log('Server listening at 80')
})
