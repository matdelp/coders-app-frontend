import React from "react";
import { type ChallengeData } from "../assets/dummyData/challenges";
import { ProgressBar } from "./ProgressBar";

type ChallengesTrackerProps = {
  data: ChallengeData;
};
export const ChallengesTracker: React.FC<ChallengesTrackerProps> = ({
  data,
}) => {
  return (
    <div className="flex flex-col gap-5 py-5">
      <h2 className="text-center text-xl xl:text-3xl xl:py-5">Completed Challenges</h2>
      <ProgressBar
        label="Easy"
        style="h-full bg-green-400 rounded-md text-background-100 flex items-center justify-end p-1 text-xs"
        value={data.easy}
        difficulty="easy"
      />
      <ProgressBar
        label="Moderate"
        style="h-full bg-yellow-400 rounded-md text-background-100 flex items-center justify-end p-1 text-xs"
        value={data.moderate}
        difficulty="moderate"
      />
      <ProgressBar
        label="Hard"
        style="h-full bg-red-400 rounded-md text-background-100 flex items-center justify-end p-1 text-xs"
        value={data.hard}
        difficulty="hard"
      />
    </div>
  );
};
//
{
  /* <progress
  value={data.easy}
  max={100}
  id="easy"
  className="w-full [&::-webkit-progress-bar]:rounded-md [&::-webkit-progress-value]:rounded-md [&::-webkit-progress-bar]:bg-gray-500 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400 rounded-lg"
>
  {data.easy}
</progress> */
}
