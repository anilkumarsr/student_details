
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Loginform from './Components/Loginform';

// import Form from './Components/Form';

import {BrowserRouter, Route,Routes} from "react-router-dom"
import Navbar from './Components/Navbar';
import Form from './Components/Form';
import Home from './Components/Home';
//  import City from './Components/City';

function App() {
  return (
    <>
    {/* <City/> */}
    <BrowserRouter>
    <Navbar/>
    <Routes>
        {/* <Route path="/" element = {<StateEx />} /> */}
        <Route path="/loginform" element = {<Loginform />} />
        
       
        
    </Routes>
    </BrowserRouter>


    
    <Form/>
    <br /> <br />

      <Loginform/>
      <br /> <br />
      <Home/>
       

    </>
  );
}

export default App;

