import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import App from "../src/App";
import About from "./About";
import Admin from "./components/Admin";

function Home() {
  return (
    <div>
      <Router>
        <Navbar></Navbar>
        <Routes>
          <Route path="/App" element={<App></App>}></Route>
          <Route path="/admin" element={<Admin></Admin>}></Route>
          <Route path="/About" element={<About></About>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default Home;
