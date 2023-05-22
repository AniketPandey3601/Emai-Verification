import { useState } from "react"
import React  from 'react'


export default function Form(props) {

  const handleclick = ()=>{

    console.log("SUBMIT WAS PRESSED.");
    alert("YOU PRESSED SUBMIT.")
  }
  const emailchange=()=>{

     var x = document.getElementById("fname");
     x.value = x.value.toUpperCase();
     
  }
  const [text, setText] = useState("enter text here");
  return (
    <div
      className="container"
      style={{
        color: props.theme === "light" ? "black" : "white",
      }}
    >
      <h1>{props.heading}</h1>

      <div class="mb-3">
        <input
          type="email"
          style={{
            backgroundColor: props.theme === "light" ? "white" : "grey",
            color: props.theme === "light" ? "black" : "white",
            width: "50%",
        }} onChange={emailchange} id="fname"
        />

        <div className="mb-3"></div>
        <button
          type="button"
          class="btn btn-outline-success btn-lg"
          onClick={handleclick}
        >
          SUBMIT
        </button>
      </div>
    </div>
  );
}

