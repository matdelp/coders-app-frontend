import React, { useState } from "react";
import type { Test } from "../../types/Test";

type TestCaseProps = {
  code: string;
  language: string;
  tests: Test[];
};

export const TestCase: React.FC<TestCaseProps> = ({
  code,
  language,
  tests,
}) => {
  const [caseId, setCaseId] = useState<number>(0);
  const [results, setResults] = useState("");

  const runCode = (testIndex: number) => {
    if (language !== "javascript" && language !== "js") {
      setResults("Code execution only supported for JavaScript.");
      return;
    }
    let finalOutput = "";
    try {
      // Define the user function under the name "solution"
      // Here we assume user wrote the function with the name 'fibonacci' or specified function_name elsewhere.
      // So we wrap their code and return the function named 'fibonacci' (or 'solution' if you rename)
      const fn = new Function(`${code}; return fibonacci;`)();

      // Extract the argument values from inputs array
      const argValues = tests[testIndex].inputs.map((inp) => {
        // parse number if input type is number
        const val = inp.value;
        if (!isNaN(Number(val))) return Number(val);
        return val;
      });

      const expectedOutput = tests[testIndex].outputs;
      const actualOutput = fn(...argValues);

      // Compare actual output with expected output (both might be string or number)
      const passed = actualOutput == expectedOutput; // == to allow number/string equality loosely

      finalOutput += `Input: ${JSON.stringify(argValues)}\n`;
      finalOutput += `Expected Output: ${expectedOutput}\n`;
      finalOutput += `Actual Output: ${actualOutput}\n`;
      finalOutput += passed ? "✅ Passed" : "❌ Failed";
    } catch (err) {
      finalOutput = `Invalid Code\nError: ${
        err instanceof Error ? err.message : err
      }`;
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
          <button
            key={id}
            className={`px-4 py-2 rounded text-xs xl:text-sm font-medium cursor-pointer ${
              caseId === id ? "bg-main-500 text-main-100" : "bg-main-100"
            }`}
            onClick={() => setCaseId(id)}
          >
            Case {id + 1}
          </button>
        ))}
      </div>
      <form className="flex flex-col gap-3">
        <div className="gap-1">
          <label htmlFor="input" className="text-md dark:text-main-100">
            Input:
          </label>
          <input
            id="input"
            value={JSON.stringify(
              tests[caseId].inputs.reduce((acc, curr) => {
                acc[curr.name] = curr.value;
                return acc;
              }, {})
            )}
            readOnly
            className="bg-main-100 dark:bg-background-500 dark:text-main-100 p-2 rounded-md w-full text-sm xl:text-lg"
          />
        </div>
        <div>
          <label htmlFor="output" className="text-md dark:text-main-100">
            Output:
          </label>
          <input
            id="output"
            value={tests[caseId].outputs}
            readOnly
            className="bg-main-100 dark:bg-background-500 dark:text-main-100 p-2 rounded-md w-full text-sm xl:text-lg"
          />
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
      <pre className="dark:text-main-100 whitespace-pre-wrap">{results}</pre>
    </div>
  );
};
