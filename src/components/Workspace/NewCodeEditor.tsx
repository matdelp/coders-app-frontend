import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";

type CodeEditorProps = {
  code: string;
  setData: (data: string) => void;
};

export const NewCodeEditor: React.FC<CodeEditorProps> = ({ code, setData }) => {
  return (
    <div>
      <h2 className="dark:text-main-100 font-bold p-5">Code Challenge</h2>
      <CodeMirror
        className=""
        value={code}
        height="200px"
        extensions={[langs.jsx(), langs.python()]}
        onChange={(value) => {
          setData(value);
        }}
      />
    </div>
  );
};
