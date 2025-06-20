import React from "react";
import { challengeList } from "../assets/dummyData/challengesList";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { BiHourglass } from "react-icons/bi";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";

export const ChallengesList: React.FC = () => {
  const tableHeaders: string[] = [
    "Status",
    "Title",
    "Category",
    "Difficulty",
    "Solution Rate",
  ];
  const setColorToDifficulty = (difficulty: string): string => {
    if (difficulty === "Easy") return "p-1 bg-green-400 rounded-md w-20";
    if (difficulty === "Moderate") return "p-1 bg-amber-400 rounded-md w-20";
    return "p-1 bg-red-400 rounded-md w-20";
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
            <th key={index} className="p-2 bg-main-100 dark:bg-main-300 text-center">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {challengeList.map((challenge, index) => (
          <tr key={index} className="border-b border-main-100 text-center">
            <td className="p-2 flex justify-center">
              {setIconToStatus(challenge.status)}
            </td>
            <td className="p-2">{challenge.title}</td>
            <td className="p-2">{challenge.category}</td>
            <td className="p-2 flex justify-center">
              <p className={setColorToDifficulty(challenge.difficulty)}>
                {challenge.difficulty}
              </p>
            </td>
            <td className="p-2">{challenge.solutionRate}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
