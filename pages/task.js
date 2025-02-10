import React from "react";
import { useDraggable } from "@dnd-kit/core";
import { CSS } from "@dnd-kit/utilities";

function Task({ task, projectId, taskSelect }) {
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
      data: {
        type: "TASK",
        taskId: task.id,
        projectId,
        task,
      },
    });

  const style = {
    opacity: isDragging ? 0 : 1,
    cursor: "pointer",
    transform: CSS.Transform.toString(transform),
  };

  return (
    <li
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
      className="task border border-[#EAECF0] shadow-[0_1px_2px_rgba(16,24,40,0.05)] rounded-md p-2 sm:p-3 flex flex-col gap-1.5 sm:gap-2"
      onClick={() => taskSelect(task)}
    >
      <h4 className="font-medium text-xs" style={{ color: task.title.color }}>
        {task.title.text}
      </h4>
      <p className="text-[#475467] font-medium">{task.description}</p>
      <div className="flex justify-end items-start">
        {task.people?.slice(0, 4).map((person, index) => (
          <img
            key={person.name}
            src={person.photo}
            alt="person"
            className={`w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] rounded-full border border-white ${
              index > 0 ? "-ml-2 sm:-ml-3" : ""
            }`}
          />
        ))}
        {task.people?.length > 4 && (
          <div className="bg-[#F2F4F7] border border-[#d8d8d8] rounded-full flex items-center justify-center w-[28px] h-[28px] sm:w-[35px] sm:h-[35px] -ml-2 sm:-ml-3">
            <span className="text-[#475467] font-semibold text-base sm:text-lg">
              +{task.people.length - 4}
            </span>
          </div>
        )}
      </div>
      <p className="text-[#98A2B3]">{task.date}</p>
      <div className="flex gap-2">
        <p className="text-[#98A2B3] flex items-center gap-2">
          <img src="images/Rectangle 41978.png" alt="milestone" />
          {task.milestone}
        </p>
        <svg
          width="16"
          height="17"
          viewBox="0 0 16 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6191 8.05667L13.2877 4.90133C13.3697 4.746 13.3644 4.55933 13.2737 4.40933C13.1837 4.25933 13.0211 4.16733 12.8457 4.16733H8.45706V3.26C8.45706 2.984 8.23306 2.76 7.95706 2.76H3.65437V2.5C3.65437 2.224 3.43037 2 3.15437 2C2.87837 2 2.65437 2.224 2.65437 2.5V14.5C2.65437 14.776 2.87837 15 3.15437 15C3.43037 15 3.65437 14.776 3.65437 14.5V10.578L7.45839 10.484V11.498C7.45839 11.6327 7.51306 11.762 7.60906 11.856C7.70506 11.95 7.81039 11.998 7.97039 11.998L12.8577 11.8787C13.0317 11.8747 13.1904 11.78 13.2777 11.6293C13.3651 11.4793 13.3684 11.294 13.2857 11.1413L11.6191 8.05667Z"
            fill={task.priority}
          />
        </svg>
      </div>
    </li>
  );
}

export default Task;