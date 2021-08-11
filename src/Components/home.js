import React, { useRef } from 'react';
import videoHome from '../images/title_2.mp4';
import Contact from './contact-form';
import inLogo from '../images/linkedin_icon.svg';
import vimeoLogo from '../images/vimeo_icon.svg';
import InstagramLogo from '../images/Instagram_icon.svg';
import githubLogo from '../images/github_icon.svg'

import './home.css';

const Home = () => {

    const bodyEndRef = useRef(null)

    const scrollToBottom = () => {
    bodyEndRef.current.scrollIntoView({ behavior: "smooth" })
  }


    return(
        <div className="home-body" >
            <div className="hello">   
                <video id="background-video" loop autoPlay muted >
                    <source src={videoHome} type="video/mp4" />    
                </video>
                <p className="greet">Shh! Knights, I bid you welcome to your new home. Let us ride to Camelot! Well, I didn't vote for you. On second thoughts, let's not go there. It is a silly place.</p>
            </div>


            <div className="contact" ref={bodyEndRef}>
                <button onClick={scrollToBottom} >Contact</button>
                <Contact/>
                <div className="social">
                    <p>also in</p>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com/in/juan-pablo-baez-4b592235/" target="_blank"  rel="noreferrer" ><img className="social-icon" src={inLogo} alt="linkendin logo"/></a>
                        <a href="https://github.com/JuanPabloBaez" target="_blank"  rel="noreferrer" ><img className="social-icon" src={githubLogo} alt="github logo"/></a>
                        <a href="https://vimeo.com/jpbaez" target="_blank"  rel="noreferrer" ><img className="social-icon" src={vimeoLogo} alt="vimeo logo"/></a>
                        <a href="https://www.instagram.com/jp_baez/" target="_blank"  rel="noreferrer" ><img className="social-icon" src={InstagramLogo} alt="instagram logo"/></a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Home;