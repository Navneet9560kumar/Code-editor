/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react"
import { FiClock, FiAward } from "react-icons/fi"

const ContestCard = ({ contest, onClick }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-lg hover:shadow-lg transition cursor-pointer" onClick={onClick}>
      <h2 className="text-xl font-bold">{contest.title}</h2>
      <p className="text-gray-500">{contest.description}</p>
      <div className="text-indigo-600 flex items-center mt-2">
        <FiClock className="mr-2" /> {contest.timeLeft}
      </div>
      <div className="text-green-600 flex items-center mt-1">
        <FiAward className="mr-2" /> {contest.participants} participants
      </div>
    </div>
  )
}

export default ContestCard

