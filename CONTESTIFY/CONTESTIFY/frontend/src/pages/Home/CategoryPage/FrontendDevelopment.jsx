// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { FiCode, FiMonitor, FiSettings } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const FrontendDevelopment = () => {
  const navigate = useNavigate();

  const topics = [
    {
      title: "HTML Basics",
      description: "Learn the foundation of web development with HTML.",
      icon: <FiCode />,
    },
    {
      title: "CSS Styling",
      description: "Master CSS to create beautiful, responsive designs.",
      icon: <FiMonitor />,
    },
    {
      title: "JavaScript",
      description: "Add interactivity and dynamic behavior to your web pages.",
      icon: <FiSettings />,
    },
    {
      title: "React.js",
      description: "Build modern, fast, and scalable frontend applications.",
      icon: <FiCode />,
    },
    {
      title: "Tailwind CSS",
      description: "Style your applications faster with utility-first CSS.",
      icon: <FiMonitor />,
    },
    {
      title: "Next.js",
      description: "Learn server-side rendering and static site generation.",
      icon: <FiSettings />,
    },
    {
      title: "Frontend Performance",
      description: "Optimize your web apps for speed and performance.",
      icon: <FiCode />,
    },
    {
      title: "Accessibility",
      description: "Ensure your web apps are accessible to everyone.",
      icon: <FiMonitor />,
    },
    {
      title: "Testing Frontend Apps",
      description: "Write tests for your React and frontend code.",
      icon: <FiSettings />,
    },
  ];

  const currentChallenge = {
    title: "Build a Portfolio Website",
    description: "Create a stunning personal portfolio using HTML, CSS, and JavaScript.",
    deadline: "2 Days Left",
    participants: 150,
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-green-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-8 text-center text-green-900"
        >
          Frontend Development
        </motion.h1>

        {/* Current Challenge */}
        <div className="bg-white p-6 rounded-xl shadow-md mb-12">
          <h2 className="text-3xl font-bold text-green-800 mb-4">Current Challenge</h2>
          <p className="text-lg text-gray-700 mb-2">{currentChallenge.title}</p>
          <p className="text-gray-600 mb-2">{currentChallenge.description}</p>
          <p className="text-green-600 font-medium">Deadline: {currentChallenge.deadline}</p>
          <p className="text-indigo-600 font-medium">
            {currentChallenge.participants} participants already joined!
          </p>
        </div>

        {/* Topics */}
        <div>
          <h2 className="text-3xl font-bold text-green-900 mb-6">Explore Frontend Topics</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-md cursor-pointer"
                onClick={() => navigate(`/frontend/${topic.title.toLowerCase().replace(/ /g, "-")}`)}
              >
                <h3 className="text-2xl font-bold text-green-800 mb-2 flex items-center">
                  <span className="mr-2 text-green-600 text-3xl">{topic.icon}</span>
                  {topic.title}
                </h3>
                <p className="text-gray-600">{topic.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

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
            className="px-8 py-3 bg-green-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-green-700 transition flex items-center"
          >
            Go to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FrontendDevelopment;
