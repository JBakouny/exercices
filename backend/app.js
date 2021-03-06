const port = 3000
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

// create application/json parser
// var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false })

// POST /login gets urlencoded bodies
app.post('/', urlencodedParser, function (req, res) {
  let jsonObj = req.body
  res.send("<h3>Received post request: </h3>" + JSON.stringify(jsonObj))
})

// POST /api/users gets JSON bodies
//app.post('/api/users', jsonParser, function (req, res) {
  // create user in req.body
//})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

