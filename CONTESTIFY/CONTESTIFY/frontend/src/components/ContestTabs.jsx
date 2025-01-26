/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react"
// eslint-disable-next-line no-unused-vars
import { FiClock, FiAward } from "react-icons/fi"
import { useNavigate } from "react-router-dom"
import ContestCard from "./ContestCard"

const ContestTabs = ({ activeTab, setActiveTab, contests, category }) => {
  const tabs = ["Ongoing", "Upcoming", "Completed"]
  const navigate = useNavigate()

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-center space-x-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full ${
              activeTab === tab ? "bg-indigo-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {contests[activeTab].map((contest, index) => (
          <ContestCard key={index} contest={contest} onClick={() => navigate(`/category/${category}/${contest.id}`)} />
        ))}
      </div>
    </div>
  )
}

export default ContestTabs

