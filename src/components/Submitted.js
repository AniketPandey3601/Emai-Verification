import React from "react";

import Loading from "../components/Loading";
import send from "../emailver.gif"
import cross from "../cross.gif"




export default function Submitted(props) {
  
  if (props.loading) {
    return (
      <div className="Loadingbody" >
        <Loading mode={props.mode}/>
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
        <div>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">S. No.</th>
                <th scope="col">Data</th>
                <th scope="col">Response</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Is Delieverable </td>
                <td>{props.validator.mail_deliverable ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Is Reachable</td>
                <td> {props.validator.reachable ? "Yes" : "No"}</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Username</td>
                <td>{props.validator.username}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      
    </>
  );
}




  // /</>* <div className="card-body">
  //         <h3>
  //           Is Delieverable - {props.validator.mail_deliverable ? "Yes" : "No"}
  //         </h3>
  //         <h3>Is Reachable - {props.validator.reachable ? "Yes" : "No"}</h3>
  //         <h3>Username - {props.validator.username}</h3>
  //       </div>
        
  //     </div> */
