import React, { useState } from "react";
// import {
//   BrowserRouter,
//   Route,
//   Routes
// } from "react-router-dom";
import './App.css';
// import About from './components/About';
import Alert from './components/Alert';
import Form from "./components/Form";
import Navbar from './components/Navbar';


function App() {
  const [alert, setAlert]= useState(null);
  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
    type: type
    })
    setTimeout(() => {setAlert(null);},1500);
  }
  const [mode, setMode]= useState('light');
  const toggleMode= ()=>{
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor="#01082e";
      showAlert("Dark mode is Enabled", "success");
      document.title = "TextUtils Dark_mode"
    

    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      showAlert("Light mode is Enabled", "success");
      document.title = "TextUtils Light_mode"

    }
  }
  return (
  <>
  {/* <BrowserRouter> */}
<Navbar title="TextUtils" mode={mode} toggleMode={toggleMode}/>
<Alert alert={alert}/>
<div className="container my-3">
{/* <Routes>
          <Route exact path="/about"
            element={<About />}>
          </Route>
          <Route exact path="/" element={<Form heading="Enter text" mode={mode} showAlert={showAlert}/>}> 
          </Route>
        </Routes> */}
        <Form heading="Enter text to Analyze" mode={mode} showAlert={showAlert}/>
</div>
{/* </BrowserRouter> */}
</>
    );
}

export default App;
