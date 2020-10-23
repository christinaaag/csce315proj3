const express = require('express')
const app = express()
const port = 3001

app.get('/backendtest', (req, res) => {
  res.send('connected to backend!')
})

var server = app.listen(port, function() {
  var host = server.address().address
  var port = server.address().port
  console.log(`Moodia backend listening at http://%s:%s`, host, port)
})