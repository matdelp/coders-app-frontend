import React from "react";
import type { ChallengeData } from "../assets/dummyData/challenges";

type ProgressBarProps = {
  label: string;
  style: string;
  data: ChallengeData;
};

export const ProgressBar: React.FC<ProgressBarProps> = ({
  label,
  style,
  data,
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <label htmlFor="easy" className="font-light">
        {label}
      </label>
      <div className="w-full h-4 bg-gray-300 rounded-md overflow-hidden">
        <div className={style} style={{ width: `${data.easy}%` }}>
          {data.easy}%
        </div>
      </div>
    </div>
  );
};
