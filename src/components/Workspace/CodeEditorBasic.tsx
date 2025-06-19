import React, { useEffect, useRef, useState } from "react";
import { EditorView, lineNumbers } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";


export const CodeEditorBasic: React.FC = () => {
  const editorRef = useRef<any | null>(null);
  const [language, setLanguage] = useState("javascript");

  useEffect(() => {
    if (editorRef.current) {
      const view = new EditorView({
        doc: "Start document",
        extensions: [javascript({ typescript: true }), lineNumbers()],
        parent: editorRef.current,
      });

      return () => view.destroy(); // Cleanup on unmount
    }
  }, []);

  return (
    <>
      <div className="space-y-4 max-w-4xl mx-auto p-4">
        <div className="flex gap-4 justify-end">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-main-100 px-2 py-1 rounded"
          >
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
        </div>
        <div ref={editorRef}></div>
      </div>
    </>
  );
};
