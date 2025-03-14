import LeftSidebar from "./Components/LeftSidebar";
import AllTodos from "./Components/AllTodos";
import { Menu, Search } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { setProfileAndNavigationVisibilityToggle } from "./Store/Slice";
import { useEffect } from "react";
import ToggleListSize from "./Components/Svg's/ToggleListSize";
import ThemeToggler from "./Components/Svg's/ThemeToggler";
export default function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.SingleSourceOfTruthSlice.theme);
  const profileAndNavigationVisibilityToggle = useSelector(
    (state) =>
      state.SingleSourceOfTruthSlice.profileAndNavigationVisibilityToggle
  );
  useEffect(() => {
    document.querySelector("html").classList.remove("dark", "light");
    if (theme) {
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.add("light");
    }
  }, [theme]);
  return (
    <div className="h-fit grid place-items-center dark:bg-[#242424] dark:text-gray-100">
      <div className="w-full grid grid-flow-col justify-between xl:px-[5rem] px-[2.5rem]">
        <div className="py-4 flex items-center ">
          <Menu
            className={`h-5 w-5 ${theme ? "text-white" : "text-black"}`}
            onClick={() => {
              dispatch(
                setProfileAndNavigationVisibilityToggle(
                  !profileAndNavigationVisibilityToggle
                )
              );
            }}
          />
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-[1rem]"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M4.71812 4.71757C5.71011 3.72557 7.59348 3.34578 10.2718 4.13352C10.4606 4.18905 10.6515 4.24999 10.8442 4.31629C9.62981 5.1782 8.43998 6.18116 7.31084 7.31029C6.87424 7.74689 6.4572 8.19184 6.06039 8.64302C5.51329 9.26509 5.57406 10.2129 6.19613 10.76C6.81819 11.3071 7.766 11.2463 8.3131 10.6243C8.66751 10.2213 9.04072 9.82305 9.43216 9.43161C10.9144 7.94939 12.4837 6.73835 14.0284 5.81847C15.573 6.73835 17.1423 7.94939 18.6245 9.43161C20.3065 11.1136 21.6393 12.9078 22.5937 14.6506C22.6229 14.7154 22.6568 14.7781 22.6951 14.8384C23.2348 15.8505 23.6458 16.8433 23.9226 17.7844C24.7104 20.4627 24.3306 22.346 23.3386 23.338C22.3466 24.33 20.4632 24.7098 17.7849 23.9221C17.5961 23.8666 17.4052 23.8056 17.2125 23.7393C18.4269 22.8774 19.6167 21.8745 20.7459 20.7453C21.1635 20.3277 21.5633 19.9024 21.9445 19.4713C22.4934 18.8508 22.4352 17.9028 21.8147 17.354C21.1942 16.8051 20.2462 16.8632 19.6974 17.4838C19.3568 17.8689 18.999 18.2495 18.6245 18.624C17.1423 20.1062 15.573 21.3173 14.0284 22.2371C12.4837 21.3173 10.9144 20.1062 9.43216 18.624C6.71081 15.9026 4.90357 12.8875 4.13407 10.2712C3.34634 7.59293 3.72612 5.70956 4.71812 4.71757ZM11.1183 1.25542C12.0718 1.53587 13.0479 1.92169 14.0284 2.40533C15.0088 1.92169 15.9849 1.53588 16.9384 1.25542C20.0611 0.337009 23.3277 0.46405 25.4599 2.59625C26.9191 4.05539 27.4396 6.07153 27.3296 8.15903C27.2317 10.0189 26.6353 12.0318 25.6508 14.0278C26.1345 15.0082 26.5203 15.9843 26.8007 16.9379C27.7192 20.0605 27.5921 23.3272 25.4599 25.4594C23.3277 27.5916 20.0611 27.7186 16.9384 26.8002C15.9849 26.5197 15.0088 26.1339 14.0284 25.6503C13.0479 26.1339 12.0718 26.5197 11.1183 26.8002C7.99566 27.7186 4.72899 27.5916 2.5968 25.4594C1.13867 24.0012 0.617874 21.9868 0.726838 19.9009C0.824059 18.0398 1.42065 16.0253 2.40591 14.0279C1.92226 13.0474 1.53643 12.0713 1.25597 11.1177C0.337559 7.99511 0.464601 4.72844 2.5968 2.59624C4.72899 0.46405 7.99566 0.337008 11.1183 1.25542ZM20.7459 7.31029C19.6167 6.18116 18.4269 5.1782 17.2125 4.31629C17.4052 4.24999 17.5961 4.18905 17.7849 4.13352C20.4632 3.34579 22.3466 3.72557 23.3386 4.71757C24.0228 5.40176 24.4138 6.48246 24.3338 8.0013C24.2886 8.86008 24.0921 9.81978 23.7399 10.8437C22.878 9.62928 21.875 8.43943 20.7459 7.31029ZM7.31084 20.7453C8.43998 21.8745 9.62981 22.8774 10.8442 23.7393C10.6515 23.8056 10.4606 23.8666 10.2718 23.9221C7.59348 24.7098 5.71011 24.33 4.71812 23.338C4.03437 22.6543 3.6435 21.5746 3.72275 20.0574C3.76765 19.1979 3.9642 18.2371 4.31683 17.2119C5.17874 18.4263 6.1817 19.6162 7.31084 20.7453ZM17 14C17 15.6569 15.6569 17 14 17C12.3431 17 11 15.6569 11 14C11 12.3431 12.3431 11 14 11C15.6569 11 17 12.3431 17 14Z"
              fill="#3F9142"
            />
          </svg>
          <h1 className="ml-2 text-xl font-semibold text-green-600 ">DoIt</h1>
        </div>
        <div className="py-4 pr-[2.5vw]  flex justify-between items-center">
          <div className="flex items-center">
            <button className="px-2 hover:cursor-pointer">
              <Search
                className={`h-[24px] w-[20px] text-black dark:text-white `}
              />
            </button>
            <ToggleListSize />
            <ThemeToggler />
          </div>
        </div>
      </div>
      <div
        className={`grid bg-inherit w-[95vw] xl:justify-center
      ${
        profileAndNavigationVisibilityToggle
          ? "xl:grid-cols-[300px_70rem] grid-cols-[200px_auto]"
          : "grid-cols-[95vw] "
      } 
      lg:gap-0 gap-[.25rem] xl:gap-[1rem]`}
      >
        {/* Left Sidebar */}
        {profileAndNavigationVisibilityToggle && <LeftSidebar />}
        {/* Main Content */}
        <AllTodos />
      </div>
    </div>
  );
}
