
import './App.css';
import React from 'react';
import Loginform from './Components/Loginform';

// import Form from './Components/Form';

import {BrowserRouter, Route,Routes} from "react-router-dom"
import Navbar from './Components/Navbar';
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

      <Loginform/>
      <br /> <br />
 
       

    </>
  );
}

export default App;

