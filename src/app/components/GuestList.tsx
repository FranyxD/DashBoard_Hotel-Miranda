import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const guests = [
    {
        id: 1,
        firstName: 'John',
        lastName: 'Doe',
        phone: '(999) 999-999-9999',
    },
    {
        id: 2,
        firstName: 'John',
        lastName: 'Doe',
        phone: '(999) 999-999-9999',
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

                    setReviews((prevReviews) =>
                      reorder(prevReviews, source.index, destination.index)
                    );
                console.log({result})
            }}
        >
            <table  className="reviews w-full bg-myBlack rounded text-left">
                <thead className="head align-top w-ful">
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
                                            <td className="w-1/12">#{guest.id}</td>
                                            <td className="w-2/12">{guest.date}</td>
                                            <td className="w-1/12">{guest.customer}</td>
                                            <td className="w-4/12">
                                              <div className="comment">
                                                <div className="stars flex gap-x-1 mb-2">
                                                  {guest.stars && [...Array(guest.stars)].map((star, index) => <Start className="w-4" key={index}/>)}
                                                </div>
                                              <p className="h-24 overflow-auto">{guest.comment}</p>
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
)


}

export default GuestList;
