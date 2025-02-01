// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { FiClock, FiUsers } from "react-icons/fi";

const CSSChallenge = () => {
  return (
    <div className="bg-gradient-to-br from-pink-50 to-purple-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-8 text-center text-purple-900"
        >
          CSS Battle Challenge
        </motion.h1>

        {/* Challenge Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-xl shadow-xl"
        >
          <h2 className="text-3xl font-bold text-purple-800 mb-4">Challenge Overview</h2>
          <p className="text-gray-700 mb-6">
            Test your CSS skills by replicating pixel-perfect designs. This challenge
            will push your creativity and precision to the next level. Compete with
            other developers and climb the leaderboard!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="flex items-center">
              <FiClock className="text-purple-600 text-2xl mr-4" />
              <div>
                <h4 className="text-lg font-medium text-gray-800">Time Left</h4>
                <p className="text-purple-700">1 hour 45 minutes</p>
              </div>
            </div>
            <div className="flex items-center">
              <FiUsers className="text-green-600 text-2xl mr-4" />
              <div>
                <h4 className="text-lg font-medium text-gray-800">Participants</h4>
                <p className="text-green-700">85 developers</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Tips Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-xl shadow-md"
        >
          <h2 className="text-2xl font-bold text-purple-800 mb-4">Tips for Success</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li className="mb-2">Analyze the design thoroughly before coding.</li>
            <li className="mb-2">Use browser dev tools to inspect elements and refine your CSS.</li>
            <li className="mb-2">Pay attention to details like spacing, alignment, and colors.</li>
            <li>Share your progress and learn from other participants.</li>
          </ul>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-purple-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-purple-700 transition"
          >
            Join the Challenge
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default CSSChallenge;
