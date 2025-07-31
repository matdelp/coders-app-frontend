import React from "react";
import { BiHourglass } from "react-icons/bi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { useGetChallengesQuery } from "../hooks/apiGraphqlRequest";
import { getStatusFromChallenge } from "../utils/getChallengeStatus";

export const ChallengesList: React.FC = () => {
  const { data, isLoading, error } = useGetChallengesQuery();

  if (isLoading) return <p>Loading challenges...</p>;
  if (error) return <p>Error loading challenges.</p>;

  const challengeList = data?.challenges || [];
  const tableHeaders: string[] = [
    "Status",
    "Title",
    "Category",
    "Difficulty",
    "Solution Rate",
  ];
  const setColorToDifficulty = (difficulty: string): string => {
    if (difficulty === "Easy")
      return "p-1 bg-green-400 rounded-md w-20 text-black";
    if (difficulty === "Moderate")
      return "p-1 bg-amber-400 rounded-md w-20 text-black";
    return "p-1 bg-red-400 rounded-md w-20 text-black";
  };
  const setIconToStatus = (status: string): React.ReactNode => {
    if (status === "Completed")
      return <IoMdCheckmarkCircleOutline title={status} />;
    if (status === "Attempted")
      return <HiOutlineClipboardDocumentList title={status} />;
    return <BiHourglass title={status} />;
  };
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr>
          {tableHeaders.map((header, index) => (
            <th
              key={index}
              className="p-2 bg-main-100 dark:bg-main-300 text-center"
            >
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {challengeList.map((challenge, index) => (
          <tr key={index} className="border-b border-main-100 text-center">
            <td className="p-2 flex justify-center">
              {setIconToStatus(getStatusFromChallenge(challenge))}
            </td>
            <td className="p-2">{challenge.title}</td>
            <td className="p-2">{challenge.category}</td>
            <td className="p-2 flex justify-center">
              <p className={setColorToDifficulty(challenge.level)}>
                {challenge.level}
              </p>
            </td>
            <td className="p-2">solutionRate</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
