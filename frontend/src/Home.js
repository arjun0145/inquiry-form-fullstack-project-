import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Navbar";
import { Admin } from "./Admin";
import App from '../src/App'
import About from './About';



function Home() {
  return (
    <div>
  
  <Router>
      <Navbar></Navbar>
<Routes>

  <Route path='/Admin' element={<Admin></Admin>}></Route>
  <Route path='/App' element={<App></App>}></Route>
  <Route path='/Admin' element={<Admin></Admin>}></Route>
  <Route path='/About' element={<About></About>}></Route>


</Routes>


      </Router>
    </div>
  )
}

export default Home
