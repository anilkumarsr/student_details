import React from 'react'

import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <>




<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid navbar-brand">

  {/* <Link className="nav-link" aria-current="page" to="/navbar">Students Details</Link> */}

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
		<Link className="nav-link active" aria-current="page" to="/home">HOME</Link>
         
        </li>
        <li className="nav-item">
		<Link className="nav-link" to="/enquiryform">ENQUIRY FORM</Link>
          
        </li>
		<li className="nav-item">
		<Link className="nav-link" to="/studentdetails">STUDENT DETAILS</Link>
          
        </li>
		<li className="nav-item">
		<Link className="nav-link" to="/joined">JOINED</Link>
          
        </li>
		<li className="nav-item">
		<Link className="nav-link" to="/notjoined">NOT JOINED</Link>
          
        </li>
		<li className="nav-item">
		<Link className="nav-link" to="/logout">LOG OUT</Link>
          
        </li>
        
          
      </ul>
      <form className="d-flex" role="search">
        
       
        <button className="btn btn-outline-light">Add User</button>
      </form>
    </div>
  </div>
</nav>

    </>

    

  )
}

export default Navbar