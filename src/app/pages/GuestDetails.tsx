import React from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/navigation";
import { Navigation } from "swiper";

import '../layout/guest-details.css';

import { FlexCol } from '../styles';

const GuestDetails = () => {
    
    return (
        <main className='GuestDetails p-[2.5%] bg-white dark:bg-black dark:text-white'>
            
                {/* DATOS INVITADO */}
           <section className='bg-white dark:bg-myBlack grid grid-cols-2 mb-[5%]'>
           <div className="left p-[5%]">
           <div className="contact-info mb-5 flex flex-wrap gap-5 w-full">
                <img className='w-32  rounded' src={require("../../assets/img/profileExample.jpeg")} alt="" />
                {/* DATA MIDDLE */}
                <FlexCol className="data justify-between">
                    <h2>Roberto Mansini</h2>
                    <span>ID 1234567890</span>
                    {/* TWO BUTTONS */}
                    <div className="buttons">
                        <button><img src="" alt="" />tel</button>
                        <button><img src="" alt="" />Send Message</button>
                    </div>
                </FlexCol>
                <div className="options">
                    X
                </div>
            </div>
            <div className="dates mb-5 flex justify-between">
                <FlexCol>
                    <span>Check in</span>
                    <span>October 30th, 2020 | 8:23 AM</span>
                </FlexCol>
                <FlexCol>
                    <span>Check Out</span>
                    <span>November 2th, 2020</span>
                </FlexCol>
            </div>
            <hr className='mb-5'/>
            <div className="info-room mb-5 w-3/4 flex gap-5 justify-between">
                <FlexCol>
                    <span>Room info</span>
                    <h3>Deluze Z - 002424</h3>
                </FlexCol>
                <FlexCol>
                    <span>Price</span>
                    <h3>$145 / night</h3>
                </FlexCol>
            </div>
            <p className='mb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia delectus quibusdam assumenda quam totam nihil est. Amet odio sit ea possimus fugiat repellendus, laborum, porro voluptate voluptates, ex harum eaque?</p>
            <span className='mb-5 block'>facilities</span>
                <div className="extras flex flex-wrap gap-2 mb-5">
                    {
                        [0, 1, 2].map(item => <div key={item} className='bg-green-200 text-myGreen  p-2 rounded'><img src="" alt="" />Some feature</div>)
                    }
                </div>
                <div className="important flex flex-wrap gap-[2.5%]">
                    {
                        [0, 1, 2].map(item => <div key={item} className='bg-green-200 text-myGreen rounded'>Some feature</div>)
                    }
                </div>
                
            </div>
            {/* SLIDER RIGHT */}
            <div className="right w-full h-[600px]">
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img className='object-cover' src={require("../../assets/img/exampleRoom.jpeg")} alt="" /></SwiperSlide>
                <SwiperSlide>Slide 2</SwiperSlide>
            </Swiper>
                    
            </div>
           </section>

           {/* Purchase History */}
           <section className='bg-white p-[2.5%] dark:bg-myBlack'> 
            <div className="beetween flex justify-between mb-5 ">
                <h3>Purchase History</h3>
                
                <select className='text-myGreen p-1 rounded-xl border-2 border-myGreen dark:bg-myBlack ' name="order" id="orderBy">
                    <option selected value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                </select>
            </div>
            {
                [0, 1].map(item => <div className="compras flex w-full justify-between items-center">
                    <img src="" alt="" />
                    <FlexCol>
                        <h4>Deluxe A-91234</h4>
                        <small>#0123120489</small>
                        <span>Oct 30th 2020 </span>
                        <time>09-21 AM</time>
                    </FlexCol>
                    <FlexCol>
                        <span>Check In</span>
                        <time>Nov 2th, 2020</time>
                        <time>9:46 PM</time>
                    </FlexCol>
                    <FlexCol>
                        <span>Price</span>
                        <span>$145 <small>/night</small></span>
                    </FlexCol>
                    <button>
                        View Notes
                    </button>
                    <div className="options">X</div>
                </div>)
            }
           </section>
           
        </main>
    )
}

export default GuestDetails;