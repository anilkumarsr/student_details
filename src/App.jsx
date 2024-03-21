
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import Loginform from './Components/Loginform';

// import Form from './Components/Form';

import {BrowserRouter, Route,Routes} from "react-router-dom"
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import AddUser from './Components/Users/AddUser';
import Studentdetails from './Components/Studentdetails';
import EditUser from './Components/Users/EditUser';
import ViewUser from './Components/Users/ViewUser';
//  import City from './Components/City';

function App() {
  return (
    <>
    {/* <City/> */}
    <BrowserRouter>
    <Navbar/>
    {/* <Home/> */}
    <Routes>
        {/* <Route path="/" element = {<StateEx />} /> */}
        <Route exact path="/home" element={<Home/>}/>
        <Route exact path="/loginform" element={<Loginform/>}/>
        <Route exact path="/studentdetails" element={<Studentdetails/>}/>

        <Route exact path="/adduser" element={<AddUser/>}/>
        <Route exact path="/edituser/:id" element={<EditUser/>}/>
        <Route exact path="/viewuser/:id" element={<ViewUser/>}/>

    </Routes>
    </BrowserRouter>


    
   

      
      <br /> <br />
     
       

    </>
  );
}

export default App;

