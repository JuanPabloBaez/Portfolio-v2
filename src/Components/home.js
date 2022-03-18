import React, { useState, useRef } from 'react';
import videoHome from '../images/title_2.mp4';

import inLogo from '../images/iconos/linkedin.png';
import mailLogo from '../images/iconos/email.png';
import InstagramLogo from '../images/iconos/instagram.png';
import githubLogo from '../images/iconos/github.png'



const Home = () => {

    const bodyEndRef = useRef(null);
    

    return(
        <div className="home-body"  >
            <div className="hello">   
               
                <div className="greet">
                    <p>I'm Juan Pablo,</p>
                    <div className="greet-icons"> 
                        
                        <svg id="i-code" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                            <path d="M10 9 L3 17 10 25 M22 9 L29 17 22 25 M18 7 L14 27" />
                        </svg>
                        web developer and </div>
                        <div className="greet-icons">    
                        <svg id="i-video" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
                            <path d="M22 13 L30 8 30 24 22 19 Z M2 8 L2 24 22 24 22 8 Z" />
                        </svg>
                        video producer
                    </div> 
                    <p>I also run  
                        <a href="http://beatkino.com/" target="_blank"  rel="noreferrer"> beatkino.com</a> <br/> On this site you can find a diverse selection of my work. <br/> I'm currently based in Berlin.
                    </p>  
                </div>
                <div className="social-icons">
                        <a href="https://vimeo.com/jpbaez" target="_blank"  rel="noreferrer" ><img className="social-icon" src={mailLogo} alt="vimeo logo"/></a>
                        <a href="https://www.linkedin.com/in/juan-pablo-baez-4b592235/" target="_blank"  rel="noreferrer" ><img className="social-icon" src={inLogo} alt="linkendin logo"/></a>
                        <a href="https://github.com/JuanPabloBaez" target="_blank"  rel="noreferrer" ><img className="social-icon" src={githubLogo} alt="github logo"/></a>
                        <a href="https://www.instagram.com/jp_baez/" target="_blank"  rel="noreferrer" ><img className="social-icon" src={InstagramLogo} alt="instagram logo"/></a>
                    </div>
            </div>
            <video id="background-video" autoPlay="autoplay" loop="loop" muted  playsInline >
                    <source src={videoHome} type="video/mp4" />    
            </video>
        </div>
        
    )
}

export default Home;