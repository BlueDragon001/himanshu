import '../AboutMe/AboutStyle.scss';
import React, { useEffect } from 'react';
import { Bounce } from 'react-reveal';
import ReactDOM from "react-dom";
import twitter from "../imageSrc/twitter.png"


function AboutMe() {


    useEffect(() => {
        const element = document.getElementById("nav3");
        document.title = "About me";
        ReactDOM.findDOMNode(element).className = "navlistClicked"
        return () => {
            ReactDOM.findDOMNode(element).className = "navlist"
        }
    });
    return (
        <Bounce left>
            <section className='AboutSection'>
                <div className='about_wrapper'>
                    <div className='contact_form'>
                        <h3>Contact Me</h3>
                        <input type={"text"} placeholder={"Your name"} required />
                        <input type={"email"} placeholder={"Your Email"} required />
                        <textarea className='message_holder' type={"Message"} placeholder={"Your Message"}></textarea>
                        <div className='btnWrapper'>
                            <button > Send  </button>
                        </div>

                    </div>
                    <div className='about_me'>
                        <h3>About Me</h3>
                        <div className='textLinks'><p>Hi, I am Himanshu. Nice to meet you. Are you looking for someone to enhance or build your website,
                             make a video game for both phones and Desktop or perhaps build a native android application? Then, you're in the right place. 
                             I'll build you a fully responsive WordPress/ React / HTML CSS and JavaScript website integrated with Google Adsense. 
                             I can transform your website into an android application or 
                             android application into websites or build you a native android application. You can check out my works on GitHub.
                             If you have any queries or work contact me on the following email.</p>
                            <div className="mylinks">
                                <p>Email: himanshukrishnay12@gmail.com</p>
                            </div>
                        </div>
                        
                        <ul className='socialLinks'>
                            <li className='github'>
                                <a href='https://github.com/BlueDragon001' target='_blank'>
                                    <img src='https://img.icons8.com/glyph-neue/64/000000/github.png' alt='Github Link' />
                                </a>

                            </li>
                            <li className='twitter'>
                                <a href='https://twitter.com/Himansh56965342' target='_blank'>
                                    <img src={twitter} alt='Twitter Link' />
                                </a>

                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        </Bounce>
    );
}

export default AboutMe;