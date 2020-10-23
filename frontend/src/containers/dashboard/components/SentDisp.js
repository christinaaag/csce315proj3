import React, { useState, useEffect } from 'react';
import { Button } from './Button.js';
import { Link } from 'react-router-dom';
import './SentDisp.css';
import { Row } from 'react-bootstrap';


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