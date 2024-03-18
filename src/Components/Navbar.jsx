import React from 'react'

import { Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <>
        <ul>

            <li><Link to="/home">HOME</Link></li>
            <li><Link to="/enquiryform">ENQUIRY FORM</Link></li>
            <li><Link to="/studentdetails">STUDENT DETAILS</Link></li>
            <li><Link to="/joined">JOINED</Link></li>
            <li><Link to="/notjoined">NOT JOINED</Link></li>
            <li><Link to="/logout">LOG OUT</Link></li>
        </ul>
    </>

  )
}

export default Navbar
