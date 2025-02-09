// src/contexts/AuthContext.js  
import React, { createContext, useContext, useEffect, useState } from 'react';  
import { auth } from '../firebase';  
import { onAuthStateChanged } from 'firebase/auth';  
  
const AuthContext = createContext();  
  
// Custom hook to use the AuthContext  
export function useAuth() {  
  return useContext(AuthContext);  
}  
  
// AuthProvider component to wrap around the app  
export function AuthProvider({ children }) {  
  const [currentUser, setCurrentUser] = useState(null);  
  const [loading, setLoading] = useState(true);  
  
  useEffect(() => {  
    // Listener for authentication state changes  
    const unsubscribe = onAuthStateChanged(auth, (user) => {  
      setCurrentUser(user);  
      setLoading(false);  
    });  
  
    // Cleanup subscription on unmount  
    return unsubscribe;  
  }, []);  
  
  const value = {  
    currentUser,  
  };  
  
  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>;  
}  