export const runCode = async (testIndex: number) => {
  try {
    if (language === "javascript") {
      const fn = new Function(`${code}; return solution;`)();
      const input = tests[testIndex].inputText;
      const output = tests[testIndex].outputText;
      const actual = fn(input);
      const passed = actual === output;
      setResults(
        `Input: ${JSON.stringify(
          input
        )}\nOutput: ${output}, Got: ${actual} -> ${
          passed ? "✅ Passed" : "❌ Failed"
        }`
      );
    } else if (language === "python") {
      if (!pyodide) {
        setResults("Python interpreter is still loading...");
        return;
      }
      await pyodide.loadPackagesFromImports(code);
      pyodide.runPython(code);
      const input = tests[testIndex].inputText;
      const actual = pyodide.runPython(`solution(${JSON.stringify(input)})`);
      const output = tests[testIndex].outputText;
      const passed = actual === output;
      setResults(
        `Input: ${JSON.stringify(
          input
        )}\nOutput: ${output}, Got: ${actual} -> ${
          passed ? "✅ Passed" : "❌ Failed"
        }`
      );
    }
  } catch (err) {
    setResults(`Error: ${(err as Error).message}`);
  }
};
