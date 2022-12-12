import React, { useEffect, useState } from 'react';
import {Routes, Route} from "react-router-dom";
import '../App.css';
import './layout/dashboard.css';

import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from './pages/Dashboard';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      localStorage.theme = "dark";
      setDarkMode(!darkMode);
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.theme = "light";
      console.log("modo luz activado");
      setDarkMode(darkMode);
    }
  }, []);

  //onclick input function
  const changeTheme = () => {
    localStorage.theme = darkMode ? "light" : "dark";
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  };

  return (
    <>
    <Header/>
    <Sidebar darkMode={darkMode} changeTheme={changeTheme}/>
    <Dashboard/>
    </>
  );
}

export default App;
