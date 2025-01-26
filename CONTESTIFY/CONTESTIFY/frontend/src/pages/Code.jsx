/* eslint-disable no-unused-vars */
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Controlled as CodeMirror } from "react-codemirror2";
import "codemirror/lib/codemirror.css";
import "codemirror/mode/javascript/javascript";

const Code = () => {
    const navigate = useNavigate(); // Initialize navigate hook

    return (
        <div className="bg-gray-100 min-h-screen py-8 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">Code Editor</h1>

            {/* Back to Home button */}
            <div className="text-center mb-6">
                <button
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition"
                    onClick={() => navigate("/")} // Navigate to the Home page
                >
                    Back to Home
                </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                <CodeMirror
                    value={`// Write your JavaScript code here...\nconsole.log("Hello, World!");`}
                    options={{
                        mode: "javascript",
                        theme: "default",
                        lineNumbers: true,
                        scrollbarStyle: "null",
                    }}
                    onBeforeChange={(editor, data, value) => {
                        console.log(value);
                    }}
                />
            </div>
        </div>
    );
};

export default Code;
