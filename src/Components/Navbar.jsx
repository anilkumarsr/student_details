import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* Navbar brand */}
        <Link className="navbar-brand" to="/home">Your Brand</Link>

        {/* Navbar toggler button */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar links */}
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/home">HOME</Link>
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
              <Link className="nav-link" to="/loginform">LOGIN</Link>
            </li>
          </ul>
          {/* Add User button */}
          <form className="d-flex">
            <Link className="btn btn-outline-light" to="/adduser">Add User</Link>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
