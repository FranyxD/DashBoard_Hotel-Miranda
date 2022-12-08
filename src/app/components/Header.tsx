import React from "react";
import { ReactComponent as Search } from "../../assets/svg/search.svg";
import { ReactComponent as Hearth } from "../../assets/svg/hearth.svg";
import { ReactComponent as Mail } from "../../assets/svg/mail.svg";
import { ReactComponent as Bell } from "../../assets/svg/bell.svg";
import { ReactComponent as Chat } from "../../assets/svg/chat.svg";
import profile from "../../assets/img/Francisco_Fuertes_Valls.png";

const Header = () => {
  return (
    <header className="header  inline-flex h-auto w-full items-center gap-[5%] p-[1.5%] shadow">
      {/* ICONO BURGER */}
      <div className="burger flex flex-col gap-1">
        <div className="burger__line h-[2px] w-4 rounded-full bg-black"></div>
        <div className="burger__line h-[2px] w-4 rounded-full bg-black"></div>
        <div className="burger__line h-[2px] w-2 rounded-full bg-black"></div>
      </div>
      {/* ROOM LIST */}
      <div className="title inline-flex w-full justify-between">
        <h1>DashBoard</h1>
        <Search className="h-6 w-6" />
      </div>
      {/* ICONS OPTIONS*/}
      <div className="icons inline-flex w-full items-center justify-end gap-[5%]">
        <Hearth className="h-6 w-6"/><sup className="ml-[-20px] text-white py-2 px-1 rounded bg-red-600">2</sup>
        <Mail className="h-6 w-6" />
        <Bell className="h-6 w-6" />
        <Chat className="h-6 w-6" />
        <img
          id="icon-profile"
          className="h-8 w-8 object-cover rounded"
          src={profile}
          alt="icon profile"
        />
        <hr className="w-8 h-fit rotate-90"/>
        <select className="w-fit text-red-600" name="language" id="language">
            <option value="english">EN</option>
            <option value="spanish">ES</option>
        </select>
      </div>
    </header>
  );
};

export default Header;
