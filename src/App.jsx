import React from 'react';
import './App.scss';
import '../src/HomeRoute/Home';
import { BrowserRouter as Router, Routes, Route,Link } from "react-router-dom";
import Home from '../src/HomeRoute/Home';
import MyWorks from './WorksRoute/MyWorks';
import Aboutme from './AboutMe/Aboutme';
import NoPage from './NoPage/NoPage';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage, ref } from "firebase/storage";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBYqV6wLfi3sTNQzD-98HpgVHc_y4fz2uY",
  authDomain: "devhimasnhu.firebaseapp.com",
  projectId: "devhimasnhu",
  storageBucket: "devhimasnhu.appspot.com", 
  messagingSenderId: "253127598305",
  appId: "1:253127598305:web:ab293b6e284963f99f17a0",
  measurementId: "G-L2SDWV9QTZ"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const storageRef = ref(storage);
const style = { textDecoration: "none" }



function App() {


  const style = {
    margin: "1rem", display: "flex", height: randomPosition(8, 2) + "rem", width: randomPosition(8, 2) + "rem", border: "3px solid red", borderRadius: "0.5rem",
    transform: "rotate(" + randomPosition(90, 2) + "deg) translateX(" + randomPosition(30, 2) + "rem)"
  };

  return (
    <section >
      
      <div className='background'>
        <div style={style}></div>
        <div style={style}></div>
        <div style={styleRandomizer(100, 8)}></div>
        <div style={styleRandomizer(100, 15)}></div>

        <div style={styleRandomizer(100, 2)}></div>
        <div style={styleRandomizer(100, 15)}></div>

        <div style={styleRandomizer(100, 2)}></div>

      </div>

      <Router>
        <Nav></Nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/myworks' element={<MyWorks />} />
          <Route path='/aboutme' element={<Aboutme />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
      </Router>

    </section>
  );
}

function Nav() {

  return (
      <ul className='nav_list' role="navigation">

          <Link style={style} to={"/"}>
              <li id="nav1" className="navlist" >Home</li>
          </Link>

          <Link style={style}  to={"/myworks"}>
              <li id="nav2" className="navlist" >My Works</li>
          </Link>
          <Link style={style}  to={"/aboutme"}>
              <li id="nav3" className="navlist" >About me</li>
          </Link>
      </ul>);
}





function randomPosition(maxValue, minValue) {
  let pos = Math.floor(Math.random() * (maxValue - minValue) + minValue);
  return pos;
}

function styleRandomizer(maxValue, minValue) {

  var triangleStyle = {
    margin: "2rem", marginLeft: randomPosition(maxValue, minValue) + "%", width: "0", height: "0",
    borderLeft: "1rem solid transparent", borderRight: "1rem solid transparent", borderTop: "1rem solid red"
  };
  return triangleStyle;
}

export default App;
