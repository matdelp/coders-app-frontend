import React, { useState } from "react";
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml";
import "codemirror/mode/javascript/javascript";

export const CodeEditor: React.FC = () => {
  const [value, setValue] = useState("");
  const options = {
    mode: "javascript",
    theme: "default",
    lineNumbers: true,
  };
  return (
    <div className="max-h-50">
      <CodeMirror
        value={value}
        options={options}
        onBeforeChange={(_editor, _data, value) => {
          setValue(value);
        }}
        onChange={() => {}}
      />
    </div>
  );
};
