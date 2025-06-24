import React from "react";
import CodeMirror, { type Extension } from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";

type CodeEditorProps = {
  code: string;
  setData: (data: string) => void;
  language: string;
  setLanguage: (language: string) => void;
};

export const NewCodeEditor: React.FC<CodeEditorProps> = ({
  code,
  setData,
  language,
  setLanguage,
}) => {
  const languageExtensions: { [key: string]: () => Extension } = {
    javascript: langs.jsx,
    python: langs.python,
  };

  const getLanguageExtension = (lang: string) =>
    languageExtensions[lang] ? languageExtensions[lang]() : langs.javascript();

  return (
    <div>
      {" "}
      <div className="flex justify-between p-2">
        <h2 className="text-xl dark:text-main-100 font-semibold">
          Code Challenge
        </h2>

        <select
          id="language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-main-100 dark:bg-main-500 dark:text-background-100 px-2 py-1 rounded cursor-pointer"
        >
          <option value="javascript">JavaScript</option>
          <option value="python">Python</option>
        </select>
      </div>
      <CodeMirror
        className=""
        value={code}
        height="200px"
        extensions={[getLanguageExtension(language)]}
        onChange={(value) => {
          setData(value);
        }}
      />
    </div>
  );
};
