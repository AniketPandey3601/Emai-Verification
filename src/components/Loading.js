import React from "react";
import loader from "../Spinner.gif";

export default function Loading() {
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
        <img src={loader} alt="loading" width="50" height="50" />
      </div>

      <div
        className="loadtext"
        style={{ textAlign: "center", fontWeight: "bold", fontSize: "50px" }}
      >
        {" "}
        RESULT IS LOADING!..
      </div>
    </>
  );
}
