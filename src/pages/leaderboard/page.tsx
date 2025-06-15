import React from "react";
import { LeaderTable } from "../../components/LeaderTable";
import { dummyData } from "../../assets/dummyData/data";

export const LeaderbordPage: React.FC = () => {
  return (
    <>
      <p>LeaderTable</p>
      <LeaderTable data={dummyData}/>
    </>
  );
};
