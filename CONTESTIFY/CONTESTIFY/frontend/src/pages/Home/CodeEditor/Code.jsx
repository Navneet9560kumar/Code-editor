import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Split from "react-split";
import { ArrowLeft, User, ChevronDown } from "lucide-react";
import Editor from "@monaco-editor/react";

const Code = () => {
  const navigate = useNavigate();
  const [language, setLanguage] = useState("javascript"); // Default language

  // Dropdown options for languages
  const languages = [
    { value: "javascript", label: "JavaScript" },
    { value: "python", label: "Python" },
    { value: "java", label: "Java" },
    { value: "cpp", label: "C++" },
    { value: "react", label: "React" },
  ];

  return (
    <div className="bg-[#131313] text-white min-h-screen py-3 px-3">
      {/* Top Bar */}
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

        {/* Language Dropdown */}
        <div className="relative">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-[#262626] text-white px-4 py-2 rounded-md appearance-none focus:outline-none cursor-pointer"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
          <ChevronDown
            size={20}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none text-white"
          />
        </div>

        {/* Run and Submit Buttons */}
        <div className="flex gap-2">
          <button className="bg-[#262626] px-6 py-2 rounded-md hover:bg-gray-700 transition">
            Run
          </button>
          <button className="bg-[#262626] px-6 py-2 rounded-md hover:bg-gray-700 transition">
            Submit
          </button>
        </div>

        {/* User Icon */}
        <div className="cursor-pointer hover:text-gray-400">
          <User size={24} />
        </div>
      </div>

      {/* Problem & Code Section */}
      <Split
        className="flex h-[calc(100vh-60px)]"
        sizes={[40, 60]}
        minSize={300}
        gutterSize={8}
        cursor="col-resize"
      >
        {/* Problem Statement */}
        <div className="bg-[#262626] p-4 overflow-auto">
          <h2 className="text-xl font-bold mb-3">Problem Statement</h2>
          <p>
            2698. Find the Punishment Number of an Integer
            <br />
            Given a positive integer n, return the punishment number of n. The
            decimal representation of i * i can be partitioned into contiguous
            substrings such that the sum of the integer values of these
            substrings equals i.
          </p>
        </div>

        {/* Code Editor and Test Cases */}
        <Split
          className="flex flex-col w-full"
          sizes={[75, 25]} // Top 75%, Bottom 25%
          minSize={100}
          gutterSize={8}
          cursor="row-resize"
          direction="vertical"
        >
          {/* Code Editor */}
          <div className="bg-[#1e1e1e] h-full">
            <Editor
              height="100%"
              language={language} // Dynamically set language
              defaultValue="// Write your code here"
              theme="vs-dark"
            />
          </div>

          {/* Test Cases */}
          <div className="bg-[#262626] h-full p-4">Test Cases</div>
        </Split>
      </Split>
    </div>
  );
};

export default Code;