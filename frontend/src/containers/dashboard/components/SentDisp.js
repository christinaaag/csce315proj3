import React, { useState, useEffect, ComponentProps } from 'react';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';
import './SentDisp.css';
import { Container, Row, Col } from 'react-bootstrap';
import { PieChart } from 'react-minimal-pie-chart';



const SentDisp = (props) => {
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
        <Container fluid>
          <div className='sentdisp-data'>
            <Row>
              <Col xs={12}>
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

                <h4 className='legend-title'>Tweet Emotions</h4>

                <div className='legend-text' style={{ color: '#F8C822' }}>😊Happy</div>
                <div className='legend-text' style={{ color: '#6693FF' }}>😔Sad</div>
                <div className='legend-text' style={{ color: '#958C8C' }}>😶Neutral</div>

              </Col>

            </Row>


          </div>
          <Row>
            <Col xs={12}>
              <div className='sentdisp-btns'>
                <Button buttonStyle='btn--happy' onClick={props.changeMood} value={'happy'}>Display Happy Tweets</Button>

                <Button buttonStyle='btn--sad' onClick={props.changeMood} value={'sad'}>Display Sad Tweets</Button>


                <Button buttonStyle='btn--neutral' onClick={props.changeMood} value={'neutral'}>Display Neutral Tweets</Button>

              </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  );
}

export default SentDisp;