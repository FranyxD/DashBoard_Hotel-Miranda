import React from "react";

import { Switch } from "@headlessui/react";

import { ReactComponent as Hotel } from "../../assets/svg/hotel.svg";
import { ReactComponent as Dashboard } from "../../assets/svg/dashboard.svg";
import { ReactComponent as Key } from "../../assets/svg/key.svg";
import { ReactComponent as Booking } from "../../assets/svg/booking.svg";
import { ReactComponent as Guest } from "../../assets/svg/guest.svg";
import { ReactComponent as Concierge } from "../../assets/svg/concierge.svg";
import profile from "../../assets/img/Francisco_Fuertes_Valls.png";
import { NavLink } from "react-router-dom";
import { SidebarProps } from "../interfaces";


const Sidebar = ({darkMode, changeTheme}:SidebarProps) => {
  return (
    <aside className="sidebar h-full py-[0.5%] shadow">
      {/* LOGO HOTE */}
      <div className="logo mb-[15%] flex items-center pl-[15%]">
        <Hotel className="logo__icono h-[55px] w-[40px]" />
        <div className="logo__title">
          <span className="logo__title__span font-bold">travl</span>
          <h5 className="logo__title__small block text-[8px]">
            Hotel Admin Dashboard
          </h5>
        </div>
      </div>
      {/* NAVIGATION BUTTONS */}
      <nav className=" block w-full">
        <ul className="flex w-full flex-col gap-y-8">
          <li className="flex w-full gap-[5%] pl-[15%] text-myGreen hover:rounded-l-sm hover:border-l-4  hover:border-red-500">
            <Dashboard className="h-6 w-6 fill-green-600" />
            <NavLink to="/">DashBoard</NavLink>
          </li>
          <li className="flex w-full gap-[5%] pl-[15%] text-myGreen hover:rounded-l-sm hover:border-l-4  hover:border-red-500">
            <Key className="h-6 w-6 fill-green-600" />
            <NavLink to="/guestdetails">Rooms</NavLink>
          </li>
          <li className="flex w-full gap-[5%] pl-[15%] text-myGreen hover:rounded-l-sm hover:border-l-4  hover:border-red-500">
            <Booking className="h-6 w-6 fill-green-600" />
            Bookings
          </li>
          <li className="flex w-full gap-[5%] pl-[15%] text-myGreen hover:rounded-l-sm hover:border-l-4  hover:border-red-500">
            <Guest className="h-6 w-6 fill-green-600" />
            Guest
          </li>
          <li className="flex w-full gap-[5%] pl-[15%] text-myGreen hover:rounded-l-sm hover:border-l-4  hover:border-red-500">
            <Concierge className="h-6 w-6 fill-green-600" />
            Concierge
          </li>
        </ul>
      </nav>
      {/* CONTACT US */}
      <div className="contact-us relative m-[15%] mt-[30%] flex flex-col items-center justify-center gap-[10%] rounded-lg p-[5%] shadow-lg">
        <img
          id="iconContactUS"
          className="absolute top-[-10px] h-12 w-12 rounded object-cover"
          src={profile}
          alt="icon contact us"
        />
        <span className="pt-10 text-center text-[16px]">William Johanson</span>
        <a className="mb-[5%] text-[8px]" href="">
          email@email.com
        </a>
        <button className="rounded bg-myGreen py-[5%] px-[15%] text-[14px] font-bold text-green-800">
          Contact Us
        </button>
      </div>
      {/* SWITCH THEME MODE */}
      <Switch
          checked={darkMode}
          onChange={changeTheme}
          className={`${
            darkMode ? 'bg-blue-600' : 'bg-gray-200'
          } relative inline-flex h-6 w-11 items-center rounded-full`}
        >
          <span
            className={`${
              darkMode ? 'translate-x-6' : 'translate-x-1'
            } inline-block h-4 w-4 transform rounded-full bg-white transition`}
          />
        </Switch>
      {/* COPYRIGHT */}
      <div className="bottom-siderbar text flex h-full flex-col place-items-center items-center px-[15%]">
        <span>
          <strong>Travi Hotel Admin Dashboard</strong>
        </span>
        <small>@2020 All Right Reserved</small>
      </div>
    </aside>
  );
};

export default Sidebar;
