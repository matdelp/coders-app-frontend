import React from "react";
import { useParams } from "react-router-dom";
import { LeaderHeader } from "../../components/LeaderHeader";

export const ProfilPage = () => {
  const { userId } = useParams();
  return (
    <>
      <LeaderHeader />
    </>
  );
};
