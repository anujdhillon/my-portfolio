import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import React from 'react'
import about from '../img/about.jpg';
function ImageSection(){
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt=""/>
            </div>
            <div className="about-info">
                <h4>Hey there, I am<span> Anuj</span></h4>
                <p className="about-text">
                    I am a mechanical engineering undergrad at <span>IIT Delhi</span> currently in my third year. After the pandemic, I got interested in software engineering and now have decided to pursue a career in it. Along with my Major, I am pursuing a minor in CSE and I am <span>actively looking for any internship opportunities</span>.<br/> In my free time, I like to do competitive programming, gaming and playing guitar. Oh! And I also own a meme account (Go follow <span><a href = "https://www.instagram.com/bhartiyamemebot.py" target="_blank" >@bhartiyamemebot.py</a></span>) :P 
                </p>
                
                <button className="btn"><a href = "https://drive.google.com/file/d/1bhL4r2I00iRskjFc80M3f9W9NVf6x0Rm/view?usp=sharing">Download CV</a></button>
            </div>
        </div>
        
    )
}
export default ImageSection;