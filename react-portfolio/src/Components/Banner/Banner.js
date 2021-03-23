import React from "react";
import LongBanner from "../../Assets/images/swannheader.jpg"

import "./style.css"
function Banner () {
    return (
        <div >        
            <img src = {LongBanner} alt="face banner" className="banner-container" />
        </div>
    )
}

export default Banner;
