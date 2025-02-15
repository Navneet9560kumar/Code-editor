import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Split from "react-split";
import { ArrowLeft, User, RefreshCw, Play, Upload } from "lucide-react";
import Editor from "@monaco-editor/react";

const languages = [
  { label: "JavaScript", value: "javascript" },
  { label: "Python", value: "python" },
  { label: "C++", value: "cpp" },
  { label: "Java", value: "java" },
];

const Code = () => {
  const navigate = useNavigate();
  const [code, setCode] = useState("// Write your code here");
  const [selectedLang, setSelectedLang] = useState("java");

  // Function to refresh/reset editor
  const handleRefresh = () => {
    setCode("// Write your code here"); // Reset editor content
  };

  return (
    <div className="bg-[#131313] text-white min-h-screen py-3 px-3">
      {/* Top Navbar */}
      <div className="flex items-center justify-between px-4 py-3 bg-[#111111]">
        <div className="flex items-center gap-3">
          <button
            className="text-white px-3 py-2 rounded-md font-semibold shadow-md hover:bg-gray-800 transition"
            onClick={() => navigate("/")}
          >
            <ArrowLeft size={20} />
          </button>
          <h1 className="text-2xl font-bold">Problems</h1>
        </div>

        <div className="flex gap-2">
          <button className="bg-[#262626] px-6 py-2 rounded-md hover:bg-gray-700 transition flex items-center gap-2">
            <Play size={20} /> Run
          </button>
          <button className="bg-[#262626] px-6 py-2 rounded-md hover:bg-gray-700 transition flex items-center gap-2">
            <Upload size={20} /> Submit
          </button>
          <button
            className="bg-[#262626] px-6 py-2 rounded-md hover:bg-gray-700 transition flex items-center gap-2"
            onClick={handleRefresh}
          >
            <RefreshCw size={20} /> Refresh
          </button>
        </div>

        <div className="cursor-pointer hover:text-gray-400">
          <User size={24} />
        </div>
      </div>

      {/* Main Split Layout */}
      <Split
        className="flex h-[calc(100vh-60px)]"
        sizes={[40, 60]}
        minSize={300}
        gutterSize={8}
        cursor="col-resize"
      >
        {/* Left Panel (Problem Statement) */}
        <div className="bg-[#262626] p-4 overflow-auto">
          <h1 className="text-3xl font-bold mb-3">
            2698. Find the Punishment Number of an Integer
          </h1>
          <button className="text-yellow-600 bg-[#E5E1A8] bg-opacity-15 rounded-md px-2">
            Medium
          </button>
          <p>
            Given a positive integer n, return the punishment number of n. The
            decimal representation of i * i can be partitioned into contiguous
            substrings such that the sum of the integer values of these
            substrings equals i.
          </p>
          <p>
            <br />
            <b>Example 1</b>: <br />
            <b>Input:</b> n = 10 <br />
            <b>Output:</b> 182 <br />
            <b>Explanation:</b>{" "}
            <p className="text-gray-300">
              There are exactly 3 integers i in the range [1, 10] that satisfy
              the conditions in the statement: - 1 since 1 * 1 = 1 - 9 since 9 *
              9 = 81 and 81 can be partitioned into 8 and 1 with a sum equal to
              8 + 1 == 9. - 10 since 10 * 10 = 100 and 100 can be partitioned
              into 10 and 0 with a sum equal to 10 + 0 == 10. Hence, the
              punishment number of 10 is 1 + 81 + 100 = 182
            </p>
          </p>
        </div>

        {/* Right Panel (Code Editor & Test Cases) */}
        <Split
          className="flex flex-col w-full h-full"
          sizes={[75, 25]}
          minSize={50}
          gutterSize={8}
          cursor="row-resize"
          direction="vertical"
        >
          {/* Code Editor Section */}
          <div className="flex flex-col bg-[#1e1e1e] h-full">
            {/* Language Selector in the Top-Left Corner */}
            <div className="w-full">
              <select
                className="bg-[#262626] text-white px-4 py-2 rounded-md outline-none cursor-pointer"
                value={selectedLang}
                onChange={(e) => setSelectedLang(e.target.value)}
              >
                {languages.map((lang) => (
                  <option key={lang.value} value={lang.value}>
                    {lang.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Code Editor */}
            <Editor
              height="100%"
              defaultLanguage="javascript"
              value={code}
              onChange={(value) => setCode(value)}
              theme="vs-dark"
            />
          </div>

          {/* Test Cases Section */}
          <div className="bg-[#262626] min-h-[100px] p-4 overflow-auto">
            <h2 className="text-lg font-semibold">Test Cases</h2>
            <p className="text-gray-300">Write your test cases here...</p>
          </div>
        </Split>
      </Split>
    </div>
  );
};

export default Code;
