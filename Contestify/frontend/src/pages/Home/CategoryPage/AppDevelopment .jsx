/* eslint-disable react/jsx-no-undef */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiSmartphone, FiLayers, FiCode, FiUsers, FiDatabase, FiGlobe } from "react-icons/fi";


const AppDevelopment = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Cross-Platform Development",
      description:
        "Learn how to develop mobile apps that work seamlessly across iOS and Android using tools like React Native and Flutter.",
      icon: <FiSmartphone />,
    },
    {
      title: "User Interface Design",
      description:
        "Master designing intuitive and responsive user interfaces with tools like Figma, Sketch, and Adobe XD.",
      icon: <FiLayers />,
    },
    {
      title: "Backend Integration",
      description:
        "Integrate your app with powerful backend services using Node.js, Express.js, or Firebase to handle data and authentication.",
      icon: <FiDatabase />,
    },
    {
      title: "Authentication & Security",
      description:
        "Implement secure login systems using Firebase Auth, OAuth, and other modern authentication methods.",
      icon: <FiUsers />,
    },
    {
      title: "Deployment & Publishing",
      description:
        "Deploy your app to the Google Play Store or Apple App Store and manage updates using platforms like Expo, Firebase, or Docker.",
      icon: <FiGlobe />,
    },
    {
      title: "State Management",
      description:
        "Handle complex app states and data flow using Redux, MobX, or Context API.",
      icon: <FiCode />,
    },
  ];

  const challenges = [
    {
      title: "Build a To-Do App",
      description:
        "Create a simple to-do application with React Native, featuring add, edit, and delete tasks.",
      difficulty: "Beginner",
    },
    {
      title: "Weather App",
      description:
        "Develop a weather app that fetches data from a public API and displays it in a user-friendly interface.",
      difficulty: "Intermediate",
    },
    {
      title: "Social Media App",
      description:
        "Create a social media app with features like user profiles, posts, likes, and chat.",
      difficulty: "Advanced",
    },
    {
      title: "E-commerce App",
      description:
        "Build a complete e-commerce app with product catalog, cart management, and order processing.",
      difficulty: "Advanced",
    },
    {
      title: "Portfolio App",
      description:
        "Create a portfolio app to showcase your projects and skills in a professional manner.",
      difficulty: "Beginner",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-8 text-center text-indigo-900"
        >
          App Development
        </motion.h1>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl text-indigo-600 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-indigo-800 mb-6">Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold text-indigo-800 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 mb-2">{challenge.description}</p>
                <span className="text-indigo-600 font-medium">Difficulty: {challenge.difficulty}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Go Back Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-12 flex justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(-1)}
            className="px-8 py-3 bg-indigo-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-indigo-700 transition"
          >
            Go Back
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default AppDevelopment;
