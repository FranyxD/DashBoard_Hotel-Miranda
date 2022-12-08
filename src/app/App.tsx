import React from 'react';
import {Routes, Route} from "react-router-dom";
import '../App.css';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Dashboard/>
    </>
  );
}

export default App;
