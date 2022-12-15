import React, { useEffect, useState, createContext, useContext } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  createBrowserRouter,
  Navigate,
} from "react-router-dom";
import "../App.css";
import "./layout/dashboard.css";

import MyContext from "./components/Context";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import GuestDetails from "./pages/GuestDetails";
import Reviews from "./pages/Reviews";
import LogIn from "./pages/LogIn";
import PrivateRoute from "./components/PrivateRoute";

const App:any = () => {

  const [login, setLogin] = useState(
    localStorage.getItem("login") ? localStorage.getItem("login") : "false"
  );
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
 const changeTheme = () => {
  localStorage.theme = darkMode ? "light" : "dark";
  setDarkMode(!darkMode);
  if (darkMode) {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
};

  //console.log(login, MyContext)
  useEffect(() => {
    
  }, [login, MyContext]);

 

  const headers = (
    <>
      <Header />
      <Sidebar darkMode={darkMode} changeTheme={changeTheme} />
    </>
  );

  interface loginProp {
    login: string
  }

  return (
    <>
      {
        // @ts-ignore}
        <MyContext.Provider value={{ login: login }}>
          {login == "true" && headers}

          <Routes >
            {login == "true" ? (
              <>
                <Route index path="/*" element={<Dashboard />} />
                <Route
                  path="/DashBoard_Hotel-Miranda"
                  element={<Dashboard />}
                />
                <Route path="/guestdetails" element={<GuestDetails />} />
                <Route path="/reviews" element={<Reviews />} />
              </>
            ) : (
              // @ts-ignore
              <Route path="/*" element={<LogIn login={login}/>} />
            )}
          </Routes>
        </MyContext.Provider>
      }
    </>
  );
}

export default App;
