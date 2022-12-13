import React, { useState } from "react";
import styled from "styled-components";

import BookingSchedule from "../components/dashboard/BookingSchedule";
import Graphic from "../components/dashboard/Graphic";

import { FlexCol } from "../styles";

import profile from "../../assets/img/Francisco_Fuertes_Valls.png";
import { ReactComponent as Bed } from "../../assets/svg/bed.svg";
import { ReactComponent as Schedule } from "../../assets/svg/booking.svg";
import { ReactComponent as CheckIn } from "../../assets/svg/checkin.svg";
import { ReactComponent as CheckOut } from "../../assets/svg/checkout.svg";
import { ReactComponent as RightArrow } from "../../assets/svg/arrow-right.svg";
import { ReactComponent as Accept} from "../../assets/svg/accept.svg";
import { ReactComponent as Deny} from "../../assets/svg/deny.svg";
import Reviews from "./Reviews";
import { NavLink } from "react-router-dom";


const Dashboard = () => {
  return (
    <main className="dashboard bg-white dark:bg-black dark:text-white">
      {/* FILA DE DATAS */}
      {/* NEW BOOKING */}
      <section className="new-booking flex items-center justify-start gap-5 dark:bg-myBlack">
        <div className="bed flex h-12 w-12 items-center justify-center rounded bg-red-300">
          <Bed className="h-6 w-6" />
        </div>
        <FlexCol className="">
          <span>8,461</span>
          <h6>New Booking</h6>
        </FlexCol>
      </section>
      {/* SCHEDULE ROOM */}
      <section className="schedule-room flex items-center justify-start gap-5 dark:bg-myBlack">
        <div className="bed flex h-12 w-12 items-center justify-center rounded bg-myRed">
          <Schedule className="h-6 w-6" />
        </div>
        <FlexCol>
          <span>963</span>
          <h6>Schedule Room</h6>
        </FlexCol>
      </section>
      {/* CHECK IN */}
      <section className="check-in  flex items-center justify-start gap-5 dark:bg-myBlack">
        <div className="bed flex h-12 w-12 items-center justify-center rounded bg-red-300">
          <CheckIn className="h-6 w-6" />
        </div>
        <FlexCol>
          <span>753</span>
          <h6>Check In</h6>
        </FlexCol>
      </section>
      {/* CHECK OUT */}
      <section className="check-out  flex items-center justify-start gap-5 dark:bg-myBlack">
        <div className="bed flex h-12 w-12 items-center justify-center rounded bg-red-300">
          <CheckOut className="h-6 w-6" />
        </div>
        <FlexCol>
          <span>516</span>
          <h6>Check Out</h6>
        </FlexCol>
      </section>

      {/* RECENT BOOKING SCHEDULE */}
      <section className="booking-schedule dark:bg-myBlack">
        <h3 className="my-[5%]">Recent Booking Schedule</h3>
        <BookingSchedule />
        <hr className="my-[5%]" />
        {[0, 1, 2].map((item) => (
          <div key={item} className="list-event">
            <img src="" alt="" />
            <div className="data">
              <h5>nombre habitacion</h5>
              <div className="data-person">
                <img className="rounded-full" src="" alt="" />
                <h6>Nombre alquilado</h6>
                <span>Xmin ago</span>
              </div>
            </div>
            {/* DIAS OCUPADOS */}
            <span>X</span>
          </div>
        ))}
      </section>

      {/* RESERVATION STATUS */}
      <section className="reservation-status dark:bg-myBlack">
        <h3>Reservation Stats</h3>
        <Graphic />
      </section>
      {/* AVAILABLE ROOM TODAY */}
      <section className="available-room-today bg-myGreen text-white">
        <div className="data flex">
          <h6>Available Room Today</h6>
          <span>683</span>
        </div>
        <progress
          className=" w-full rounded-full"
          max="100"
          value="60"
        ></progress>
      </section>
      {/* SOLD OUT ROOM TODAY */}
      <section className="sold-room-today bg-myGreen text-white ">
        <div className="data flex">
          <h6>Sold Out Room Today</h6>
          <span>683</span>
        </div>
        <progress
          className="  w-full rounded-full"
          max="100"
          value="30"
        ></progress>
      </section>
      {/* DATA REPORT */}
      <section className="data-report dark:bg-myBlack">
        <div className="datas w-full flex flex-wrap gap-[5%] justify-center items-center text-center">
          <FlexCol>
            <span className="text-xl font-bold">569</span>
            <h6>Total Concierge</h6>
          </FlexCol>
          <FlexCol>
            <span className="text-xl font-bold">2342</span>
            <h6>Total Customer</h6>
          </FlexCol>
          <FlexCol>
            <span className="text-xl font-bold">992</span>
            <h6>Total Room</h6>
          </FlexCol>
          <FlexCol className="total-transaction">
            <span className="text-xl font-bold">76k</span>
            <h6>Total Transaction</h6>
          </FlexCol>
        </div>
        <div className="advice flex w-full place-content-center gap-[5%]">
          <FlexCol className="info my-[5%] w-3/4">
            <h4 className="text-lg">
              Let Travl Generate Your Annualy Report Easily
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
              officiis quos natus perspiciatis praesentium quae aspernatur
              repellat rerum corrupti qui enim pariatur numquam, error ipsum ex
              nemo reiciendis debitis id?
            </p>
          </FlexCol>
          <RightArrow className="h-12 w-12 self-center text-green-900" />
        </div>
      </section>

      {/* LATEST REVIEW BY CUSTOMERS */}
      <section className="latest-reviews mb-[5%] dark:bg-myBlack">
        <div className="first flex justify-between">
        <h2 className="mb-[2.5%] text-xl">Latest Review By Customers</h2>
        <NavLink to="/reviews">Show more</NavLink>
        </div>
        <div className="reviews flex gap-[5%]">
          {
            [1, 2, 3].map(item => <article>

              <p className="mb-[5%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, perspiciatis dignissimos dolor et autem veritatis</p>
              <div className="person flex items-center gap-[5%]">
                <img className="h-12 w-12 rounded object-cover" src={profile} alt="" />
                <div className="data flex flex-col place-items-center">
                  <h5 className="text-sm text-center">Kusnaidi Anderson</h5>
                  <span className="text-[12px]">4m ago</span>
                </div>
                <Accept className="w-6 h-6"/>
                <Deny className="w-6 h-6"/>
              </div>
            </article>)
          }
        </div>
      </section>

      
    </main>
  );
};

export default Dashboard;
