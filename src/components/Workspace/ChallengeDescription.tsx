import MarkdownPreview from "@uiw/react-markdown-preview";
import React from "react";
import { FiCheckCircle } from "react-icons/fi";
import "../../assets/css/markdown-module.css";
import type { Challenge } from "../../types/Challenge";
import { getStatusFromChallenge } from "../../utils/getChallengeStatus";

type ChallengeDescriptionProps = {
  challenge: Challenge;
};

export const ChallengeDescription: React.FC<ChallengeDescriptionProps> = ({
  challenge,
}) => {
  return (
    <>
      <div className="flex justify-between p-2">
        <h2 className="font-bold text-xl dark:text-main-100">
          {challenge.title}
        </h2>
        <div className="flex items-center gap-2">
          <p className="bg-green-300 rounded-xl p-2 xl:text-md text-xs">
            {challenge.level}
          </p>
          <p>
            {getStatusFromChallenge(challenge) === "Completed" ? (
              <FiCheckCircle />
            ) : null}
          </p>
        </div>
      </div>
      <MarkdownPreview source={challenge.description} />
    </>
  );
};
