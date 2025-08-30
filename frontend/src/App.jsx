import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './Components/index';   // Capitalize component name
import Contact from './Components/Contact';
import Productsredirect from './Components/Productsredirect';
import AboutUs from './Components/about';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />   {/* Use <Index /> */}
        <Route path="/contact" element={<Contact />} />
        <Route path="/productsredirect" element={<Productsredirect />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
