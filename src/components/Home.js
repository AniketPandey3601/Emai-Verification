import React from 'react'

import photo from "../Aniket-Pandey_passport.jpg";
import photo2 from "../email1.jpg";

import Form from "../components/Form";





export default function Home(props) {
  return (
    
      <div
        className="cont"
        style={{ backgroundColor: props.mode === "light" ? "azure" : "grey" }}
      >
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
        <div className="center">
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
