import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App';
import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

firebase.initializeApp({
    apiKey: "AIzaSyB-wi7xZXp3Pwm9AvIkU8ZY8EovUWuqxXk",
    authDomain: "bdsl-ecab9.firebaseapp.com",
    projectId: "bdsl-ecab9",
    storageBucket: "bdsl-ecab9.appspot.com",
    messagingSenderId: "607276073329",
    appId: "1:607276073329:web:3d48d0bf9d9d10d880b6d0",
    measurementId: "G-2Q9QWY77JL"
});
const firestore=firebase.firestore();
export const Context=createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Context.Provider value={
          {firebase, firestore}
      }>
      <BrowserRouter>

          <App />

      </BrowserRouter>
      </Context.Provider>
  </React.StrictMode>
);

