import React from "react";
import type { Coder } from "../assets/dummyData/codersList";

type CoderCardProps = {
  data: Coder;
};
export const CoderCard: React.FC<CoderCardProps> = ({ data }) => {
  return (
    <div className="flex bg-main-100 p-2 rounded-xl w-full">
      <div className="flex justify-between w-full items-center">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10">
            <img src={data.avatar_url} alt="avatar" className="rounded-full" />
          </div>
          <div>
            {data.first_name} {data.last_name}
          </div>
        </div>
        <div>Score: {data.score}</div>
      </div>
    </div>
  );
};
