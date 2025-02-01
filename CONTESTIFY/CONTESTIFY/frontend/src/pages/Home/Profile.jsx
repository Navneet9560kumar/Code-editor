// eslint-disable-next-line no-unused-vars
import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { FaTrophy, FaUserAlt, FaCheckCircle, FaRegClock } from "react-icons/fa";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const Profile = () => {
  const navigate = useNavigate(); // Initialize navigate hook

  // Dummy data for the profile page
  const stats = {
    contestsParticipated: 5,
    highestScore: 100,
    ranking: "1st",
    completedContests: 3,
    solvedQuestions: 120,
  };

  // Pie Chart data
  const chartData = {
    labels: ["Solved", "Remaining"],
    datasets: [
      {
        label: "Questions Solved",
        data: [stats.solvedQuestions, 1000 - stats.solvedQuestions],
        backgroundColor: ["#4CAF50", "#D32F2F"],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-4xl p-8 bg-white rounded-xl shadow-xl mt-8 flex flex-col lg:flex-row">
        {/* Left Section (Profile and Stats) */}
        <div className="w-full lg:w-2/3 mb-12 lg:mb-0">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-12">
            <div className="w-24 h-24 bg-gradient-to-r from-indigo-500 to-blue-500 p-1 rounded-full shadow-xl">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-7MbEDBGUV0eqfdngw6YpX92x6zRtpW2gkA&s"
                alt="User"
                className="w-full h-full object-cover rounded-full border-4 border-white"
              />
            </div>
            <h1 className="text-3xl font-semibold mt-4 text-gray-900">
              John Doe
            </h1>
            <p className="text-gray-600">john@example.com</p>
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-between">
              <div className="text-center">
                <FaTrophy className="text-4xl text-yellow-500 mb-4" />
                <h3 className="text-xl font-medium">Contests Participated</h3>
                <p className="text-gray-700">{stats.contestsParticipated}</p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-between">
              <div className="text-center">
                <FaCheckCircle className="text-4xl text-green-500 mb-4" />
                <h3 className="text-xl font-medium">Highest Score</h3>
                <p className="text-gray-700">{stats.highestScore}</p>
              </div>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md flex items-center justify-between">
              <div className="text-center">
                <FaUserAlt className="text-4xl text-blue-500 mb-4" />
                <h3 className="text-xl font-medium">Ranking</h3>
                <p className="text-gray-700">{stats.ranking}</p>
              </div>
            </div>
          </div>

          {/* Activity Section */}
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Recent Activity
            </h2>
            <ul className="space-y-4">
              <li className="flex items-center">
                <FaRegClock className="text-gray-500 mr-4" />
                <span className="text-gray-700">
                  Completed a contest on &#34;Dynamic Programming&#34; - 2 days ago
                </span>
              </li>
              <li className="flex items-center">
                <FaRegClock className="text-gray-500 mr-4" />
                <span className="text-gray-700">
                  Solved &#34;Graph Theory&rdquo; problem - 4 days ago
                </span>
              </li>
              <li className="flex items-center">
                <FaRegClock className="text-gray-500 mr-4" />
                <span className="text-gray-700">
                  Participated in &rdquo;JavaScript Challenge&#34; - 1 week ago
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Section (Pie Chart) */}
        <div className="w-full lg:w-1/3">
          <div className="bg-gray-100 p-8 rounded-lg shadow-md mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">
              Questions Solved
            </h2>
            <div className="flex justify-center">
              <Pie data={chartData} width={150} height={150} />
            </div>
            <p className="text-center mt-4 text-gray-700">
              Total Solved: {stats.solvedQuestions}
            </p>
          </div>
        </div>
      </div>

      {/* Action Section */}
      <div className="text-center mt-6">
        <button
          className="mb-6 py-3 px-6 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition duration-300"
          onClick={() => navigate("/")} // Navigate to the Home page
        >
          Back to Home
        </button>
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-300">
          Edit Profile
        </button>
      </div>
    </div>
  );
};

export default Profile;
