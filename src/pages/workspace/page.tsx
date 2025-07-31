import React from "react";
import Split from "react-split";
import "../../assets/css/split-module.css";
import { ChallengeDescription } from "../../components/Workspace/ChallengeDescription";
import { SharedHeader } from "../../components/SharedHeader";
import { Playground } from "../../components/Workspace/Playground";
import { useGetOneChallengeQuery } from "../../hooks/apiGraphqlRequest";
import { useParams } from "react-router-dom";
import type { Challenge } from "../../types/Challenge";

export const WorkspacePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error } = useGetOneChallengeQuery(id!);

  if (isLoading) return <p>Loading challenge...</p>;
  if (error) {
    console.error("GraphQL error:", error);
    return <p>Error loading challenge: {JSON.stringify(error)}</p>;
  }
  if (!data?.challenge) return <p>Challenge not found.</p>;
  const challenge = data.challenge as Challenge;
  console.log(challenge);

  return (
    <div className="h-screen w-screen">
      <SharedHeader />
      <Split
        sizes={[50, 50]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="horizontal"
        cursor="col-resize"
        className="flex h-full"
      >
        <div className="bg-background-100 dark:bg-main-700 h-full overflow-auto">
          <ChallengeDescription challenge={challenge} />
        </div>
        <div className="bg-background-100  dark:bg-main-700 h-full overflow-auto">
          <Playground challenge={challenge} />
        </div>
      </Split>
    </div>
  );
};
