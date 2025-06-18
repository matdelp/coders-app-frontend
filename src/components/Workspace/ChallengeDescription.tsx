import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";
import { challenges } from "../../assets/dummyData/challengeDesc";
import { FiCheckCircle } from "react-icons/fi";
import "../../assets/css/markdown-module.css";

const source = challenges[0]; //replace later with connection to backend

export const ChallengeDescription: React.FC = () => {
  return (
    <>
      <div className="flex justify-between p-2">
        <h2 className="font-bold text-xl">{source.title}</h2>
        <div className="flex items-center gap-2">
          <p className="bg-green-300 rounded-xl p-2 xl:text-md text-xs">
            {source.difficulty}
          </p>
          <p>{source.status === "Completed" ? <FiCheckCircle /> : null}</p>
        </div>
      </div>
      <MarkdownPreview source={source.description} />
    </>
  );
};
