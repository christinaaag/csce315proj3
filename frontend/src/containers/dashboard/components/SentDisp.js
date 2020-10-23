import React, { useState, useEffect, ComponentProps} from 'react';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';
import './SentDisp.css';
import { Contianer, Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';



function SentDisp() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const showButton = () => {
        if (window.innerWidth <= 960) {
          setButton(false);
        } else {
          setButton(true);
        }
    };

useEffect(() => {
    showButton();
  }, []);


window.addEventListener('resize', showButton);



return (
    <>
    
        <div className='sentdisp-container'>
          <div className= 'sentdisp-data'>
            <Row>
              <Col>
              <PieChart
                data={[
                  { title: 'Happy', value: 10, color: '#F8C822' },
                  { title: 'Sad', value: 60, color: '#6693FF' },
                  { title: 'Neutral', value: 20, color: '#958C8C' },
                ]}

                lineWidth={20}

                />
                <br></br>
                <br></br>
          
                  <h4 className= 'legend-title'>Tweet Emotions</h4>
                  
                  <div className= 'legend-text' style = {{color: '#F8C822'}}>😊Happy</div>
                  <div className= 'legend-text' style = {{color: '#6693FF'}}>😔Sad</div>
                  <div className= 'legend-text' style = {{color: '#958C8C'}}>😶Neutral</div>
               
              </Col>
             
            </Row>
            

          </div>
  
          <div className='sentdisp-btns'>
            <Button buttonStyle='btn--happy'>Display Happy Tweets</Button>
            
            
            <Button buttonStyle='btn--sad'>Display Sad Tweets</Button>
            
          
            <Button buttonStyle='btn--neutral'>Display Neutral Tweets</Button>
          
          </div>
        </div>
    
    </>
  );
}

export default SentDisp;