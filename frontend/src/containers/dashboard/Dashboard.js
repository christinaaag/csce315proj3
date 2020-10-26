import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css';
import './../generalStyle.css';
import logo from './../../assets/logos - white.png';
import Timeline from '../../components/Timeline';
import SentDisp from './components/SentDisp';
import UserDisp from './components/UserDisp';
import tempTweets from './../../assets/temporaryFeed.png';
import Axios from "axios";
import {useAsync} from "react-async"


async function getInformation() {
   
    var user_name, image_url, tweets;
    var tweet_text = []
    var emotions = []
    var link = window.location.href
    console.log(link)

    var response = await Axios({
        method: "GET",
        url: link,
        headers: {
            "Content-Type": "application/json"
        }
    });

    var oauth_token = response.data.oauth_token
    var oauth_token_secret = response.data.oauth_token_secret
    var path = '/christina-gan5/csce315project3/user?token_key=' + oauth_token + '&token_secret=' + oauth_token_secret
    
    response = await Axios({
        method: "GET",
        url: path,
        headers: {
            "Content-Type": "application/json"
        }
    })

    user_name = response.data.name
    image_url = response.data.image_url;

    path = '/christina-gan5/csce315project3/tweet_text?token_key=' + oauth_token + '&token_secret=' + oauth_token_secret
    response = await Axios({
        method: "GET",
        url: path,
        headers: {
            "Content-Type": "application/json"
        }
    })
    tweets = response.data

    tweets.forEach(function (tweet) {
        tweet_text.push(tweet.text);
    });

    
    for (var text of tweet_text){
        var raw_text = text.replace(/(?:https?|ftp):\/\/[\n\S]+/g, '');
        path = '/christina-gan5/csce315project3/tweet_emotion?text=' + raw_text
        response = await Axios({
            method: "GET",
            url: path,
            headers: {
                "Content-Type": "application/json"
            }
        })
        emotions.push(response.data)
    }

    return [user_name, image_url, tweets, tweet_text, emotions]
}

const tweetsList = [
    {
        author: "Guy Boring",
        text: "This is a neutral tweet.",
        mood: 'neutral',
        date: '10/01/20',
        url: 'twitter.com',
    }, {
        author: "Happ E. Man",
        text: "This is a happy tweet.",
        mood: 'happy',
        date: '10/02/20',
        url: 'twitter.com',
    }, {
        author: "Sad Boy",
        text: "This is a sad tweet.",
        mood: 'sad',
        date: '10/03/20',
        url: 'twitter.com',
    }, 
];

var user_name, image_url, tweets, tweet_text, emotions;
const Dashboard = () => {
    const [userMood, setUserMood] = useState("all");

    var emotions = []
    function changeMood(mood) {
        if(userMood == mood){
            setUserMood("all");
        } else {
            setUserMood(mood);
        }
    }
    const scrollContainerStyle = { width: "800px", maxHeight: "800px" };
    const {data, error, isPending } = useAsync({promiseFn: getInformation})
    if (isPending) return "Loading.."
    if (error) {
        console.log(window.location.href)
        console.log(error)
        return `Something went wrong: ${error.message}`
    }

    
    if (data){
        user_name = data[0]
        image_url = data[1]
        tweets = data[2]
        tweet_text = data[3]
        emotions = data[4]
        console.log(data)

        return (
            <div className="body">
                <Container style={{ margin: 0 }}>
                    <h1 className="logo">Moodia<img className="logo" src={logo} alt="" /></h1>
                </Container>
                <Container fluid>
                    <Row className="row">
                        <Col xs={12} md={3}>
                           
                        <div className="userDisp-container">
                            <img className= "userProfPic" src ={image_url}></img>{user_name}
                        </div>
                        
                        <SentDisp changeMood={e => changeMood(e.target.value)} />

                        </Col>

                        <Col xs={8}>
                            <h2>Twitter Feed</h2>
                            <h2>{userMood}</h2>
                            <br />
                            <div className="scrollbar scrollbar-primary" >
                                <Timeline tweets={tweetsList} userMood={userMood} />
                            </div>
                        </Col>
                    </Row>


                </Container>

            </div>
        )
    }
}

export default Dashboard;