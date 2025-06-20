import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";

type CodeEditorProps = {
  code: string;
  setData: (data: string) => void;
};

export const NewCodeEditor: React.FC<CodeEditorProps> = ({ code, setData }) => {
  return (
    <div>
      <h2>Code Challenge</h2>
      <CodeMirror
        className=""
        value={code}
        height="200px"
        extensions={[javascript()]}
        onChange={(value) => {
          setData(value);
        }}
      />
    </div>
  );
};
