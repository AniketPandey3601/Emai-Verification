import './App.css';
import Navbar from './components/Navbar';
import Form from "./components/Form";
import Footer from "./components/Footer"
import './components/Style.scss'
import React from 'react';
import photo from './Aniket-Pandey_passport.jpg';
import photo2 from '../src/email1.jpg'




import { useState } from 'react';






function App() {
  const[mode , setmode] = useState('light');
  const [msg, setmsg] = useState("Enable Dark Mode");
  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = "grey";
      setmsg('Enable light mode')
      
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = "white";
     setmsg('Enable dark mode')

    }
  }
  

  return (
    <>
      <Navbar
        title="EMAIL-VERIFICATION"
        theme={mode}
        togglemode={togglemode}
        msg={msg}
      ></Navbar>

      <div
        className="first"
        // style={{ textAlign:"center", margin:50 ,borderStyle:"outset"}} >
        style={{
          backgroundColor: mode === "light" ? "GrayText" : "rgb(116, 130, 91)",
        }}
      >
        <h1>
          <span>WELCOME TO MY FIRST REACT WEBSITE!</span>
        </h1>
      </div>
      <div>
        <img
          src={photo2}
          alt="EmailImage"
          width="170"
          height="170"
          style={{
            marginLeft: "45%",
            marginRight: "50%",
            marginTop: "10px",
            Color:
              mode === "light" ? "white" : "grey",
          }}
        />
      </div>
      <div className="container text-center">
        <Form
          heading="Enter your Email Below for Verification Purpose"
          theme={mode}
        />
      </div>
      <div
        class="card"
        style={{
          backgroundColor: mode === "light" ? "cornsilk" : "rgb(116, 130, 91)",
        }}
      >
        <div class="card-body">
          <h5 class="card-title">WHAT IT DOES?</h5>
          <div>
            <p class="card-text">
              <strong>
                It Simply Accepts your Email-Id and check whether a given Mail
                is valid or not.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <body
        className="Bodypart"
        style={{
          backgroundColor: mode === "light" ? "grey" : "rgb(116, 130, 91)",
        }}
      >
        <h4 className="divtag1">ABOUT DEVELOPER</h4>
        <div className="divtag2">
          <strong>
            I am a React JS Trainee in "MEEFIC" company which is a leading IT
            Service Provider.
          </strong>
        </div>
        <img
          className="divtag3"
          src={photo}
          alt="myimage"
          width="100"
          height="100"
        />
        <div className="divtag4">Aniket Pandey - React Developer</div>
      </body>

      <div>
        <Footer />
      </div>
    </>
  );
}

export default App;
