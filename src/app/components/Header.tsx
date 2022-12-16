import React from "react";
import { ReactComponent as Search } from "../../assets/svg/search.svg";
import { ReactComponent as Hearth } from "../../assets/svg/hearth.svg";
import { ReactComponent as Mail } from "../../assets/svg/mail.svg";
import { ReactComponent as Bell } from "../../assets/svg/bell.svg";
import { ReactComponent as Chat } from "../../assets/svg/chat.svg";
import {ReactComponent as CheckOut} from "../../assets/svg/checkout.svg"
import profile from "../../assets/img/Francisco_Fuertes_Valls.png";
import { logOut } from "../utils/hooks";

const Header = () => {
  return (
    <header className="header bg-white  inline-flex h-auto w-full items-center gap-[5%] p-[1.5%] shadow">
      {/* ICONO BURGER */}
      <div className="burger flex flex-col gap-1">
        <div className="burger__line h-[2px] w-4 rounded-full bg-black"></div>
        <div className="burger__line h-[2px] w-4 rounded-full bg-black"></div>
        <div className="burger__line h-[2px] w-2 rounded-full bg-black"></div>
      </div>
      {/* ROOM LIST */}
      <div className="title inline-flex w-full justify-between">
        <h1>DashBoard</h1>
      </div>
      {/* ICONS OPTIONS*/}
      <div className="icons inline-flex w-full items-center justify-end gap-[5%]">
        <Mail className="h-6 w-6" /><sup className="ml-[-20px] text-white py-2 px-1 rounded bg-red-600">2</sup>
        <Bell className="h-6 w-6" />
        <CheckOut onClick={logOut} className="h-6 w-6"/>
      </div>
    </header>
  );
};

export default Header;
