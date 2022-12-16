import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from './ReviewsList';
import { FlexCol } from '../styles';

const guests = [
    {
        id: 1,
        check: false,
        image: 'https://www.hazunaweb.com/imagenes/prueba.jpg',
        nameRoom: "room name",
        bedType: "tipo habitacion",
        roomFloor: "floor a-1",
        facilities: "AC. shower, double bed, towel, bathurp",
        rate: "$145/night",
        status: false
    },
    {
        id: 2,
        check: false,
        image: 'https://www.hazunaweb.com/imagenes/prueba.jpg',
        nameRoom: "room name",
        bedType: "tipo habitacion",
        roomFloor: "floor a-1",
        facilities: "AC. shower, double bed, towel, bathurp",
        rate: "$145/night",
        status: false
    }
]

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
                console.log({result})
            }}
        >
            <table  className="reviews w-full bg-myBlack rounded text-left">
                <thead className="head align-top w-ful">
                  <tr>
                  <th><input type="checkbox" className="scale-150" /></th>
                  <th>Room name</th>
                  <th>Bed Type</th>
                  <th>Room Floor</th>
                  <th>Facilities</th>
                  <th>Rate</th>
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
                                <Draggable key={guest.id} draggableId={String(guest.id)} index={index}>
                                    {(draggableProvided) => (
                                        <tr
                                            {...draggableProvided.draggableProps}
                                            ref={draggableProvided.innerRef}
                                            {...draggableProvided.dragHandleProps}
                                            className="task-item align-top"
                                        >
                                            <td className="w-[5%]"><input className="scale-150" type="checkbox" /></td>
                                            <td className="w-3/12"><div className="info flex gap-x-5"><img className='max-w-[120px] rounded' src={guest.image} alt="" /><FlexCol><span>{guest.id}</span><span>{guest.nameRoom}</span></FlexCol></div></td>
                                            <td className="w-1/12">{guest.bedType}</td>
                                            <td className="w-1/12">{guest.roomFloor}</td>
                                            <td className="w-2/12"><p>{guest.facilities}</p></td>
                                            <td className="w-1/12">{guest.rate}</td>
                                            <td className="w-[2%]">{
                                                guest.status == false ? <span>Booked</span> : <span>Available</span>
                                            }</td>
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
        
)


}

export default GuestList;
