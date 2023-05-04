import React from 'react';
import { Navbar } from './components/Navbar';
import HomePage from './Pages/HomePage';
import About from './Pages/About';
import Experience from './Pages/Experience';
import Stays from './Pages/Stays';

import {HashRouter as Router, Routes, Route} from "react-router-dom";



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
        <Route path ="/" element={<HomePage />}/>
        <Route path ="/about" element={<About />}/>
        <Route path ="/experience" element={<Experience />}/>
        <Route path ="/stays" element={<Stays />}/>
        {/* <Route path ="/contact" element={<Contact />}/> */}
        {/* <Route path ="*" element={<NotFound />}/> */}
      </Routes>
    </Router>

    </>
  );
}

export default App;
