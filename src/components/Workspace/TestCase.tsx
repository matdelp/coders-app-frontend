import React, { useState } from "react";
import { challenges } from "../../assets/dummyData/challengeDesc";

const ExChallenge = challenges[0]; //temporary
const tests = ExChallenge.tests;

type TestCaseProps = {
  code: string;
  language: string;
};

export const TestCase: React.FC<TestCaseProps> = ({ code, language }) => {
  const [caseId, setCaseId] = useState<number>(0);
  const [results, setResults] = useState("");

  const runCode = (testIndex: number) => {
    if (language !== "javascript") {
      setResults("Code execution only supported for JavaScript.");
      return; // Didn't manage to implement python as a running language for testCases ...
    }
    let finalOutput = "";
    try {
      const fn = new Function(`${code}; return solution;`)();
      const input = tests[testIndex].inputText;
      const output = tests[testIndex].outputText;
      const actual = fn(input);
      const passed = actual === output;
      finalOutput += `Input: ${JSON.stringify(input)}\n`;
      finalOutput += `Output: ${output}, Got: ${actual} -> ${
        passed ? "✅ Passed" : "❌ Failed"
      }\n\n`;
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (err) {
      finalOutput = "Invalid Code";
    }
    setResults(finalOutput);
  };

  return (
    <div className="flex flex-col gap-2 p-2 xl:p-5">
      <p className="text-xs xl:text-lg border-b-2 font-semibold border-b-main-500 dark:border-b-main-100 dark:text-main-100 w-fit">
        Testcases
      </p>
      <div className="flex flex-row gap-2">
        {tests.map((test, id) => (
          <>
            <button
              key={test.id}
              className={`px-4 py-2 rounded text-xs xl:text-sm font-medium cursor-pointer 
              ${caseId === id ? "bg-main-500 text-main-100" : "bg-main-100"}`}
              onClick={() => setCaseId(id)}
            >
              Case {test.id}
            </button>
          </>
        ))}
      </div>
      <form className="flex flex-col gap-3">
        <div className="gap-1">
          <label htmlFor="input" className="text-md dark:text-main-100">
            Input:
          </label>
          <input
            id="input"
            value={`[${tests[caseId].inputText.toString()}]`}
            readOnly
            className="bg-main-100 dark:bg-background-500 dark:text-main-100 p-2 rounded-md w-full text-sm xl:text-lg"
          ></input>
        </div>
        <div>
          <label htmlFor="output" className="text-md dark:text-main-100">
            Output:
          </label>
          <input
            id="output"
            value={tests[caseId].outputText}
            readOnly
            className="bg-main-100  dark:bg-background-500 dark:text-main-100 p-2 rounded-md w-full text-sm xl:text-lg"
          ></input>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => runCode(caseId)}
            className="bg-main-100 rounded-md py-1 px-2 w-fit cursor-pointer text-xs xl:text-sm"
          >
            Submit
          </button>
        </div>
      </form>
      <pre className="dark:text-main-100">{results}</pre>
    </div>
  );
};
