const express = require('express')
const app = express()
const port = 3001

app.get('/backendtest', (req, res) => {
  res.send('connected to backend!')
})

app.listen(port, () => {
  console.log(`Moodia backend listening at http://localhost:${port}`)
})