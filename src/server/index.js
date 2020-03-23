const dotenv = require('dotenv');
dotenv.config();

var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
var aylien = require("aylien_textapi");

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/sentiment', function (req, res) {
    var textapi = new aylien({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
    if(req.body.isURL){
        textapi.sentiment({
            'url': req.body.inputText
        }, function(error, response) {
            if (error === null) {
                console.log(response)
                res.send(response);
            }
        });
    } else {
        textapi.sentiment({
            'text': req.body.inputText
        }, function(error, response) {
            if (error === null) {
                console.log(response)
                res.send(response);
            }
        });
    }

})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('App listening on port 8081!')
})
