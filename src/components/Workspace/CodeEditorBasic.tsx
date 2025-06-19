import React, { useEffect, useRef, useState } from "react";
import { EditorView, lineNumbers } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { python } from "@codemirror/lang-python";

export const CodeEditorBasic: React.FC = () => {
  const editorRef = useRef<EditorView | null>(null);
  const [language, setLanguage] = useState("javascript");
  const parentEditorRef = useRef<any>(undefined);

  useEffect(() => {
    if (editorRef.current) {
      const view = new EditorView({
        doc: "//type your code here",
        extensions: [javascript({ typescript: true }), python(), lineNumbers()],
        parent: parentEditorRef.current,
      });
      console.log(editorRef);

      return () => view.destroy();
    }
  }, []);
  return (
    <>
      <div ref={parentEditorRef} className="space-y-4 max-w-4xl mx-auto p-4">
        <div className="flex gap-4 justify-end">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-main-100 px-2 py-1 rounded dark:bg-background-500 dark:text-main-100"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>
        <div
          ref={editorRef}
          onBeforeChange={(...e) => {
            console.log(e);
          }}
        ></div>
      </div>
    </>
  );
};
