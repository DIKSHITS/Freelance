import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Productsredirect from './Components/Productsredirect';
import AboutUs from './Components/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
       <Route path="/productsredirect" element={<Productsredirect />} />
        <Route path="/about" element={<AboutUs />} />
        
        {/* Add more Route components here for additional pages */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
