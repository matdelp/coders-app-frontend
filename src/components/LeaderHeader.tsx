import React from "react";
import { NavLink } from "react-router-dom";
import { MdLightMode } from "react-icons/md";

export const LeaderHeader: React.FC = () => {
  return (
    <header className="flex justify-between py-5 px-4 bg-main-100">
      <div className="flex gap-5 items-center">
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            className="h-10 w-10 object-contain"
            src="src/assets/images/logo.svg"
            alt="CLA logo"
          />
        </div>
        <p className="text-xl font-semibold">CodeCla</p>
        <ul className="flex gap-5 text-xl font-semibold">
          <li>
            <NavLink to="/challenges">Challenges</NavLink>
          </li>
          <li>
            <NavLink to="/leaderboard">Leaderboard</NavLink>
          </li>
        </ul>
      </div>
      <div className="flex gap-5">
        <div className="flex h-12 w-12 items-center justify-center">
          <img
            src="src/assets/images/user.png"
            alt="user"
            className="h-10 w-10 object-cover rounded-full"
          />
        </div>
        <div className="flex items-center justify-center">
          <MdLightMode />
        </div>
      </div>
    </header>
  );
};
