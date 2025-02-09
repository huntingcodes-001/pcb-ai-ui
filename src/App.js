// src/App.js  
import React from 'react';  
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';  
import LandingPage from './pages/LandingPage';  
import GeneratePCB from './pages/GeneratePCB';  
import ImprovePCB from './pages/ImprovePCB';  
import About from './pages/About';  
import Contact from './pages/Contact';  
import Login from './pages/Login';  
import Signup from './pages/Signup';  
import Navbar from './components/Navbar';  
import Footer from './components/Footer';  
import { SnackbarProvider } from './components/SnackbarContext';  
import { AuthProvider, useAuth } from './contexts/AuthContext';  
import { auth } from './firebase';  
  
function PrivateRoute({ children }) {  
  const { currentUser } = useAuth();  
  return currentUser ? children : <Navigate to="/login" />;  
}  
  
function App({ colorMode }) {  
  return (  
    <Router>  
      <AuthProvider>  
        <SnackbarProvider>  
          <Navbar colorMode={colorMode} />  
          <Routes>  
            <Route  
              path="/"  
              element={  
                <PrivateRoute>  
                  <LandingPage />  
                </PrivateRoute>  
              }  
            />  
            <Route  
              path="/generate-pcb"  
              element={  
                <PrivateRoute>  
                  <GeneratePCB />  
                </PrivateRoute>  
              }  
            />  
            <Route  
              path="/improve-pcb"  
              element={  
                <PrivateRoute>  
                  <ImprovePCB />  
                </PrivateRoute>  
              }  
            />  
            <Route path="/about" element={<About />} />  
            <Route path="/contact" element={<Contact />} />  
            <Route path="/login" element={<Login />} />  
            <Route path="/signup" element={<Signup />} />  
          </Routes>  
          <Footer />  
        </SnackbarProvider>  
      </AuthProvider>  
    </Router>  
  );  
}  
  
export default App;  