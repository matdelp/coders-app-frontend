import React from "react";
import type { LeaderbordData } from "../../assets/dummyData/data";

type LeaderTableProps = {
  data: LeaderbordData[];
};

export const LeaderTable: React.FC<LeaderTableProps> = ({ data }) => {
  return (
    <table className="w-full text-center font-medium shadow-lg table-auto">
      <thead>
        <tr className="h-10">
          <th className="font-medium">Rank</th>
          <th className="font-medium">Name</th>
          <th className="font-medium">Score</th>
          <th className="font-medium">Solved Challenges</th>
        </tr>
      </thead>
      <tbody>
        {data.map((user, index) => (
          <tr key={index} className="border-b-1 border-gray-400 h-10">
            <td>{user.rank}</td>
            <td>
              {user.first_name}
              {"  "}
              {user.last_name}
            </td>
            <td>{user.score}</td>
            <td>{user.solved_challenges}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
