import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { reorder } from "../utils/hooks";
import { FlexCol } from "../styles";

const concierges = [
    {
      id: 1,
      check: false,
      image: "https://www.hazunaweb.com/imagenes/prueba.jpg",
      nameConcierge: "someone",
      joinedDate: "fecha entrada",
      jobDesk: "descripcion trabajo",
      schedule: "Monda-friday",
      contact: "987 123 456",
      status: true
    },
    {
      id: 2,
      check: false,
      image: "https://www.hazunaweb.com/imagenes/prueba.jpg",
      nameConcierge: "someone",
      joinedDate: "fecha entrada",
      jobDesk: "descripcion trabajo",
      schedule: "Monda-friday",
      contact: "987 123 456",
      status: false
    }
  ];

const ConciergeList = () => {
    const [conciergeList, setConciergeList] = useState(concierges)

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

            setConciergeList((prevConcierges) =>
              reorder(prevConcierges, source.index, destination.index)
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
            <th>Name</th>
            <th>Job Desk</th>
            <th>Schedule</th>
            <th>Contact</th>
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
              {conciergeList.map((concierge, index) => (
                <Draggable
                  key={concierge.id}
                  draggableId={String(concierge.id)}
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
                      {/* concierge */}
                      <td className="w-3/12">
                        <div className="info flex gap-x-5">
                          <img
                            className="w-16 h-16 rounded"
                            src={concierge.image}
                            alt=""
                          />
                          <FlexCol>
                            <span>{concierge.nameConcierge}</span>
                            <span>{concierge.id}</span>
                            <span>{concierge.joinedDate}</span>
                          </FlexCol>
                        </div>
                      </td>
                      {/* JOb desk */}
                      <td className="w-1/12">{concierge.jobDesk}</td>
                      {/* Schedule */}
                      <td className="w-1/12">{concierge.schedule}</td>
                      {/* Contact */}
                      <td className="w-2/12">
                        {concierge.contact}
                      </td>
                      {/* Status */}
                      <td className="w-1/12">{concierge.status == true ? <span>ACTIVE</span> : <span>INACTIVE</span>}</td>
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
    )
}

export default ConciergeList;