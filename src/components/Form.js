import { useState } from "react"
import React  from 'react';
import axios from 'axios';
import Loading from "../components/Loading";
import {Link} from 'react-router-dom';
import Submitted from "../components/Submitted";







export default function Form(props) {
  

     let token = "VBsMg7rGHRYiZI3Ly5u9s5WKuMjiVtt3O9atoTJI";
     let [email, setEmail] = useState("");
    
     




     function emailchange(e) {
       setEmail(e.target.value);
     }

     function handleclick() {
       console.log("submit pressed")
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
         })
         .catch((e) => alert(e))
         .finally(() => props.setLoading(false));
     }
// //  const data = { email : "myfakemail@dummy.com" };


//   const handleclick = ()=>{

//     console.log("SUBMIT WAS PRESSED.");
//     alert("YOU PRESSED SUBMIT.");

  
     
//       Axios.post(url, data, config)
//        .then((response) => console.log(response.data))
//        .catch((error) => console.error(error));

   



  const [text, setText] = useState("enter text here");
  return (
    <div
      className="container"
      style={{
        color: props.mode === "light" ? "black" : "white",
      }}
    >
      <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
        {props.heading}
      </h1>

      <div className="mb-3">
        <input
          type="email"
          style={{
            backgroundColor: props.mode === "light" ? "white" : "grey",
            color: props.mode === "light" ? "black" : "white",
            width: "50%",
          }}
          onChange={emailchange}
          id="fname"
        />
        <Link
          to=
            "/submitted"
          
          
        >
          <div className="mb-3"></div>

          <button
            type="button"
            className="btn btn-outline-success btn-lg"
            onClick={handleclick}
          >
            SUBMIT
          </button>
        </Link>
       
      </div>
    </div>
  );
}
//  <Submitted loading={props.loading} validator={props.validator}></Submitted>;


//  loading={loading} validator={validator}>