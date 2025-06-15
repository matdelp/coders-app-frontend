import React from "react";
import { LeaderTable } from "../../components/LeaderTable";
import { dummyData } from "../../assets/dummyData/data";
import { LeaderHeader } from "../../components/LeaderHeader";

export const LeaderbordPage: React.FC = () => {
  return (
    <div className="bg-background-100 w-screen h-screen">
      <LeaderHeader />
      <div className="flex flex-col gap-2 px-3">
      <h2 className="font-semibold text-3xl">Leaderboard</h2>
      <LeaderTable data={dummyData} /></div>
    </div>
  );
};
