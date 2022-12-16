import React, { useState } from "react";
import Tabs from "./Tabs";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from "../modules";
import { FlexCol } from "../styles";

const guests = [
  {
    id: 1,
    check: false,
    image: "https://www.hazunaweb.com/imagenes/prueba.jpg",
    nameGuest: "someone",
    orderDate: "fecha pedido",
    CheckIn: "dia entrada",
    CheckOut: "dia salida",
    specialRequest: "peticion especial",
    roomType: "Deluxe A - 02",
    status: "Refund"
  },
  {
    id: 2,
    check: false,
    image: "https://www.hazunaweb.com/imagenes/prueba.jpg",
    nameGuest: "someone",
    orderDate: "fecha pedido",
    CheckIn: "dia entrada",
    CheckOut: "dia salida",
    specialRequest: "peticion especial",
    roomType: "Deluxe A - 02",
    status: "Booked"
  },
  {
    id: 3,
    check: false,
    image: "https://www.hazunaweb.com/imagenes/prueba.jpg",
    nameGuest: "someone",
    orderDate: "fecha pedido",
    CheckIn: "dia entrada",
    CheckOut: "dia salida",
    specialRequest: "peticion especial",
    roomType: "Deluxe A - 02",
    status: "Pending"
  },
  {
    id: 4,
    check: false,
    image: "https://www.hazunaweb.com/imagenes/prueba.jpg",
    nameGuest: "someone",
    orderDate: "fecha pedido",
    CheckIn: "dia entrada",
    CheckOut: "dia salida",
    specialRequest: "peticion especial",
    roomType: "Deluxe A - 02",
    status: "Cancelled"
  },
];

const GuestList = () => {
  const [guestList, setGuestList] = useState(guests);

  return (
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

        setGuestList((prevReviews) =>
          reorder(prevReviews, source.index, destination.index)
        );
        console.log({ result });
      }}
    >
      <table className="reviews w-full rounded bg-myBlack text-left">
        <thead className="head w-ful align-top">
          <tr>
            <th>
              <input type="checkbox" className="scale-150" />
            </th>
            <th>Guest</th>
            <th>Order Date</th>
            <th>Check In </th>
            <th>Check Out</th>
            <th>Special Request</th>
            <th>Room Type</th>
            <th>Status</th>
          </tr>
        </thead>

        <Droppable droppableId="tasks">
          {(droppableProvided) => (
            <tbody
              {...droppableProvided.droppableProps}
              ref={droppableProvided.innerRef}
              className="task-container"
            >
              {guestList.map((guest, index) => (
                <Draggable
                  key={guest.id}
                  draggableId={String(guest.id)}
                  index={index}
                >
                  {(draggableProvided) => (
                    <tr
                      {...draggableProvided.draggableProps}
                      ref={draggableProvided.innerRef}
                      {...draggableProvided.dragHandleProps}
                      className="task-item align-top"
                    >
                        {/* CHECKBOX */}
                      <td className="w-[5%]">
                        <input className="scale-150" type="checkbox" />
                      </td>
                      {/* GUEST */}
                      <td className="w-3/12">
                        <div className="info flex gap-x-5">
                          <img
                            className="w-12 rounded"
                            src={guest.image}
                            alt=""
                          />
                          <FlexCol>
                            <span>{guest.nameGuest}</span>
                            <span>{guest.id}</span>
                          </FlexCol>
                        </div>
                      </td>
                      {/* Order date */}
                      <td className="w-1/12">{guest.orderDate}</td>
                      {/* Check In */}
                      <td className="w-1/12">{guest.CheckIn}</td>
                      {/* Check Out */}
                      <td className="w-2/12">
                        {guest.CheckOut}
                      </td>
                      {/* Special Request */}
                      <td className="w-1/12"><button>{guest.specialRequest}</button></td>
                      {/* Room Type */}
                      <td className="w-[2%]">
                        {guest.roomType}
                      </td>
                      {/* Status */}
                      <td className="w-1/12">{guest.status}</td>
                      {/* Options */}
                      <td className="w-1/12">X</td>
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
  );
};

export default GuestList;
