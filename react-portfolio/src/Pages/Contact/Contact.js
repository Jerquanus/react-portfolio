import React from 'react';
import { SocialIcon } from 'react-social-icons';
import "./style.css";

function Contact () {


    return (

        <div className="contactContainer" >
            <SocialIcon network="email" style={{ height: 100, width: 100, margin: 20 }} />
            <a href="jerquanus@gmail.com" title="jerquanus@gmail.com" target="_blank" rel="noopener noreferrer" className="aTag">Email</a>

            <SocialIcon network="github" style={{ height: 100, width: 100, margin: 20 }} />
            <a href="https://github.com/jerquanus"  target="_blank" rel="noopener noreferrer" className="aTag">GitHub</a>
        
            <SocialIcon network="linkedin" style={{ height: 100, width: 100, margin: 20 }}/>
            <a href="https://www.linkedin.com/in/jerquanus-swann-301506b1/"  target="_blank" rel="noopener noreferrer" className="aTag">Linkedin</a>
        </div>
    )
};

export default Contact;

