import { useState } from "react";
import React from "react";
import axios from "axios";

import { Link } from "react-router-dom";

import validator from "validator";

export default function Form(props) {
  let token = "VBsMg7rGHRYiZI3Ly5u9s5WKuMjiVtt3O9atoTJI";
  let [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

 
 
  


     

  

  const validateEmail = (e) => {
    var email = e.target.value;
    setEmail(e.target.value);
    if (validator.isEmail(email)) {
      setMessage("Thank you");
    } else {
      setMessage("Please, enter valid Email!");
    }
  };

    

        function handleclick(e) {
          if (!validator.isEmail(email)) {
            e.preventDefault();
          }

          console.log("submit pressed");
          let data = new FormData();
          data.append("email", email);
          props.setLoading(true);
          axios
            .post("https://api.oyyi.xyz/v1/mail-verifier", data, {
              headers: {
                "Content-Type": "application/json",
                accept: "application/json",
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              props.setValidator(res.data.data);
              console.log(res.data.data);
             
              if (res.status === 200) {
                props.setResponse(true);
              
              }
            })
            .catch((e) => alert(e))
            .finally(() => props.setLoading(false));
        }
    
  
  return (
    <div
      className="container"
      data-aos="fade-left"
      data-aos-delay="1000"
      data-aos-easing="ease-in"
      style={{
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1 style={{ color: props.mode === "light" ? "black" : "white" , fontFamily: "Arial, Helvetica, sans-serif"}}>
        {props.heading}
      </h1>

      <div className="mb-3">
        <input
          type="email"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
            width: "60%",
          }}
          onChange={(e) => validateEmail(e)}
          id="fname"
        />

        <Link
          style={{ pointerEvents: validator.isEmail(email) ? "" : "none" }}
          to="/submitted"
        >
          <div className="mb-3"></div>

          <button
            type="button"
            disabled={!validator.isEmail(email)}
            className="btn btn-outline-success btn-lg"
            onClick={handleclick}
            data-aos="fade-left"
            data-aos-delay="900"
          >
            SUBMIT
          </button>
        </Link>

        <div>{message}</div>
      </div>
    </div>
  );
}
//  <Submitted loading={props.loading} validator={props.validator}></Submitted>;

//  loading={loading} validator={validator}>
