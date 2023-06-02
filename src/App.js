import './App.css';
import Navbar from './components/Navbar';
import Footer from "./components/Footer"
import './components/Style.scss'
import React from 'react';


import Submitted  from './components/Submitted';
import Home from "./components/Home"


import {
  BrowserRouter as Router,
  Routes,
  Route,
  
} from "react-router-dom";







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
    <Router>
      <div
        className="body"
        style={{
          backgroundColor: mode === "light" ? "white" : "#373b3e",
        }}
      >
        <Navbar
          title="EMAIL-VERIFICATION"
          mode={mode}
          togglemode={togglemode}
          msg={msg}
        ></Navbar>
        <div
          className="body" id= "view"
          // style={{ backgroundColor: mode === "light" ? "azure" : "grey" }}
        >
          <Routes>
            <Route
              exact
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
              exact
              path="/submitted"
              element={
                <Submitted
                  loading={loading}
                  validator={validator}
                  mode={mode}
                ></Submitted>
              }
            ></Route>
          </Routes>
        </div>

        <Footer />
      </div>
      
    </Router>
  );
}

export default App;
