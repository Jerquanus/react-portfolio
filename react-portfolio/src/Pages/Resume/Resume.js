import React from 'react';
import resume from "../../Assets/images/smartContract.png"
import "./style.css";


function Resume () {
  return(
  <div className="resumeContainer">
  
    <div className="resumeGrid">

      <div className="resumeDiv"> 
        <img className="resume" src = {resume} alt="resume"  />
      </div>

      <div className = "resumeButton">
        
        <a href = "https://docs.google.com/document/d/1S7BnpSYfGr8pyP9A_lxEmjLPOMI2YdeoTT8gHOz9va8/edit?usp=sharing" 
            target="_blank" rel="noopener noreferrer"
          >View or Download Resume
        </a>
        
      </div>

    </div>

  </div>

)};
export default Resume;
