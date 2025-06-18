import React from "react";
import { TestCase } from "./TestCase";
import { CodeEditor } from "./CodeEditor";
import Split from "react-split";
import "../../assets/css/split-module.css";

export const Playground: React.FC = () => {
  return (
    <div className="h-full w-full">
      <Split
        sizes={[50, 50]}
        minSize={100}
        expandToMin={false}
        gutterSize={10}
        gutterAlign="center"
        snapOffset={30}
        dragInterval={1}
        direction="vertical"
        cursor="row-resize"
        className="flex flex-col "
      >
        <div className="h-full overflow-auto">
          <CodeEditor />
        </div>
        <div className="h-full overflow-auto">
          <TestCase />
        </div>
      </Split>
    </div>
  );
};
