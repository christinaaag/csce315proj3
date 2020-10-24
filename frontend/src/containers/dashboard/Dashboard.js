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

const Dashboard = () => {
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