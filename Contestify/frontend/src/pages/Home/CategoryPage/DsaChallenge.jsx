// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiCheckCircle } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const dsaTopics = [
  "Arrays & Strings",
  "Linked Lists",
  "Stacks & Queues",
  "Binary Trees",
  "Graphs",
  "Dynamic Programming",
  "Sorting & Searching",
  "Bit Manipulation",
  "Recursion",
  "Backtracking",
  "Hashing",
];

const languages = [
  { name: "C++", icon: "🔵" },
  { name: "Java", icon: "☕" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "🟨" },
  { name: "Go", icon: "🚀" },
  { name: "Ruby", icon: "💎" },
];

const DSAChallenge = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gradient-to-r from-green-50 to-green-100 min-h-screen py-12 px-6 sm:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-8 text-center text-green-900"
        >
          DSA Challenge
        </motion.h1>
        <h2 className="text-3xl font-bold mb-6 text-green-800">
          Current DSA Challenge
        </h2>
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-2xl font-bold text-green-900 mb-2">
            Today's contest
          </h3>
          <p className="text-gray-700 mb-4">
            solve questions, compete with others and see your ranking ,evaluate
            your coding skills
          </p>
          <div className="flex items-center text-green-600 mb-2">
            <FiClock className="mr-2" />
            <span className="font-medium">Time Left: 3h 20m</span>
          </div>
          <button
            className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full shadow-md hover:bg-green-700 transition"
            onClick={() => navigate("/contest/dsa/contestrules")}
          >
            Start Challenge
          </button>
        </div>
        <br></br>
        {/* Languages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-green-800">
            Languages for DSA
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {languages.map((lang, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center text-green-700 font-bold text-lg"
              >
                <span className="mr-2 text-2xl">{lang.icon}</span>
                {lang.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Topics Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold mb-4 text-green-800">
            Core DSA Topics
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {dsaTopics.map((topic, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-lg text-green-900 font-medium"
              >
                <FiCheckCircle className="inline mr-2 text-green-600" />
                {topic}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* Challenge Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>
      </div>
    </div>
  );
};

export default DSAChallenge;
