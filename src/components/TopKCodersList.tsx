import React from "react";
import { coders } from "../assets/dummyData/codersList";
import { CoderCard } from "./CoderCard";

export const CodersList: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 p-2">
      <h2>Top 4 Coders:</h2>
      <div className="flex gap-5 flex-wrap">
        {coders.map((coder, index) => (
          <CoderCard data={coder} key={index} />
        ))}
      </div>
    </div>
  );
};
