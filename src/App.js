// src/App.js  
import React from 'react';  
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import LandingPage from './pages/LandingPage';  
import GeneratePCB from './pages/GeneratePCB';  
import ImprovePCB from './pages/ImprovePCB';  
import Navbar from './components/Navbar';  
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
        </Routes>  
      </SnackbarProvider>  
    </Router>  
  );  
}  

export default App;  