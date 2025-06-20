import React, { useState } from "react";
import { TestCase } from "./TestCase";
import Split from "react-split";
import "../../assets/css/split-module.css";
import { NewCodeEditor } from "./NewCodeEditor";

export const Playground: React.FC = () => {
  const [code, setCode] = useState(`// Type your code here`);
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
          <NewCodeEditor code={code} setData={setCode} />
        </div>
        <div className="h-full overflow-auto">
          <TestCase code={code} />
        </div>
      </Split>
    </div>
  );
};
