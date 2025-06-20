import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import logo from "../assets/images/logo.svg";
import user from "../assets/images/user.png";

const USERNAME = "Jane Doe"; //TEMPORARY
export const SharedHeader: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex justify-between py-3 xl:py-5 px-2 xl:px-4  bg-main-100 dark:bg-background-500 dark:text-main-100">
      <div className="flex flex-col xl:flex-row gap-3 xl:gap-5 items-start xl:items-center">
        <div className="flex gap-2 items-center">
          <div className="flex xl:h-10 xl:w-10 h-7 w-7 items-center justify-center">
            <img className="object-contain" src={logo} alt="CLA logo" />
          </div>
          <div className="flex xl:gap-10 gap-5">
            <p className="xl:text-xl text-xs font-semibold">CodeCla</p>
            <ul className="flex gap-3 xl:gap-5 xl:text-xl text-xs font-semibold">
              <li>
                <NavLink to="/">Challenges</NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="relative">
          <div className="flex items-center justify-center gap-2">
            <button onClick={() => setShowMenu((prev) => !prev)}>
              <div className="flex xl:h-10 xl:w-10 h-7 w-7">
                <img
                  src={user}
                  alt="user"
                  className="object-cover rounded-full"
                />
              </div>
            </button>
            <p>{USERNAME}</p>
          </div>

          {!showMenu ? (
            ""
          ) : (
            <ul className="absolute left-0 -bottom bg-main-100 text-black rounded-md">
              <li className="cursor-pointer hover:bg-main-500 p-2 rounded-md">
                <NavLink to={`/profile/${USERNAME}`}>Profile</NavLink>
              </li>
              <li
                onClick={() => {
                  alert("Log Out !"); //temporary, TODO change auth token when implemented
                }}
                className="cursor-pointer hover:bg-main-500 p-2 rounded-md"
              >
                Logout
              </li>
            </ul>
          )}
        </div>
        <div className="flex xl:h-10 xl:w-10 h-7 w-7 items-center justify-center">
          <button className="cursor-pointer">
            <MdLightMode />
          </button>
        </div>
      </div>
    </nav>
  );
};
