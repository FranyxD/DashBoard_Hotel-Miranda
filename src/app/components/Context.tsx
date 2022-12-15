import React, { useContext } from 'react';
// @ts-ignore
//console.log(localStorage.getItem('login'))
const MyContext = React.createContext({login: localStorage.getItem('login')});
export default MyContext;