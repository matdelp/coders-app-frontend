import React from "react";
import { NavLink } from "react-router-dom";
import { MdLightMode } from "react-icons/md";
import logo from "../assets/images/logo.svg";
import user from "../assets/images/user.png";

export const SharedHeader: React.FC = () => {
  return (
    <header className="flex justify-between py-3 xl:py-5 px-2 xl:px-4  bg-main-100 dark:bg-background-500 dark:text-main-100">
      <div className="flex flex-col xl:flex-row gap-3 xl:gap-5 items-start xl:items-center">
        <div className="flex gap-2 items-center">
          <div className="flex xl:h-10 xl:w-10 h-7 w-7 items-center justify-center">
            <img className="object-contain" src={logo} alt="CLA logo" />
          </div>
          <div className="flex xl:gap-10 gap-5">
            <p className="xl:text-xl text-xs font-semibold">CodeCla</p>
            <ul className="flex gap-3 xl:gap-5 xl:text-xl text-xs font-semibold">
              <li>
                <NavLink to="/challenges">Challenges</NavLink>
              </li>
              <li>
                <NavLink to="/leaderboard">Leaderboard</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-start gap-2">
        <div className="flex xl:h-10 xl:w-10 h-7 w-7 items-center justify-center">
          <img src={user} alt="user" className="object-cover rounded-full" />
        </div>
        <div className="flex xl:h-10 xl:w-10 h-7 w-7 items-center justify-center">
          <MdLightMode />
        </div>
      </div>
    </header>
  );
};
