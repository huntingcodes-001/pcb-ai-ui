// src/App.js  
import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LandingPage from './pages/LandingPage';  
import GeneratePCB from './pages/GeneratePCB';  
import ImprovePCB from './pages/ImprovePCB';  
import About from './pages/About';  
import Contact from './pages/Contact';  
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import { SnackbarProvider } from './components/SnackbarContext';  
  
function App({ colorMode }) {  
  return (  
    <Router>  
      <SnackbarProvider>  
        <Navbar colorMode={colorMode} />  
        <Routes>  
          <Route path="/" element={<LandingPage />} />  
          <Route path="/generate-pcb" element={<GeneratePCB />} />  
          <Route path="/improve-pcb" element={<ImprovePCB />} />  
          <Route path="/about" element={<About />} />  
          <Route path="/contact" element={<Contact />} />  
        </Routes>  
        <Footer />  
      </SnackbarProvider>  
    </Router>  
  );  
}  
  
export default App;  