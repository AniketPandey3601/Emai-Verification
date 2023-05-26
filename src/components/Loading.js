import React from 'react'
import loader from'../Spinner.gif'


export default function Loading() {
  return (
    <div className="text-center">
      <img src={loader} alt="loading" width="50" height="50" />

       </div>

  );
}
