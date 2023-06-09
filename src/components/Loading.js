import React from "react";
import loader from "../Spinner.gif";
import GoToTop from "../components/gotop";

export default function Loading(props) {

  
  return (
    <>
      <div
        className="text-center"
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "100px",
        }}
      >
        <img src={loader} alt="loading" width="65" height="65" />
      </div>
      <div
        style={{
          textAlign: "center",
          fontWeight: "bold",
        }}
      >
        <h1 style={{ color: props.mode === "light" ? "black" : "white" }}>
          {" "}
          RESULT IS LOADING!..
        </h1>
      </div>
      <GoToTop/>
      
    </>
  );
}



      // <div
      // 
      // >
      //   {" "}
      //  
      // </div>;