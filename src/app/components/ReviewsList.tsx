import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const reorder = (list: any, startIndex: any, endIndex:any) => {
  const result = [...list];
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const initialTasks = [
  {
    id: "1",
    text: "React.js",
  },
  {
    id: "2",
    text: "HTML/CSS",
  },
  {
    id: "3",
    text: "React Router",
  },
  {
    id: "4",
    text: "React DnD",
  },
];

const ReviewsList = () => {
    const [tasks, setTasks] = useState(initialTasks);

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

                    setTasks((prevTasks) =>
                      reorder(prevTasks, source.index, destination.index)
                    );
                console.log({result})
            }}
        >
            <div>
                <h1>Pendientes</h1>
                <Droppable droppableId="tasks">
                    {(droppableProvided) => (
                        <ul
                            {...droppableProvided.droppableProps}
                            ref={droppableProvided.innerRef}
                            className="task-container"
                        >
                            {tasks.map((task, index) => (
                                <Draggable key={task.id} draggableId={task.id} index={index}>
                                    {(draggableProvided) => (
                                        <li
                                            {...draggableProvided.draggableProps}
                                            ref={draggableProvided.innerRef}
                                            {...draggableProvided.dragHandleProps}
                                            className="task-item mt-5"
                                        >
                                            {task.text}
                                        </li>
                                    )}
                                </Draggable>
                            ))}
                            {droppableProvided.placeholder}
                        </ul>
                    )}
                </Droppable>
            </div>
        </DragDropContext>
  );
};

export default ReviewsList;
