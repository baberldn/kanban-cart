import React, { useState } from "react";
import Task from "./task";
import { useDroppable } from "@dnd-kit/core";



function Board({ project, taskSelect, handleAddTask }) {
  const [addings, setAdding] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const { setNodeRef, isOver } = useDroppable({
    id: project.id,
    data: {
      type: "BOARD",
      projectId: project.id,
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    handleAddTask(project.id, newTaskTitle);
    setNewTaskTitle("");
    setAdding(false);
  }

  function handleTouchMove(e) {
    if (isOver) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  function handleAddingTask() {
    setAdding(true);
  }

  function TaskForm() {
    return (
      <form
        onSubmit={handleSubmit}
        className="p-2 sm:p-3"
        onTouchStart={(e) => e.stopPropagation()}
      >
        <input
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Task title"
          className="w-full p-1.5 sm:p-2 text-[9px] sm:text-xs border border-[#EAECF0] rounded-md"
          autoFocus
          onTouchStart={(e) => e.stopPropagation()}
          required
        />
        <div className="mt-1.5 sm:mt-2 flex gap-1 sm:gap-2 justify-end">
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setAdding(false);
              setNewTaskTitle("");
            }}
            className="px-2 sm:px-3 py-1 text-[#98A2B3] text-[10px] sm:text-xs hover:bg-gray-50 rounded"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-2 sm:px-3 py-1 bg-[#4E5BA6] text-white text-[10px] sm:text-xs rounded"
          >
            Add
          </button>
        </div>
      </form>
    );
  }

  return (
    <li
      ref={setNodeRef}
      className={`border border-[#EAECF0] shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-xl 
        min-w-[200px] sm:min-w-[250px] 
        max-w-[200px] sm:max-w-[250px] 
        text-xs 
        min-h-[400px] sm:min-h-[600px]
        max-h-[500px] md:max-h-[700px]
        overflow-auto scrollbar-hide 
        ${isOver ? "bg-blue-50" : "bg-white"}`}
      onTouchMove={handleTouchMove}
    >
      <div className="flex justify-between items-center p-1.5 sm:p-2 border-b border-[#EAECF0]">
        <div className="flex gap-1.5 sm:gap-2 items-center text-[10px] sm:text-base">
          <h3 className="text-[#4E5BA6]">{project.title}</h3>
          <div className="w-[14px] h-[14px] sm:w-[18px] sm:h-[18px] flex justify-center items-center rounded-full border border-[#B2DDFF] bg-[#EFF8FF] text-[#175CD3]">
            <span className="text-[10px] sm:text-sm">
              {project.notifications}
            </span>
          </div>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <img src="images/Plus 4.png"
            className="w-3 h-3 sm:w-auto sm:h-auto"
          />
          <img src="images/More Circle.png"
            className="w-3 h-3 sm:w-auto sm:h-auto"
          />
        </div>
      </div>
      <ul className="p-[2px] flex flex-col gap-1 h-full">
        {project.tasks.length > 0 ? (
          <>
            {project.tasks?.map((task) => (
              <Task
                key={task.id}
                task={task}
                taskSelect={taskSelect}
                projectId={project.id}
              />
            ))}
            {addings ? (
              <TaskForm />
            ) : (
              <li
                className="cursor-pointer flex justify-center items-center p-2 sm:p-3 text-[#98A2B3] text-base sm:text-lg"
                onClick={handleAddingTask}
              >
                <p>+ New Task</p>
              </li>
            )}
          </>
        ) : (
          <>
            {addings ? (
              <TaskForm />
            ) : (
              <div
                className="flex flex-col justify-center items-center group cursor-pointer text-[#98A2B3] text-lg sm:text-xl font-medium h-full"
                onClick={handleAddingTask}
              >
                <img src="images/Layer 1.png"
                  className="w-20 h-20 sm:w-auto sm:h-auto"
                />
                <p className="opacity-90 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300">
                  + New Task
                </p>
              </div>
            )}
          </>
        )}
      </ul>
    </li>
  );
}

export default Board;


