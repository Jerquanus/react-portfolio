import React from "react";
import "./style.css";
import swann from "../../Assets/images/sunswann.jpg";


function About (){
    return(
        <div className="container">   
           <div className="grid"> 
                <div> 
                    <img className="pic" src = {swann} alt="Jerquanus"  />
                </div>
            
                <div style={{color:'white'}} className="talking">

                    <p>
                        Hey, I'm Jerquanus (aka Jerry) and if you're here - well that obviously means you wanted to know a little more about who I am.
                        I'm a pisces sun and a tarus moon, I love long walks on th... wait wrong site. But seriously, I come from a small country 
                        town in North Carolina called Johnsonville. It's locacted in between Sanford and Fayetteville.
                    </p>
        
                    <p>
                        I have well over a decade of retail/grocery store experience with 
                        a little management experience sprinkled in there as well. 

                        I've recently completed the University of North Carolina at Charlotte's 6 month intensive "Coding Bootcamp" - where I concentrated 
                        on becoming a fullstack web developer. 
                        This is a huge industry change for me but I'm not afraid to work my way from the bottom to get to where I want to be.
                        I'm a creative person and I love watching my visions come to life. 
                    </p>

                    <p>
                        I am also currently engaged to my gorgeous fiance Niara - we're set to get married this September.
                    </p>
                    
                </div>
           </div>
        </div>
    )
    

    
}



export default About;