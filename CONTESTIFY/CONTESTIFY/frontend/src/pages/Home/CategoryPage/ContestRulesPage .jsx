// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// eslint-disable-next-line no-unused-vars
import { FiAlertTriangle, FiCheckSquare, FiLock, FiArrowRight, FiInfo, FiAward, FiUser } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ContestRulesPage = () => {
  const [isAgreed, setIsAgreed] = useState(false);
  const navigate = useNavigate();

  const contestDetails = [
    {
      icon: <FiInfo className="text-blue-500" />,
      title: "Contest Overview",
      content: "The DSA Coding Challenge is a 3-hour competitive programming event focusing on data structures and algorithms. Participants will solve 7 problems of varying difficulty levels to test their problem-solving skills and coding efficiency."
    },
    {
      icon: <FiUser className="text-green-500" />,
      title: "Eligibility",
      content: "Open to all developers and students aged 16+. Individual participation only - team entries are not allowed. Basic programming knowledge and familiarity with any programming language is required."
    }
  ];

  const rules = [
    {
      icon: <FiLock className="text-red-500" />,
      text: "Code copying/pasting disabled once contest starts - original solutions only",
    },
    {
      icon: <FiAlertTriangle className="text-yellow-500" />,
      text: "Karma system disabled: No penalties for incorrect submissions",
    },
    {
      icon: <FiLock className="text-red-500" />,
      text: "Tab switching limit: Maximum 3 times before automatic submission",
    },
    {
      icon: <FiAward className="text-purple-500" />,
      text: "Scoring: Points based on problem difficulty and submission time",
    },
    {
      icon: <FiAlertTriangle className="text-yellow-500" />,
      text: "Submission lock: Once submitted, solutions cannot be modified",
    },
    {
      icon: <FiLock className="text-red-500" />,
      text: "Network stability: Multiple disconnections may lead to attempt penalties",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-8 flex items-center justify-center">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl w-full"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-6 flex items-center">
          <FiAlertTriangle className="mr-4 text-orange-500" />
          DSA Coding Challenge 2024 - Rules & Guidelines
        </h1>

        {/* Contest Details Section */}
        <div className="mb-12 space-y-6">
          {contestDetails.map((detail, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-300"
            >
              <div className="flex items-start mb-2">
                <span className="text-2xl mt-1 mr-4">{detail.icon}</span>
                <h3 className="text-xl font-semibold text-gray-800">{detail.title}</h3>
              </div>
              <p className="text-gray-700 pl-10">{detail.content}</p>
            </motion.div>
          ))}
        </div>

        {/* Rules Section */}
        <div className="space-y-6 mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Competition Rules</h2>
          {rules.map((rule, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300"
            >
              <span className="text-2xl mt-1 mr-4">{rule.icon}</span>
              <p className="text-lg text-gray-700">{rule.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="my-8 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-300">
          <div className="flex items-start">
            <FiInfo className="text-2xl mt-1 mr-4 text-yellow-500" />
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Scoring & Rankings</h3>
              <p className="text-gray-700">
                • Problems scored by difficulty (100-500 points)<br/>
                • Time bonus: 10% extra points for early submissions<br/>
                • Final ranking based on total points + time bonus<br/>
                • Tie-breaker: Accuracy rate and submission timestamp
              </p>
            </div>
          </div>
        </div>

        {/* Agreement Section */}
        <motion.div 
          className="flex items-center gap-4 mb-8"
          whileHover={{ scale: 1.02 }}
        >
          <input
            type="checkbox"
            id="agreeCheckbox"
            checked={isAgreed}
            onChange={(e) => setIsAgreed(e.target.checked)}
            className="w-6 h-6 accent-indigo-600 cursor-pointer"
          />
          <label 
            htmlFor="agreeCheckbox" 
            className="text-lg text-gray-700 cursor-pointer"
          >
            I acknowledge and agree to all competition rules and terms
          </label>
        </motion.div>

        <AnimatePresence>
          {isAgreed && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/DSAContest")}
              className="w-full bg-indigo-600 text-white py-4 text-xl font-semibold rounded-xl flex items-center justify-center gap-2"
            >
              Begin Challenge
              <FiArrowRight className="text-2xl" />
            </motion.button>
          )}
        </AnimatePresence>

        <p className="text-sm text-gray-500 mt-6 text-center">
          * The organizers reserve the right to disqualify any participant found violating competition rules.
          All decisions by the judging panel will be final and binding.
        </p>
      </motion.div>
    </div>
  );
};

export default ContestRulesPage;