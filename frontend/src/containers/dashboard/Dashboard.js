import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import './Dashboard.css';
import './../generalStyle.css';
import logo from './../../assets/logos - white.png';
import SentDisp from './components/SentDisp';

const Dashboard = () => {
    return (
        <div className="body">
            <Container >
                <h1 className="title">Moodia<img className="logo" src={logo} alt="" /></h1>
            </Container>
            <Container>
            
                <Col>
                <SentDisp/>
                </Col>


                <Col>
                <h1>Twitter Feed</h1>
                </Col>
                    
        
            </Container>
          
        </div>
    )
}

export default Dashboard;