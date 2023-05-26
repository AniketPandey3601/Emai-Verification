import React from 'react'

import Loading from '../components/Loading'







export default function Submitted(props) {
  
  if(props.loading){
 
  return (
    <div className='Loadingbody'>
      <Loading />
    </div>
  );
  }

  return (
    <>
      <div className="card">
        <div className="card-header">
          <h3>Email Verification Done</h3>
        </div>
        <div className="card-body">
          <h3>
            Is Delieverable {props.validator.mail_deliverable ? "Yes" : "No"}
          </h3>
          <h3>Is Reachable {props.validator.reachable ? "Yes" : "No"}</h3>
          <h3>Username {props.validator.username}</h3>
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
