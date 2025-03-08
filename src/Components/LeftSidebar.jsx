import React, { useState } from "react";
import { Calendar, CheckSquare, Clock, Plus, Star } from "lucide-react";
import personImage from "/pfp.png";
import { useDispatch, useSelector } from "react-redux";
import { setTasksShowingType } from "../Store/Slice";

function LeftSidebar() {
  const tasks = useSelector((state) => state.SingleSourceOfTruthSlice.tasks);
  let completedTasks = tasks.filter((task) => task.completed).length;
  const totalTasks = tasks.length;
  const completionPercentage =
    totalTasks > 0 ? (completedTasks / totalTasks) * 100 : 0;
  const [selected, setSelected] = useState("All Tasks"); // Track selected option
  const dispatch = useDispatch();
  const navigationOptions = [
    { icon: <CheckSquare className="h-4 w-4 mr-3" />, text: "All Tasks" },
    { icon: <Calendar className="h-4 w-4 mr-3" />, text: "Today" },
    { icon: <Star className="h-4 w-4 mr-3" />, text: "Important" },
    { icon: <Clock className="h-4 w-4 mr-3" />, text: "Planned" },
    { icon: <CheckSquare className="h-4 w-4 mr-3" />, text: "Assigned to me" },
  ];
  const [hovered, setHovered] = useState(false);

  return (
    <div className="w-fit flex flex-col pt-[6rem] bg-inherit">
      <div className="bg-[#dcecde] dark:bg-[#2C2C2C] px-[1rem] rounded-[5px] xl:w-full w-[200px] pb-[2rem]">
        <div className="pt-4">
          <div
            className="grid grid-flow-row justify-items-center mb-[.5rem]"
            onMouseEnter={() => {
              setHovered(true);
            }}
            onMouseLeave={() => {
              setHovered(false);
            }}
          >
            <img
              src={
                !hovered
                  ? personImage
                  : "https://www.hindustantimes.com/ht-img/img/2025/01/03/550x309/Sean_Diddy_Combs_1730785771555_1735871909767.jpg"
              }
              alt="Profile"
              className="h-[6rem] aspect-square object-cover rounded-full absolute top-[7rem]"
            />
            <div>
              <p className="font-normal mt-[3rem]">
                {!hovered ? "Hey, ABCD" : "hey, Sean John Combs (Diddy)"}
              </p>
            </div>
          </div>
        </div>

        <nav className="flex-1 p-2 bg-white dark:bg-[#232323]  rounded-[5px]">
          <ul className="space-y-1">
            {navigationOptions.map((each) => (
              <li
                key={each.text}
                onClick={() => {
                  dispatch(setTasksShowingType(each.text));
                  setSelected(each.text); // Update selected item
                }}
                className={`flex items-center p-2 text-sm rounded-lg cursor-pointer ${
                  selected === each.text ? "bg-[#253026] text-green-600" : ""
                }`}
              >
                {each.icon}
                <span>{each.text}</span>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className="mt-[.5rem] h-[4rem] grid items-center p-2 bg-white 
        dark:bg-[#232323] rounded-[5px] mb-[1rem]"
        >
          <button className="flex items-center text-sm">
            <Plus className="h-5 w-5 mr-2 ml-[.5rem]" />
            <span className="">Add list</span>
          </button>
        </div>

        <div className="p-4 bg-white dark:bg-[#232323] rounded-[5px]">
          <div className="text-sm">
            <p className="text-gray-600 dark:text-white">Today Tasks</p>
            <p className="text-2xl font-bold">{totalTasks}</p>
            <hr className="bg-gray-300 border-none h-[2px] mx-[-1rem] mt-[1rem] dark:bg-black" />
          </div>

          <div className="mt-4 relative w-full">
            <svg className="w-full h-full" viewBox="-10 0 130 110">
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#376b38"
                strokeWidth="14"
              />
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#4dd952"
                strokeWidth="14"
                strokeDasharray="251.2"
                strokeDashoffset={251.2 - (251.2 * completionPercentage) / 100}
                transform="rotate(-90 50 50)"
              />
            </svg>
            <div className="grid grid-flow-col justify-items-start w-fit gap-[1rem]">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#376b38] rounded-full mr-1"></div>
                <span className="text-sm">
                  Pending:{" "}
                  <span className="text-[#376b38] font-semibold">
                    {totalTasks - completedTasks}
                  </span>
                </span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-[#4dd952] rounded-full mr-1"></div>
                <span className="text-sm">
                  Done:{" "}
                  <span className="text-[#4dd952] font-semibold">
                    {completedTasks}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSidebar;
