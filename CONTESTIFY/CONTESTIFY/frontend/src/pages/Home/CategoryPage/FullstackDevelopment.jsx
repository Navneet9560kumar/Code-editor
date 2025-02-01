// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { FiGlobe, FiDatabase, FiCode, FiUsers, FiLayers } from "react-icons/fi";

const FullstackDevelopment = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: "Frontend Integration",
      description:
        "Learn how to integrate frontend frameworks like React, Angular, and Vue with backend APIs to create seamless user experiences.",
      icon: <FiCode />,
    },
    {
      title: "Backend APIs",
      description:
        "Master building RESTful APIs with Express.js, Django, or Flask to handle application logic and data management.",
      icon: <FiDatabase />,
    },
    {
      title: "Authentication & Authorization",
      description:
        "Implement secure authentication systems using JWT, OAuth, and session-based authentication.",
      icon: <FiUsers />,
    },
    {
      title: "Database Management",
      description:
        "Work with relational and NoSQL databases like MongoDB, PostgreSQL, and MySQL to manage application data.",
      icon: <FiDatabase />,
    },
    {
      title: "Deployment & DevOps",
      description:
        "Deploy full-stack applications using platforms like Vercel, Netlify, AWS, and Docker for scalable solutions.",
      icon: <FiGlobe />,
    },
    {
      title: "State Management",
      description:
        "Handle application state with tools like Redux, MobX, or Context API for efficient data flow.",
      icon: <FiLayers />,
    },
  ];

  const challenges = [
    {
      title: "Build a Fullstack Blog",
      description:
        "Create a blog application with React for the frontend, Node.js for the backend, and MongoDB for storage.",
      difficulty: "Intermediate",
    },
    {
      title: "E-commerce Website",
      description:
        "Develop an online store with features like product listing, cart management, and order processing.",
      difficulty: "Advanced",
    },
    {
      title: "Social Media App",
      description:
        "Build a social media platform with user profiles, posts, likes, and real-time chat.",
      difficulty: "Advanced",
    },
    {
      title: "Portfolio Website",
      description:
        "Design and develop a portfolio site showcasing your projects and skills.",
      difficulty: "Beginner",
    },
    {
      title: "Weather App",
      description:
        "Create a weather application using a public API, React for UI, and Node.js for backend.",
      difficulty: "Intermediate",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-green-50 to-teal-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-extrabold mb-8 text-center text-teal-900"
        >
          Fullstack Development
        </motion.h1>

        {/* Features Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl text-teal-600 mb-4">{feature.icon}</div>
                <h3 className="text-2xl font-bold text-teal-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Challenges Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-teal-800 mb-6">Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <h3 className="text-2xl font-bold text-teal-800 mb-2">{challenge.title}</h3>
                <p className="text-gray-600 mb-2">{challenge.description}</p>
                <span className="text-teal-600 font-medium">Difficulty: {challenge.difficulty}</span>
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
            className="px-8 py-3 bg-teal-600 text-white text-lg font-medium rounded-full shadow-md hover:bg-teal-700 transition"
          >
            Go Back
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default FullstackDevelopment;
