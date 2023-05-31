import './App.css';
import Navbar from './components/Navbar';

import Footer from "./components/Footer"
import './components/Style.scss'
import React from 'react';


import Submitted  from './components/Submitted';
import Home from "./components/Home"


import 
{ BrowserRouter as   Route,Routes, BrowserRouter } from "react-router-dom";







import { useState } from 'react';






function App() {
  let [validator, setValidator] = useState({});
  let [loading, setLoading] = useState(false);

  const[mode , setmode] = useState('light');
  const [msg, setmsg] = useState("Enable Dark Mode");
  
  const togglemode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      // document.body.style.backgroundColor = "grey";
      setmsg('Enable light mode')
      
    }
    else{
      setmode('light');
      
     setmsg('Enable dark mode')

    }
  }
   
  

  return (
    <BrowserRouter>
      <div   className="body" style={{ backgroundColor: mode === "light" ? "azure" : "grey" }}>
        <Navbar
          title="EMAIL-VERIFICATION"
          mode={mode}
          togglemode={togglemode}
          msg={msg}
         
        ></Navbar>
        <div
          className="body"
          // style={{ backgroundColor: mode === "light" ? "azure" : "grey" }}
        >
          <Routes>
            <Route
              path="/"
              element={
                <Home
                  mode={mode}
                  loading={loading}
                  validator={validator}
                  setLoading={setLoading}
                  setValidator={setValidator}
                ></Home>
              }
            ></Route>

            <Route
              path="/submitted"
              element={
                <Submitted loading={loading} validator={validator}></Submitted>
              }
            ></Route>
          </Routes>
        </div>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
