import React, { useState } from "react";
import { CheckSquare, Square, Star } from "lucide-react";
import RightSidebar from "./RightSidebar";
import { useDispatch, useSelector } from "react-redux";
import {
  setDetailedInfoVisibility,
  updateCompletedTasks,
  updateImportantTasks,
} from "../Store/Slice.js";
import AddTodos from "./AddTodos.jsx";

function AllTodos() {
  const today = new Date();
  const [selectedTask, setSelectedTask] = useState("");
  const allTasks = useSelector((state) => state.SingleSourceOfTruthSlice.tasks);
  const detailedInfoVisibility = useSelector(
    (state) => state.SingleSourceOfTruthSlice.detailedInfoVisibility
  );
  const tasksShowingType = useSelector(
    (state) => state.SingleSourceOfTruthSlice.tasksShowingType
  );
  const dispatch = useDispatch();

  const importantTasks = allTasks.filter((task) => task.important);
  const completedTasks = allTasks.filter((task) => task.completed);

  const todaysTasks = allTasks.filter((task) => {
    const taskDate = new Date(task.id); // Ensure it's a Date object
    return (
      taskDate.getFullYear() === today.getFullYear() &&
      taskDate.getMonth() === today.getMonth() &&
      taskDate.getDate() === today.getDate()
    );
  });

  const gridTaskList = useSelector(
    (state) => state.SingleSourceOfTruthSlice.gridTaskList
  );

  return (
    <div className="w-full h-full">
      <div
        className={`grid grid-flow-col
          ${detailedInfoVisibility ? "grid-cols-[auto_21vw]" : "grid-flow-col"}
        xl:gap-[1rem] gap-[.25rem]`}
      >
        <div className="w-full">
          <AddTodos />
          <div
            className={`space-y-2 grid
          ${gridTaskList ? "grid-cols-3 gap-[1rem] " : ""} 
          `}
          >
            {(tasksShowingType === "All Tasks"
              ? allTasks
              : tasksShowingType === "Today"
              ? todaysTasks
              : tasksShowingType === "Important"
              ? importantTasks
              : tasksShowingType === "Assigned to me"
              ? completedTasks
              : allTasks
            ).map((task) => (
              <div
                key={task.text}
                className={`grid items-center 
                  grid-flow-col
                  ${
                    gridTaskList
                      ? "border border-gray-400 h-[6rem] dark:border-[#2F3630]"
                      : "border-b-[1px] border-gray-300"
                  }
                  justify-between p-3   
                  hover:cursor-pointer duration-500 transition-colors `}
                onClick={() => {
                  dispatch(setDetailedInfoVisibility(true));
                  setSelectedTask(task);
                }}
              >
                <div className="grid items-center grid-flow-col gap-[.25rem]">
                  <button
                    className="mr-3 flex-shrink-0"
                    onClick={(e) => {
                      e.stopPropagation();
                      dispatch(
                        updateCompletedTasks({
                          id: task.id,
                          status: !task.completed,
                        })
                      );
                    }}
                  >
                    {task.completed ? (
                      <CheckSquare className="h-5 w-5 text-green-600" />
                    ) : (
                      <Square className="h-5 w-5 text-gray-400 dark:text-white" />
                    )}
                  </button>
                  <span
                    className={`flex-1 ${
                      task.completed
                        ? "line-through text-gray-400 dark:text-white"
                        : ""
                    }`}
                  >
                    {task.text}
                  </span>
                </div>
                <button
                  className="ml-2"
                  onClick={(e) => {
                    e.stopPropagation();
                    dispatch(
                      updateImportantTasks({
                        id: task.id,
                        status: !task.important,
                      })
                    );
                  }}
                >
                  <Star
                    className={`h-5 w-5 ${
                      task.important
                        ? "fill-current text-black dark:text-white"
                        : "text-gray-500 dark:text-white"
                    }`}
                  />
                </button>
              </div>
            ))}
          </div>
        </div>
        {detailedInfoVisibility && (
          <div className="min-h-full bg-[#DCECDE] dark:bg-[#2C2C2C] rounded-[5px] ">
            <RightSidebar selectedTask={selectedTask} />
          </div>
        )}
      </div>
    </div>
  );
}

export default AllTodos;
