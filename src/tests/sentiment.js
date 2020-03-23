const dotenv = require('dotenv');
dotenv.config();
var aylien = require("aylien_textapi");

async function sentiment(inputText){
    var textapi = new aylien({
        application_id: process.env.API_ID,
        application_key: process.env.API_KEY
    });
    await textapi.sentiment({
        'text': inputText,
        'mode': 'tweet'
    }, async function(error, response) {
        if (error === null) {
            await console.log('response:',JSON.stringify(response))
            return response
        }
    });
}
module.exports = sentiment;
