// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Sheet = () => {
    const navigate = useNavigate(); // Initialize navigate hook

    const categories = [
        { name: "Arrays", problems: 12 },
        { name: "Strings", problems: 8 },
        { name: "Graphs", problems: 15 },
        { name: "Dynamic Programming", problems: 20 },
        { name: "Greedy Algorithms", problems: 10 },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-8 px-4">
            <h1 className="text-3xl font-bold mb-6 text-center">DSA Sheet</h1>

            {/* Back to Home button */}
            <div className="text-center mb-8">
                <button
                    className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-indigo-700 transition"
                    onClick={() => navigate("/")} // Navigate to the Home page
                >
                    Back to Home
                </button>
            </div>

            <div className="space-y-4">
                {categories.map((category, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-xl font-semibold">{category.name}</h2>
                        <p className="text-gray-600">Problems to solve: {category.problems}</p>
                        <button className="mt-4 bg-blue-600 text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition">
                            Start Solving
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Sheet;
