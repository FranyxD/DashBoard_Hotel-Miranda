import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, createBrowserRouter, Navigate } from "react-router-dom";

const PrivateRoute = ({ isAuthenticated, children }) => {
  if (isAuthenticated == 'false') {
    console.log(typeof isAuthenticated)
    return <Navigate to="/login" replace />
  }
  return children
}

export default PrivateRoute;