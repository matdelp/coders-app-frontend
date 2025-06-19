// import React, { useState } from "react";
// // import { Controlled as CodeMirror } from "react-codemirror2";
// import "codemirror/lib/codemirror.css";
// // import "codemirror/mode/python/python";
// // import "codemirror/mode/javascript/javascript";
// import "codemirror/addon/display/placeholder";

// // window.addEventListener("DOMContentLoaded", () => {
// //   const sizer = document.querySelector(".CodeMirror-sizer");
// //   if (sizer) sizer.remove();
// // });

// export const CodeEditor: React.FC = () => {
//   const [value, setValue] = useState("bfghrge");
//   const [language, setLanguage] = useState("javascript");
//   const options = {
//     mode: language,
//     lineNumbers: true,
//     tabSize: 2,
//     indentWithTabs: false,
//     smartIndent: true,

//   };
//   return (
//     <div className="space-y-4 max-w-4xl mx-auto p-4">
//       <div className="flex gap-4 justify-end">
//         <select
//           value={language}
//           onChange={(e) => setLanguage(e.target.value)}
//           className="bg-main-100 px-2 py-1 rounded"
//         >
//           <option value="javascript">JavaScript</option>
//           <option value="python">Python</option>
//         </select>
//       </div>
//       <div className="border rounded overflow-auto">
//         <CodeMirror
//           value={value}
//           options={options}
//           onBeforeChange={(_editor, _data, newValue) => {
//             setValue(newValue);
//           }}
//           onChange={() => {}}
//         />
//       </div>
//     </div>
//   );
// };
