import React from "react";
import Split from "react-split";
import "../../assets/css/split-module.css";
import { ChallengeDescription } from "../../components/Workspace/ChallengeDescription";
import { SharedHeader } from "../../components/SharedHeader";

export const WorkspacePage: React.FC = () => {
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
        <div className="bg-background-100 h-full overflow-auto">
          <ChallengeDescription />
        </div>
        <div className="bg-blue-900 h-full  overflow-auto">Playground</div>
      </Split>
    </div>
  );
};
