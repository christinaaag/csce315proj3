const { request } = require('express');
var Twitter = require('twitter-lite')
const prompt = require('prompt-async')
require ('custom-env').env('twitter')

const client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET
});

async function oauth() {
    // gets request token to create authorize url
    var cb_confirm, request_token;
    await client.getRequestToken("oob")
      .then(res =>
        {
            console.log({
                request_token: res.oauth_token,
                request_secret: res.oauth_token_secret,
                cb_confirm: res.oauth_callback_confirmed
            })
            cb_confirm = res.oauth_callback_confirmed
            request_token = res.oauth_token
        }
      ).catch(console.error);
    

      //user clicks the authorize url, logs in and generates PIN/redirect callback url
      console.log("Click link below to authenticate user for site.")
      console.log("https://api.twitter.com/oauth/authorize?oauth_token="+request_token)
      

      console.log("Enter PIN below after login")
      prompt.start();
      var oauth_verifier = await prompt.get(['PIN']);
      oauth_verifier = Object.values(oauth_verifier)[0]
      console.log(oauth_verifier)
    

    //after getting PIN/oauth_verifier, gets oauth token of user
    var oauth_token, oauth_token_secret;
    await client.getAccessToken({
        oauth_verifier: oauth_verifier,
        oauth_token: request_token
    })
    .then(res =>
        {
            console.log({
                oauth_token: res.oauth_token,
                oauth_token_secret: res.oauth_token_secret,
                userId: res.user_id,
                screenName: res.screen_name
              })
            oauth_token = res.oauth_token
            oauth_token_secret = res.oauth_token_secret
        }
    ).catch(console.error);
}

oauth();
