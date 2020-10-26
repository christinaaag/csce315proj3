import React from 'react';
import { Contianer, Row, Col } from 'react-bootstrap';
import tempProf from './../../../assets/TempProf.png';
import './UserDisp.css';
import Dashboard from '../Dashboard.js';
function UserDisp() {
    


return (
    <>
    <div className="userDisp-container">
    {Dashboard.image_url}hello
        <img className= "userProfPic" src ={Dashboard.image_url}></img>UserName
    </div>
    
    </>
  );

}
export default UserDisp;