const express = require('express')
const app = express()
const port = 5000
const bodyParser = require("body-parser")
var cors = require('cors')


var Twitter = require('twitter-lite')
const prompt = require('prompt-async')
require ('custom-env').env('twitter')

const client = new Twitter({
    consumer_key: process.env.API_KEY,
    consumer_secret: process.env.API_SECRET
});

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json())
app.use(express.static('../frontend/build'))
app.get('/backendtest', (req, res) => {
  res.send('connected to backend!')
})

var server = app.listen(port, function() {
  var host = server.address().address
  var port = server.address().port
  console.log(`Moodia backend listening at http://%s:%s`, host, port)
})

app.get('/request_token', async function (req, res) {
  var request_token;
  await client.getRequestToken("http://localhost:5000/access_token")
    .then(res =>
      {
          console.log({
              request_token: res.oauth_token,
              request_secret: res.oauth_token_secret,
              cb_confirm: res.oauth_callback_confirmed
          })
          request_token = res.oauth_token
        }
      ).catch(console.error);
  console.log(request_token)
  res.send({link: "https://api.twitter.com/oauth/authorize?oauth_token="+request_token, message: request_token});
});

app.get('/access_token', async function (req, res) {

  var oauth_verifier = req.query.oauth_verifier
  var request_token = req.query.oauth_token

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
    
    const userclient = new Twitter({
      consumer_key: process.env.API_KEY,
      consumer_secret: process.env.API_SECRET,
      access_token_key: oauth_token,
      access_token_secret: oauth_token_secret
    });

    var response = userclient.get("statuses/user_timeline");
    let text = []
  

    res.redirect('http://localhost:3000/dashboard?oauth_token='+oauth_token+"&oauth_verifier"+oauth_token_secret)
});



