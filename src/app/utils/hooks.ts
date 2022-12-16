import axios from "axios";
import * as React from 'react';


export const reorder = (list: any, startIndex: any, endIndex:any) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
  };


  export const logOut = () => {
    localStorage.setItem('login', String('false'));
    window.location.reload();
  }

  /**LOG OUT */
  export const getData = async (page:string = 'bookings') => {
    const {data} = await axios(`http://localhost:3010/${page}`);
    return data;
  }

