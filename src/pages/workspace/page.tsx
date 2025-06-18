import React from "react";
import Split from "react-split";
import "../../assets/css/split-module.css";

export const WorkspacePage: React.FC = () => {
  return (
    <div className="h-screen w-screen">
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
        <div className="bg-amber-400 h-full overflow-auto">
          ChallengeDescription
        </div>
        <div className="bg-blue-900 h-full  overflow-auto">Playgroung</div>
      </Split>
    </div>
  );
};
