import React, { useEffect, useState } from "react";
import { Bell, Calendar, ChevronDown, Repeat } from "lucide-react";
import { useDispatch } from "react-redux";
import { setTasks } from "../Store/Slice";
function AddTodos() {
  const dispatch = useDispatch();
  const [newTask, setNewTask] = useState("");
  const addTask = () => {
    setNewTask("");
    if (newTask.trim()) {
      dispatch(
        setTasks({
          id: Date.now(),
          text: newTask,
          completed: false,
          important: false,
        })
      );
    }
  };
  return (
    <div>
      <div className="mb-4 flex items-center">
        <span className="font-medium dark:text-green-600">To Do</span>
        <ChevronDown className="h-4 w-4 ml-1 dark:text-green-600" />
      </div>
      <div className="mb-6 bg-[#DCECDE] dark:bg-[#2F3630] h-[10rem] rounded-[2px] xl:pl-[1rem] ">
        <div className="p-3 grid grid-rows-[60%_40%] h-full ">
          <input
            type="text"
            placeholder="Add A Task"
            className="flex-1 outline-none xl:w-fit w-[5rem] dark:placeholder:text-white"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addTask()}
          />
          <div className="grid grid-flow-col justify-between items-center">
            <div className="grid grid-flow-col gap-[1.5rem] items-center">
              <Bell className="h-5 w-5 text-gray-800 dark:text-white hover:cursor-pointer" />
              <Repeat className="h-5 w-5 text-gray-800 dark:text-white hover:cursor-pointer" />
              <Calendar className="h-5 w-5 text-gray-800 dark:text-white hover:cursor-pointer" />
            </div>
            <button
              className="text-[#48864A] dark:text-white xl:px-3 xl:py-1 rounded text-sm
                  bg-[#CCDFCE] dark:bg-[#347237]  hover:cursor-pointer hover:bg-[#7bbd7e] transition-colors duration-200"
              onClick={addTask}
            >
              ADD TASK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTodos;
