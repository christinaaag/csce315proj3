import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Landing.css';
import './../generalStyle.css';
import logo from './../../assets/logos - white.png';
import loginImage from './../../assets/purpleLoginCard.png';
import pickMoodImage from './../../assets/purplePickMoodCard.png';
import scrollImage from './../../assets/purpleScrollCard.png';

const Landing = () => {
    return (
        <div className="body">
            <Container  fluid>
                <Row>
                <Col>
                    <h1>Moodia<img className="logo" src={logo} alt="" /></h1>
                    <p className="subText">'cuz sometimes, you're just not in the mood.
                    <br /> <br />
                    Moodia is a simple way to filter and display your timeline based on emotions.
                    <br />
                    Simply login to your Twitter, select the mood that you're in and watch your feed transform.
                    <br /><br />
                    To get started, sign in and we'll take care of the rest.
                    <br /><br /></p>
                    <p className="twitterButton"><Button variant="primary" size="sm">Sign in with Twitter</Button>{' '}</p>
                </Col>
                <Col>
                    <Row><img className="imageCard" src={loginImage} alt=""/></Row>
                    <Row><img className="imageCard" src={pickMoodImage} alt=""/></Row>
                    <Row><img className="imageCard" src={scrollImage} alt=""/></Row>
                </Col>
                </Row>
            </Container>
        
        </div>
        
        
        
    )
}

export default Landing;