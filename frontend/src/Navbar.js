import React from 'react'
import './Navbar.css'
import { Admin } from './Admin'
import { Link } from 'react-router-dom'
import About from './About'

export default function Navbar() {


  
  return (

    <div>
      <div className="nav">
        <div id='logo'></div>
        <div className="ele"><h3 >
          <Link to='/App'>Home</Link></h3></div>
        <div className="ele"><h3>
          
          <Link to='/About'>About</Link></h3></div>
        <div className="ele"><h3>Contact</h3></div>
        <div className="ele"><h3>
         <Link to='/Admin'>Admin</Link></h3></div>
      </div>
      
    

    </div >

  )
}
