import React, { useEffect } from 'react';
import { Bounce } from 'react-reveal';
import '../WorksRoute/Works.scss';
import ReactDOM from "react-dom"
import { initializeApp } from 'firebase/app';
import { getDatabase, ref, onValue } from 'firebase/database';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const firebaseConfig = {
  apiKey: "AIzaSyBYqV6wLfi3sTNQzD-98HpgVHc_y4fz2uY",
  authDomain: "devhimasnhu.firebaseapp.com",
  projectId: "devhimasnhu",
  storageBucket: "devhimasnhu.appspot.com",
  messagingSenderId: "253127598305",
  appId: "1:253127598305:web:ab293b6e284963f99f17a0",
  measurementId: "G-L2SDWV9QTZ"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const databaseRef = ref(database, "/imageurl");

var imageList = []
onValue(databaseRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childData = childSnapshot.val();
    imageList.push(childData);
  });
}, {
  onlyOnce: true
});

function MyWorks() {
  useEffect(() => {
    const element = document.getElementById("nav2");
    ReactDOM.findDOMNode(element).className = "navlistClicked";
    document.title="My Works"
    return () => {
      ReactDOM.findDOMNode(element).className = "navlist"
    }


  });

  
  return (
    <Bounce left>
      <Carousel infiniteLoop autoPlay>
        {imageList.map((image, index) =>
          <div key={index} className="image">
            <img src={image} />
          </div>
          
        )}
      </Carousel>
    </Bounce>
  );

}




export default MyWorks;