// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiDatabase, FiCode, FiServer, FiCloud, FiLock } from "react-icons/fi";

const BackendDevelopment = () => {
  const navigate = useNavigate();

  const backendTopics = [
    {
      title: "Node.js",
      description: "Learn server-side JavaScript for building scalable applications.",
      icon: <FiServer className="text-indigo-600 text-3xl" />,
    },
    {
      title: "Express.js",
      description: "A lightweight framework for building APIs and web apps.",
      icon: <FiCode className="text-green-600 text-3xl" />,
    },
    {
      title: "Databases",
      description: "Explore SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases.",
      icon: <FiDatabase className="text-blue-600 text-3xl" />,
    },
    {
      title: "Authentication",
      description: "Implement secure authentication using OAuth, JWT, and more.",
      icon: <FiLock className="text-red-600 text-3xl" />,
    },
    {
      title: "Cloud Integration",
      description: "Deploy and manage apps using AWS, Azure, or Google Cloud.",
      icon: <FiCloud className="text-yellow-600 text-3xl" />,
    },
    {
      title: "Microservices",
      description: "Design and deploy scalable microservice architectures.",
      icon: <FiServer className="text-purple-600 text-3xl" />,
    },
  ];

  const challenges = [
    {
      title: "RESTful API Challenge",
      description: "Build a REST API for a blog application with authentication.",
      difficulty: "Intermediate",
      participants: 120,
    },
    {
      title: "Database Optimization",
      description: "Optimize queries and schema design for a large dataset.",
      difficulty: "Advanced",
      participants: 95,
    },
    {
      title: "Microservices Architecture",
      description: "Develop and deploy a set of microservices for an e-commerce app.",
      difficulty: "Expert",
      participants: 50,
    },
  ];

  return (
    <div className="bg-gradient-to-br from-gray-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-8 text-center text-indigo-900"
        >
          Backend Development
        </motion.h1>

        {/* Topics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {backendTopics.map((topic, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-xl flex items-center space-x-4 cursor-pointer"
            >
              {topic.icon}
              <div>
                <h2 className="text-xl font-bold text-indigo-800 mb-1">{topic.title}</h2>
                <p className="text-gray-600 text-sm">{topic.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Challenges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">Current Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-xl"
              >
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">
                  {challenge.title}
                </h3>
                <p className="text-gray-600 mb-4">{challenge.description}</p>
                <div className="flex justify-between items-center text-sm text-gray-700">
                  <span className="font-medium">{challenge.difficulty}</span>
                  <span>{challenge.participants} participants</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Go to Home Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/")}
            className="px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-indigo-700 transition"
          >
            Go to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default BackendDevelopment;
