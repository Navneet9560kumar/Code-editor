// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { FiClock, FiAward } from "react-icons/fi";

const ReactChallenge = () => {
  const navigate = useNavigate();

  const challengeDetails = {
    title: "React Challenge",
    timeLeft: "2h 30m",
    description:
      "This challenge focuses on solving advanced problems in React, including state management, hooks, and component optimization.",
    participants: 120,
    rewards: "Top 3 winners will get exclusive React merchandise and certificates!",
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-bold text-indigo-800 mb-6 text-center"
        >
          {challengeDetails.title}
        </motion.h1>

        {/* Challenge Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-gray-700 text-lg">{challengeDetails.description}</p>

          <div className="flex items-center text-indigo-600 text-lg">
            <FiClock className="mr-2" />
            <span className="font-medium">Time Left: {challengeDetails.timeLeft}</span>
          </div>

          <div className="flex items-center text-green-600 text-lg">
            <FiAward className="mr-2" />
            <span className="font-medium">Participants: {challengeDetails.participants}</span>
          </div>

          <div className="bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-md">
            <p className="text-indigo-800 font-medium">{challengeDetails.rewards}</p>
          </div>
        </motion.div>

        {/* Go Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-8 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-6 py-3 bg-indigo-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-indigo-700 transition"
          >
            Go Back
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ReactChallenge;
