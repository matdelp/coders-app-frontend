import React from "react";
import { dummyData } from "../../assets/dummyData/data";
import { LeaderTable } from "../../components/Leaderboard/LeaderTable";
import { SharedHeader } from "../../components/SharedHeader";

export const LeaderboardPage: React.FC = () => {
  return (
    <div className="bg-background-100 w-screen h-screen gap-2 flex flex-col">
      <SharedHeader />
      <div className="flex flex-col gap-2 p-3">
        <h2 className="font-semibold xl:text-3xl text-xl py-2">Leaderboard</h2>
        <LeaderTable data={dummyData} />
      </div>
    </div>
  );
};
