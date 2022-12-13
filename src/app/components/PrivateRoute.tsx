import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, createBrowserRouter, Navigate } from "react-router-dom";

export function PrivateRoute() {

    // the user verification logic is up to your application
    // this is an example based on your code above 
        const [login, setLogin] = useState(false);
        if(!localStorage.getItem('rememberMe')) localStorage.setItem('rememberMe', 'true')
        const rememberMe = localStorage.getItem('rememberMe');
    
       if (rememberMe==='true') {
        return <Navigate to={'/home'} />;
        }
      else {
    // user not logged in, redirect to the Login page which is unprotected
        return <Navigate to={'/login'} />;
      }
    }