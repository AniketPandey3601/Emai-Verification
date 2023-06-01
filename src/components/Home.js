import React from 'react'

import photo from "../Aniket-Pandey_passport.jpg";
import photo2 from "../email1.jpg";
import photo3 from "../emailimage.webp"

import Form from "../components/Form";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from 'react';





export default function Home(props) {
   useEffect(() => {
     AOS.init({
          offset: 120, // offset (in px) from the original trigger point
      delay: 700, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: 'ease-in'
     }
     );
   }, []);
  return (
    <div className="cont" data-aos="fade-up">
      <div
        className="first"
        // style={{ textAlign:"center", margin:50 ,borderStyle:"outset"}} >
        style={{
          backgroundColor:
            props.mode === "light" ? "GrayText" : "rgb(116, 130, 91)",
        }}
      >
        <h1>WELCOME TO MY FIRST REACT WEBSITE!</h1>
      </div>
      <div className="photo3">
        <img src={photo3} alt="" width="85%" />
        <div className="centered">
            <div className="upper">HEY! WELCOME THERE</div>
        
        </div>
      </div>
      <div className="center" data-aos="fade-right" data-aos-delay="1500">
        <img src={photo2} alt="EmailImage" width="170" height="170" />
      </div>
      <div className="container text-center">
        <Form
          heading="Enter your Email Below for Verification Purpose"
          mode={props.mode}
          loading={props.loading}
          validator={props.validator}
          setLoading={props.setLoading}
          setValidator={props.setValidator}
        />
      </div>

      <div
        className="card"
        data-aos="fade-up"
        style={{
          backgroundColor:
            props.mode === "light" ? "cornsilk" : "rgb(116, 130, 91)",
        }}
      >
        <div className="card-body">
          <h5 className="card-title">WHAT IT DOES?</h5>
          <div>
            <p className="card-text">
              <strong>
                It Simply Accepts your Email-Id and check whether a given Mail
                is valid or not.
              </strong>
            </p>
          </div>
        </div>
      </div>
      <div
        className="Bodypart"
        data-aos="fade-up"
        style={{
          backgroundColor:
            props.mode === "light" ? "grey" : "rgb(116, 130, 91)",
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
      </div>
    </div>
  );
}
