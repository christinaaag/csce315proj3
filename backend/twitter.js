const Twitter = require('twitter')

require ('custom-env').env('twitter')


//consumer key & secret will remain the same; working on 3-point authorization
var client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET,
    access_token_key: process.env.ACCESS_TOKEN, 
    access_token_secret: process.env.TOKEN_SECRET
});

