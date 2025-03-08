import React, { useState } from "react";
import {
  Bell,
  Repeat,
  Square,
  Star,
  X,
  Plus,
  Trash2,
  Calendar as CalendarFromLucid,
} from "lucide-react";
import { Calendar } from "@/Components/ui/calendar.jsx";
import { useDispatch } from "react-redux";
import { removeTasks, setDetailedInfoVisibility } from "../Store/Slice";
function RightSidebar({ selectedTask }) {
  const dispatch = useDispatch();
  const options = [
    {
      icon: <Square className="h-5 w-5 text-gray-400 dark:text-white  mr-3" />,
      text: selectedTask.text,
      endIcon: (
        <Star className="h-5 w-5 text-gray-500 dark:text-white ml-auto" />
      ),
    },
    {
      icon: <Plus className="h-5 w-5 text-gray-400 dark:text-white mr-3" />,
      text: "Add Step",
    },
    {
      icon: <Bell className="h-5 w-5 text-gray-400 dark:text-white mr-3" />,
      text: "Set Reminder",
    },
    {
      icon: (
        <CalendarFromLucid className="h-5 w-5 text-gray-400 dark:text-white mr-3" />
      ),
      text: "Add Due Date",
    },
    {
      icon: <Repeat className="h-5 w-5 text-gray-400 dark:text-white mr-3" />,
      text: "Repeat",
    },
  ];
  const [calenderToggle, setCalenderToggle] = useState(false);
  const [date, setDate] = useState(new Date());
  return (
    <div className="w-full h-full px-4 pt-[3rem] pb-2 grid grid-rows-[95%_5%] relative">
      <div className=" w-full">
        <hr className="h-[1px] bg-gray-600 border-none" />
        {options.map((each) => (
          <div
            key={each.text}
            className={`grid items-center p-2 hover:cursor-pointer 
              border-b border-gray-400 dark:border-gray-600 min-h-[3rem]`}
            onClick={() => {
              each.text == "Add Due Date" && setCalenderToggle((prev) => !prev);
            }}
          >
            <div className="grid ">
              <div className="grid grid-flow-col justify-between items-center">
                <div className="grid grid-flow-col items-center">
                  <span>{each.icon}</span>
                  <span>{each.text}</span>
                </div>
                <span>{each?.endIcon}</span>
              </div>
              {each.text == "Add Due Date" && (
                <div
                  className={`transition-all duration-200 block ${
                    !calenderToggle && "hidden"
                  } grid place-items-center`}
                >
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md border border-black my-[1rem] dark:bg-[#1F1F1F] dark:text-white"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
        <textarea
          className="p-2 text-gray-400 dark:placeholder:text-white text-sm resize-none
          focus:outline-none w-full min-h-[8rem] mt-[1rem] placeholder:text-gray-700 "
          placeholder="Add Note"
        />
      </div>
      <hr className="border-none bg-gray-500 dark:bg-gray-600 h-[.5px] absolute w-full bottom-[9%]" />
      <div className="flex w-full justify-between items-center mb-[.8rem]">
        <div className="flex items-center">
          <button
            className="w-5 h-5 flex items-center justify-center rounded-sm hover:cursor-pointer 
            border-[1px] text-black hover:text-white border-black hover:bg-black transition-colors 
            duration-200 dark:border-white dark:hover:bg-white dark:hover:text-black group"
            onClick={() => {
              dispatch(setDetailedInfoVisibility(false));
            }}
          >
            <X className="h-3 w-3 text-inherit dark:text-white dark:group-hover:text-black" />
          </button>
        </div>
        <div className="text-sm text-gray-500 dark:text-white">
          Created At : {new Date(selectedTask.id).toLocaleString()}
        </div>
        <button
          className="grid place-item-center w-5 h-5 hover:cursor-pointer group"
          onClick={() => {
            dispatch(removeTasks(selectedTask.id));
          }}
        >
          <Trash2 className="w-full h-full text-black hover:text-red-500 transition-colors duration-200 dark:text-white dark:group-hover:text-red-500" />
        </button>
      </div>
    </div>
  );
}

export default RightSidebar;
