// src/firebase.js  
import { initializeApp } from 'firebase/app';  
import { getAuth } from 'firebase/auth';  
  
const firebaseConfig = {  
  apiKey: "AIzaSyAyNH2oRrii3hRsU5FNIQj9dgdEZS3an-U", // Replace with your Firebase project's config  
  authDomain: "pcb-login.firebaseapp.com",  
  projectId: "pcb-login",  
  storageBucket: "pcb-login.firebasestorage.app",  
  messagingSenderId: "1:948670429527:web:de256d722a815ceefc6612",  
  appId: "YOUR_APP_ID",  
};  
  
// Initialize Firebase  
const app = initializeApp(firebaseConfig);  
  
// Initialize Firebase Authentication and get a reference to the service  
export const auth = getAuth(app);  