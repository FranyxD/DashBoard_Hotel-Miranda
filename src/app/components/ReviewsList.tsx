import React, { useState } from "react";
import { Tab } from '@headlessui/react'
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Table } from "../styles";
import { reorder } from "../utils/hooks";
import {ReactComponent as Start} from "../../assets/svg/star.svg";
import ReactPaginate from 'react-paginate';
import PaginatedItems from "./PaginatedItems";


const reviewsList = [
  {
    id: 1,
    check: false,
    date: "nov 8",
    customer: "someone",
    stars: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipis",
    action: null,
    text: "React.js",
  },
  {
    id: 2,
    check: false,
    date: "nov 8",
    customer: "someone",
    stars: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipis",
    action: null,
    text: "React.js",
  },
  {
    id: 3,
    check: false,
    date: "nov 8",
    customer: "someone",
    stars: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor sit amet, consectetur adipis",
    action: null,
    text: "React.js",
  },
  {
    id: 4,
    check: false,
    date: "nov 8",
    customer: "someone",
    stars: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipis",
    action: null,
    text: "React.js",
  },
  {
    id: 5,
    check: false,
    date: "nov 8",
    customer: "someone",
    stars: 5,
    comment: "Lorem ipsum dolor sit amet, consectetur adipis",
    action: null,
    text: "React.js",
  },
];

const ReviewsList = () => {
    const [reviews, setReviews] = useState(reviewsList);

  return (
    <>
    <DragDropContext
            onDragEnd={(result) => {
                  const { source, destination } = result;
                    if (!destination) {
                      return;
                    }
                    if (
                      source.index === destination.index &&
                      source.droppableId === destination.droppableId
                    ) {
                      return;
                    }

                    setReviews((prevReviews) =>
                      reorder(prevReviews, source.index, destination.index)
                    );
                console.log({result})
            }}
        >
            <table  className="reviews w-full bg-myBlack rounded text-left">
                <thead className="head align-top w-full">
                  <tr>
                  <th><input type="checkbox" className="scale-150" /></th>
                  <th>Order_ID</th>
                  <th>Date</th>
                  <th>Customer</th>
                  <th>Commented</th>
                  <th>Action</th>
                  </tr>
                </thead>
                
                <Droppable droppableId="tasks">
                    {(droppableProvided) => (
                        <tbody
                            {...droppableProvided.droppableProps}
                            ref={droppableProvided.innerRef}
                            className="task-container"
                        >
                            {reviews.map((review, index) => (
                                <Draggable key={review.id} draggableId={String(review.id)} index={index}>
                                    {(draggableProvided) => (
                                        <tr
                                            {...draggableProvided.draggableProps}
                                            ref={draggableProvided.innerRef}
                                            {...draggableProvided.dragHandleProps}
                                            className="task-item align-top"
                                        >
                                            <td className="w-[5%]"><input className="scale-150" type="checkbox" /></td>
                                            <td className="w-1/12">#{review.id}</td>
                                            <td className="w-2/12">{review.date}</td>
                                            <td className="w-1/12">{review.customer}</td>
                                            <td className="w-4/12">
                                              <div className="comment">
                                                <div className="stars flex gap-x-1 mb-2">
                                                  {review.stars && [...Array(review.stars)].map((star, index) => <Start className="w-4" key={index}/>)}
                                                </div>
                                              <p className="h-24 overflow-auto">{review.comment}</p>
                                              </div>
                                              </td>
                                            <td className="w-2/12">
                                            <div className="actions flex gap-x-5">
                                            <button className="text-myGreen">Publish</button>
                                            <button className="text-myRed">Archive</button>
                                            </div>
                                            </td>
                                        </tr>
                                    )}
                                </Draggable>
                            ))}
                            {droppableProvided.placeholder}
                        </tbody>
                    )}
                </Droppable>
                
            </table>
        </DragDropContext>
        {
          // @ts-ignore
          <PaginatedItems items={reviews} itemsPerPage={3}/>
        }
    </>
        
  );
};

export default ReviewsList;
