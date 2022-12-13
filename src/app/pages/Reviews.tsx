import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import '../layout/swiper.css';
// import required modules
import { Pagination } from "swiper";

import { ReactComponent as Accept} from "../../assets/svg/accept.svg";
import { ReactComponent as Deny} from "../../assets/svg/deny.svg";

const Reviews = () => {
  return (
    <main className="p-[2.5%] bg-white dark:bg-black dark:text-white">
      <section className="">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={false}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            [0,1, 2, 3, 4, 5].map(item => <SwiperSlide className="dark:bg-myBlack rounded">

              <article className="p-5">
              <p className="mb-[5%] text-left">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae, perspiciatis dignissimos dolor et autem veritatis</p>
              <div className="person flex items-center gap-[5%]">
                <img className="w-12 rounded " src={require("../../assets/img/profileExample.jpeg")} alt="" />
                <div className="data flex flex-col place-items-center">
                  <h5 className="text-sm text-center">Kusnaidi Anderson</h5>
                  <span className="text-[12px]">4m ago</span>
                </div>
                <Accept className="w-6 h-6"/>
                <Deny className="w-6 h-6"/>
              </div>
              </article>
            </SwiperSlide>)
          }
        </Swiper>
      </section>
    </main>
  );
};

export default Reviews;
