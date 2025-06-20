import React, { useState } from "react";
import { challenges } from "../../assets/dummyData/challengeDesc";

const ExChallenge = challenges[0]; //temporary

type CaseIdProps = {
  id: number;
  input: unknown; //temporary
  inputText: string;
  output: unknown; //temporary
  outputText: string;
};

export const TestCase: React.FC = () => {
  const checkTestArray = (testArray: CaseIdProps[]): CaseIdProps | null => {
    if (testArray.length > 0) return testArray[0];
    return null;
  };
  const defaultCase = checkTestArray(ExChallenge.tests);
  const [caseId, setCaseId] = useState<CaseIdProps | null>(defaultCase);

  return (
    <div className="flex flex-col gap-2 p-2 xl:p-5">
      <p className="text-xs xl:text-lg border-b-2 border-b-main-500 dark:border-b-main-100 dark:text-main-100 w-fit">
        Testcases
      </p>
      <div className="flex flex-row gap-2">
        {ExChallenge.tests.map((test, id) => (
          <>
            <button
              key={id}
              className={`px-4 py-2 rounded text-xs xl:text-sm font-medium cursor-pointer 
              ${
                caseId?.id === test.id
                  ? "bg-main-500 text-main-100"
                  : "bg-main-100"
              }`}
              onClick={() => setCaseId(test)}
            >
              Case {test.id}
            </button>
          </>
        ))}
      </div>
      {caseId && (
        <form className="flex flex-col gap-3">
          <div className="gap-1">
            <label htmlFor="input" className="text-md dark:text-main-100">
              Input:
            </label>
            <input
              id="input"
              value={caseId.inputText}
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
              value={caseId.outputText}
              readOnly
              className="bg-main-100  dark:bg-background-500 dark:text-main-100 p-2 rounded-md w-full text-sm xl:text-lg"
            ></input>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              onClick={() => alert("not implemented yet")}
              className="bg-main-100 rounded-md py-1 px-2 w-fit cursor-pointer text-xs xl:text-sm"
            >
              Submit
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
