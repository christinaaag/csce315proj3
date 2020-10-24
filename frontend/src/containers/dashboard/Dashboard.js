import React from 'react';
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

const Dashboard = () => {

    var user_name, image_url;
    async function getInformation() {
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
        console.log({oauth_token, oauth_token_secret})
        var path = '/user?token_key=' + oauth_token + '&token_secret=' + oauth_token_secret
        console.log(path)
        response = await Axios({
            method: "GET",
            url: path,
            headers: {
                "Content-Type": "application/json"
            }
        })

        console.log(response.data)
        user_name = response.data.name
        image_url = response.data.image_url;
    }
    getInformation();
    const scrollContainerStyle = { width: "800px", maxHeight: "400px" };
    return (
        <div className="body">
            <Container style={{ margin: 0 }}>
                <h1 className="logo">Moodia<img className="logo" src={logo} alt="" /></h1>
            </Container>
            <Container style={{ margin: 0 }}>

                <Col>

                    <UserDisp />

                    <SentDisp />

                </Col>




                <Col className="feed">
                    <h2>Twitter Feed</h2>
                    <br />
                    <div className="scrollbar scrollbar-primary" style={scrollContainerStyle}>
                        <Timeline />
                    </div>
                </Col>


            </Container>

        </div>
    )
}

export default Dashboard;