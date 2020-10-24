// imports the google cloud client library
const SentimentAPI = require('@google-cloud/language');

// the line below sets the required environment variable 
process.env.GOOGLE_APPLICATION_CREDENTIALS = __dirname + "\\csce315project3-34e117ad2da0.json";

// below is the enum for what sentiments will be returned
const emotions = {
    HAPPY: 'happy',
    NEUTRAL: 'neutral',
    SAD: 'sad'
};

async function getSentimentScore(text) {
  
    // instantiates a client
    const client = new SentimentAPI.LanguageServiceClient();
  
    const document = {
      content: text,
      type: 'PLAIN_TEXT',
    };
  
    // Detects the sentiment of the text
    const [result] = await client.analyzeSentiment({document: document});
    const sentiment = result.documentSentiment;
    
    // negative indicates bad emotions positive indicates happy emotions neutral is close to 0
    return sentiment.score;
}

async function scoreToSentiment(text) {
    let score = await getSentimentScore(text);
    if(score > .4) {
        return emotions.HAPPY;
    } else if(score < -.4){
        return emotions.SAD;
    } else {
        return emotions.NEUTRAL;
    }
}

// note: since this function is async, it will return a promise, not a string 
async function getSentiment(text) {
    // will return happy, neutral, or sad as defined in the emotions enum
    return await scoreToSentiment(text);
}

/*
    below is an example call to getSentiment() that will print the sentiment:
    getSentiment('this is a divisive tweet that will make you sad').then(console.log);
*/