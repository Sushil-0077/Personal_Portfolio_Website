import React from "react";
import { Routes, Route } from 'react-router-dom';
import Home from "./containers/home";
import About from "./containers/about";
import Contact from "./containers/contact";
import Education from "./containers/education";
import Resume from "./containers/resume";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/education' element={<Education />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    </div>
  );
}

export default App;
