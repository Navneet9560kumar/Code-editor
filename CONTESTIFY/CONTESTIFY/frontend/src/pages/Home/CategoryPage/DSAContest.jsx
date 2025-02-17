// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiCode, FiClock, FiStar } from "react-icons/fi";

const DSAContest = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(0);
  
  // 7 DSA questions ka array
  const questions = [
    {
      title: "Two Sum",
      difficulty: "Easy",
      points: 100,
      description: "Find two numbers that add up to a target",
      testCases: 5,
    },
    {
      title: "Reverse Linked List",
      difficulty: "Medium",
      points: 200,
      description: "Reverse a singly linked list",
      testCases: 3,
    },
    {
      title: "Binary Tree Traversal",
      difficulty: "Hard",
      points: 300,
      description: "Implement inorder traversal without recursion",
      testCases: 4,
    },
    {
      title: "Merge Sort",
      difficulty: "Medium",
      points: 250,
      description: "Implement merge sort algorithm",
      testCases: 6,
    },
    {
      title: "Matrix Rotation",
      difficulty: "Hard",
      points: 400,
      description: "Rotate matrix 90 degrees clockwise",
      testCases: 5,
    },
    {
      title: "Palindrome Check",
      difficulty: "Easy",
      points: 150,
      description: "Check if string is palindrome",
      testCases: 3,
    },
    {
      title: "Graph BFS",
      difficulty: "Medium",
      points: 350,
      description: "Implement Breadth First Search",
      testCases: 4,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900 text-white p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-8 flex items-center"
        >
          <FiCode className="mr-4" /> DSA Coding Challenge
        </motion.h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Questions List */}
          <div className="lg:col-span-1 space-y-4">
            {questions.map((q, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className={`p-4 rounded-lg cursor-pointer ${
                  selectedQuestion === index
                    ? "bg-blue-600"
                    : "bg-gray-800 hover:bg-gray-700"
                }`}
                onClick={() => setSelectedQuestion(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-semibold">{q.title}</h3>
                  <span className={`badge ${
                    q.difficulty === 'Easy' ? 'bg-green-500' : 
                    q.difficulty === 'Medium' ? 'bg-yellow-500' : 'bg-red-500'
                  } px-2 py-1 rounded-full text-sm`}>
                    {q.difficulty}
                  </span>
                </div>  
                <div className="mt-2 flex items-center text-sm">
                  <FiStar className="mr-1" /> {q.points} Points
                </div>
              </motion.div>
            ))}
          </div>

          {/* Selected Question Details */}
          <div className="lg:col-span-2 bg-gray-800 p-6 rounded-xl">
            <motion.div 
              key={selectedQuestion}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              <div className="flex justify-between items-start mb-6">
                <h2 className="text-3xl font-bold">
                  {questions[selectedQuestion].title}
                </h2>
                <div className="flex items-center">
                  <FiClock className="mr-2" />
                  <span>45:00</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Description</h4>
                  <p>{questions[selectedQuestion].description}</p>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Sample Input</h4>
                  <code className="block bg-gray-900 p-2 rounded mt-2">
                    nums = [2,7,11,15], target = 9
                  </code>
                </div>

                <div className="bg-gray-700 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">Test Cases</h4>
                  <div className="grid grid-cols-2 gap-4">
                    {[...Array(questions[selectedQuestion].testCases)].map((_, i) => (
                      <div key={i} className="bg-gray-600 p-2 rounded">
                        Case {i+1}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Code Editor Section */}
                <div className="bg-gray-900 p-4 rounded-lg">
                  <h4 className="text-xl font-semibold mb-4">Write Your Code</h4>
                  <textarea
                    className="w-full h-48 bg-gray-800 text-white p-4 rounded font-mono"
                    placeholder="// Write your code here"
                  />
                  <button className="mt-4 bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full">
                    Submit Code
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSAContest;