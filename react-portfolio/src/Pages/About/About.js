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
            
                <div style={{color:'white', height: '300px', width: '100%'}} className="talking">

                    <p>
                        If you're here - well that obviously means you wanted to know a little more about me.
                        The name is Swann - Jerquanus Swann but I usually respond to Jerry or Swann. I'm a pisces
                        sun and a tarus moon, I love long walks on th... wait wrong site.
                    </p>
                    
                    <p>
                        But seriously, I come from a small country town in North Carolina called Johnsonville. It's
                        locacted in between Sanford
                        and Fayetteville. I have well over a decade of retail/grocery store experience with 
                        a little management experience sprinkled in there as well. 

                        I've recently completed the University of North Carolina at Charlotte's 6 month intensive "Coding Bootcamp". 
                        This is a huge industry change for me but I'm not afraid to work my way from the bottom to get to where I want to be.
                        I'm a creative person and I love watching my visions come to life.
                    </p>
                    <p>
                        I'm currently engaged to my beautiful fiance Niara and we're set to get married this September.
                        My biggest hobbies in my down time are music production and watching anime. 
                    
                    </p>

                </div>



           </div>


        </div>
    )
    

    
}



export default About;