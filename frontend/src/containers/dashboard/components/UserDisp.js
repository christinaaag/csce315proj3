import React from 'react';
import { Contianer, Row, Col } from 'react-bootstrap';
import tempProf from './../../../assets/TempProf.png';
import './UserDisp.css';
function UserDisp() {
    


return (
    <>
    <div className="userDisp-container">
        <img className= "userProfPic" src ={tempProf}></img>UserName
    </div>
    
    </>
  );

}
export default UserDisp;