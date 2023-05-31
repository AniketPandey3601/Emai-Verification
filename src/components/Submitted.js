import React from "react";

import Loading from "../components/Loading";
import send from "../emailver.gif"
import cross from "../cross.gif"



export default function Submitted(props) {
  if (props.loading) {
    return (
      <div className="Loadingbody" style={{backgroundColor:"grey"}}>
        <Loading />
      </div>
    );
  }

  return (
    <>
      <div
        className="text-center"
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src={
            props.validator.mail_deliverable.toString() === "true"
              ? send
              : cross
          }
          alt="verified"
          height="150"
          width="150"
        />
      </div>
      <div
        className="card"
        data-aos="fade-up"
        style={{
          backgroundColor:
            props.validator.mail_deliverable.toString() === "true"
              ? "#afe6af"
              : "#e35e5e",
        }}
      >
        <div className="card-header">
          <h3>Email Verification Done</h3>
        </div>
        <div className="card-body">
          <h3>
            Is Delieverable - {props.validator.mail_deliverable ? "Yes" : "No"}
          </h3>
          <h3>Is Reachable - {props.validator.reachable ? "Yes" : "No"}</h3>
          <h3>Username - {props.validator.username}</h3>
        </div>
        ;
      </div>
    </>
  );
}

// <div className="card-body">
//   <h3>Is Devliverable {props.validator.mail_deliverable ? "Yes" : "No"}</h3>
//   <h3>Is Reachable {props.validator.reachable ? "Yes" : "No"}</h3>
//   <h3>Username {props.validator.username}</h3>
// </div>;
