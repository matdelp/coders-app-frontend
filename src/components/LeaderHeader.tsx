import React from "react";
import { NavLink } from "react-router-dom";
import { MdLightMode } from "react-icons/md";

export const LeaderHeader: React.FC = () => {
  return (
    <header className="flex justify-between py-5 xl:px-4 px-2 bg-main-100">
      <div className="flex flex-col xl:flex-row gap-5 items-start xl:items-center">
        <div className="flex gap-2 items-center">
          <div className="flex xl:h-12 xl:w-12 items-center justify-center">
            <img
              className="h-10 w-10 object-contain"
              src="src/assets/images/logo.svg"
              alt="CLA logo"
            />
          </div>
          <p className="text-xl font-semibold">CodeCla</p>
        </div>
        <ul className="flex gap-5 text-lg xl:text-xl font-semibold">
          <li>
            <NavLink to="/challenges">Challenges</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex  items-start">
        <div className="flex h-10 w-10 xl:h-15 xl:w-15 items-center justify-center">
          <img
            src="src/assets/images/user.png"
            alt="user"
            className="object-cover rounded-full"
          />
        </div>
        <div className="flex h-10 w-10 xl:h-15 xl:w-15 items-center justify-center">
          <MdLightMode />
        </div>
      </div>
    </header>
  );
};
