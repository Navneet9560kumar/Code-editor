// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiClock, FiAward, FiCalendar } from "react-icons/fi";

const contestCategories = [
  {
    title: "DSA",
    description:
      "Solve coding problems based on algorithms and data structures.",
    icon: "📚",
    link: "/contest/dsa",
  },
  {
    title: "Frontend Development",
    description:
      "Challenges related to HTML, CSS, JavaScript, and frameworks like React.",
    icon: "💻",
    link: "/contest/frontend",
  },
  {
    title: "Backend Development",
    description: "Backend coding challenges in Node.js, Python, Java, etc.",
    icon: "🔧",
    link: "/contest/backenddev",
  },
  {
    title: "Full-stack Development",
    description: "MERN, MEAN, LAMP stack challenges.",
    icon: "🖥",
    link: "/contest/fullstackdev",
  },
  {
    title: "Mobile Development",
    description:
      "Challenges for Android, iOS, and cross-platform mobile development.",
    icon: "📱",
    link: "/contest/mobiledev",
  },
  
];

const Contest = () => {
  const [activeTab, setActiveTab] = useState("Ongoing");
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const contests = {
    Ongoing: [
      {
        title: "React Challenge",
        timeLeft: "2h 30m",
        description: "Solve advanced React problems.",
        participants: 120,
        link: "/contest/ReactChallenge",
      },
      {
        title: "CSS Battle",
        timeLeft: "1h 45m",
        description: "Create pixel-perfect designs with CSS.",
        participants: 85,
      },
    ],
    Upcoming: [
      {
        title: "JavaScript Mastery",
        timeLeft: "5 days",
        description: "Test your JavaScript skills.",
        participants: 200,
      },
      {
        title: "Python Coding Sprint",
        timeLeft: "2 days",
        description: "Showcase your Python expertise.",
        participants: 150,
      },
    ],
    Completed: [
      {
        title: "Data Structures Contest",
        timeLeft: "Completed",
        description: "Master Data Structures.",
        participants: 180,
      },
      {
        title: "Algorithm Challenge",
        timeLeft: "Completed",
        description: "Optimize complex algorithms.",
        participants: 130,
      },
    ],
  };

  const filteredContests = contests[activeTab]?.filter((contest) =>
    contest.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    document.title = `contests - ${activeTab}`;
  }, [activeTab]);

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-8 text-center text-indigo-900"
        >
          Coding Contests
        </motion.h1>

        {/* Tabs and Search */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
          <div className="flex justify-center mb-4 sm:mb-0">
            {["Ongoing", "Upcoming", "Completed"].map((tab) => (
              <motion.button
                key={tab}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 mx-2 text-lg font-medium rounded-full transition ${
                  activeTab === tab
                    ? "bg-indigo-600 text-white shadow-lg"
                    : "bg-white text-indigo-600 hover:bg-indigo-100"
                }`}
              >
                {tab}
              </motion.button>
            ))}
          </div>
          <div className="w-full sm:w-64">
            <input
              type="text"
              placeholder="Search contests..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-full border-2 border-indigo-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Contest Cards */}
        <AnimatePresence>
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredContests.map((contest, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                className="bg-white p-6 rounded-xl shadow-xl"
              >
                <h2 className="text-2xl font-bold text-indigo-800 mb-2">
                  {contest.title}
                </h2>
                <p className="text-gray-600 mb-4">{contest.description}</p>
                <div className="flex items-center text-indigo-600 mb-2">
                  <FiClock className="mr-2" />
                  <span className="font-medium">{contest.timeLeft}</span>
                </div>
                <div className="flex items-center text-green-600">
                  <FiAward className="mr-2" />
                  <span className="font-medium">
                    {contest.participants} participants
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredContests.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-600 mt-8"
          >
            No contests found. Try a different search term.
          </motion.p>
        )}

        {/* Contest Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold mb-6 text-indigo-900">
            Explore Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contestCategories.map((category, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.03 }}
                onClick={() => navigate(category.link)}
                className="bg-white p-6 rounded-xl shadow-xl cursor-pointer"
              >
                <h3 className="text-2xl font-bold text-indigo-800 mb-2 flex items-center">
                  <span className="mr-2">{category.icon}</span>
                  {category.title}
                </h3>
                <p className="text-gray-600">{category.description}</p>
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
            className="px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-indigo-700 transition flex items-center"
          >
            <FiCalendar className="mr-2" />
            Go to Home
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Contest;