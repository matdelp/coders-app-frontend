import React, { useState } from "react";
import { TestCase } from "./TestCase";
import Split from "react-split";
import "../../assets/css/split-module.css";
import { NewCodeEditor } from "./NewCodeEditor";
import type { Challenge } from "../../types/Challenge";

type PlaygroundProps = {
  challenge: Challenge;
};
export const Playground: React.FC<PlaygroundProps> = ({ challenge }) => {
  const [code, setCode] = useState(`// Type your code here`);
  const [language, setLanguage] = useState("js");
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
          <NewCodeEditor
            code={code}
            setData={setCode}
            language={language}
            setLanguage={setLanguage}
          />
        </div>
        <div className="h-full overflow-auto">
          <TestCase code={code} language={language} tests={challenge.test} />
        </div>
      </Split>
    </div>
  );
};
