import React, { useCallback, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDrag, useDrop } from 'react-dnd'
import update from 'immutability-helper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "../layout/swiper.css";
// import required modules
import { Pagination } from "swiper";

import { ReactComponent as Accept } from "../../assets/svg/accept.svg";
import { ReactComponent as Deny } from "../../assets/svg/deny.svg";
import styled from "styled-components";
import ReviewsList from "../components/ReviewsList";

const style = {
  width: 400,
}

export interface Item {
  id: number
  text: string
}

export interface ContainerState {
  cards: Item[]
}

const Reviews = () => {
  
  const [cards, setCards] = useState([
    {
      id: 1,
      text: 'Write a cool JS library',
    },
    {
      id: 2,
      text: 'Make it generic enough',
    },
    {
      id: 3,
      text: 'Write README',
    },
    {
      id: 4,
      text: 'Create some examples',
    },
    {
      id: 5,
      text: 'Spam in Twitter and IRC to promote it (note that this element is taller than the others)',
    },
    {
      id: 6,
      text: '???',
    },
    {
      id: 7,
      text: 'PROFIT',
    },
  ])
  const moveCard = useCallback((dragIndex: number, hoverIndex: number) => {
    setCards((prevCards: Item[]) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex] as Item],
        ],
      }),
    )
  }, [])

  const renderCard = useCallback(
    (card: { id: number; text: string }, index: number) => {
      return (
        <ReviewsList
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      )
    },
    [],
  )

  return (
    <main className="bg-white p-[2.5%] dark:bg-black dark:text-white">
      <section className="">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          centeredSlides={false}
          modules={[Pagination]}
          className="mySwiper"
        >
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <SwiperSlide className="rounded dark:bg-myBlack">
              <article className="p-5">
                <p className="mb-[5%] text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae, perspiciatis dignissimos dolor et autem veritatis
                </p>
                <div className="person flex items-center gap-[5%]">
                  <img
                    className="w-12 rounded "
                    src={require("../../assets/img/profileExample.jpeg")}
                    alt=""
                  />
                  <div className="data flex flex-col place-items-center">
                    <h5 className="text-center text-sm">Kusnaidi Anderson</h5>
                    <span className="text-[12px]">4m ago</span>
                  </div>
                  <Accept className="h-6 w-6" />
                  <Deny className="h-6 w-6" />
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
    </main>
  );
};

export default Reviews;
