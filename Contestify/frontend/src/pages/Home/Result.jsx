import React from "react";

const Result = () => {
    const results = [
        { rank: 1, name: "John Doe", score: 100 },
        { rank: 2, name: "Jane Smith", score: 95 },
        { rank: 3, name: "Alice Johnson", score: 90 },
    ];

    return (
        <div className="bg-gray-100 min-h-screen py-8 px-4">
            <h1 className="text-4xl font-bold mb-6 text-center">Contest Results</h1>
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <table className="w-full table-auto">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="py-3 px-4">Rank</th>
                            <th className="py-3 px-4">Name</th>
                            <th className="py-3 px-4">Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result, index) => (
                            <tr
                                key={index}
                                className={`text-center ${index % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}
                            >
                                <td className="py-3 px-4">{result.rank}</td>
                                <td className="py-3 px-4">{result.name}</td>
                                <td className="py-3 px-4">{result.score}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Result;
