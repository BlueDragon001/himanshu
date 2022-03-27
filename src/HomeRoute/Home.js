import React, {useEffect} from "react";
import '../App.scss'
import kitty from '../kitty.png'
import Bounce from 'react-reveal/Bounce'
import ReactDOM from 'react-dom'

function Home() {
    
    useEffect(()=>{
        document.title="Home";
        const element = document.getElementById("nav1");
        ReactDOM.findDOMNode(element).className = "navlistClicked"
        return () =>{
            ReactDOM.findDOMNode(element).className ="navlist"
        }
    });
    return (
        <Bounce left>
             <section className="Home" role="Home Page">
            <div className="Text_Section">
                <p className="static_text" >Hey there, I am</p>
                <DynamicText></DynamicText>
            </div>
            <div className="buttons_wrapper">
                <button id="aboutBtn">About Me</button>
                <img src={kitty}></img>

                <button id="aboutBtn">Hire Me</button>
            </div>

        </section>
        </Bounce>
       

    );
}

function DynamicText() {
    return (
        <div className="dynamic_text">
            <div className="dynamic_text_wrapper" >
                <div className="text_Wrapper">
                    <p>H</p>
                    <p>i</p>
                    <p>m</p>
                    <p>a</p>
                    <p>n</p>
                    <p>s</p>
                    <p>h</p>
                    <p>u</p>
                </div>
                <div className="text_Wrapper">

                    <p>W</p>
                    <p>e</p>
                    <p>b</p>
                    <p>D</p>
                    <p>e</p>
                    <p>v</p>
                    <p>e</p>
                    <p>l</p>
                    <p>o</p>
                    <p>p</p>
                    <p>e</p>
                    <p>r</p>
                </div>
                <div className="text_Wrapper">
                    <p>G</p>
                    <p>a</p>
                    <p>m</p>
                    <p>e</p>
                    <p>D</p>
                    <p>e</p>
                    <p>v</p>
                    <p>e</p>
                    <p>l</p>
                    <p>o</p>
                    <p>p</p>
                    <p>e</p>
                    <p>r</p>
                </div>
                <div className="text_Wrapper">
                    <p>A</p>
                    <p>n</p>
                    <p>d</p>
                    <p>r</p>
                    <p>o</p>
                    <p>i</p>
                    <p>d</p>
                    <p>D</p>
                    <p>e</p>
                    <p>v</p>
                    <p>e</p>
                    <p>l</p>
                    <p>o</p>
                    <p>p</p>
                    <p>e</p>
                    <p>r</p>
                </div>
                
            </div>

        </div>
    );
}

export default Home;