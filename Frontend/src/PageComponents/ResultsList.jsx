import React, { useState } from "react";
import List from "../Components/List";
import Multi from "../Components/Multi";
import { useContext } from "react";
import context from "../Context/context";

const ResultsList = () => {
  const { trainResults, fromStation, toStation } = useContext(context);

  const directTrains = trainResults?.directTrains || [];
  const multiTrainConnections = trainResults?.multiTrainConnections || [];

  const [activeTab, setActiveTab] = useState("direct"); // "direct" or "multi"

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 md:p-8">
      <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
        Available Trains
      </h1>

      <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
        <button
          onClick={() => handleTabChange("direct")}
          className={`px-4 py-2 sm:px-6 rounded-lg font-semibold transition-colors ${
            activeTab === "direct"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Direct Trains ({directTrains.length})
        </button>
        <button
          onClick={() => handleTabChange("multi")}
          className={`px-4 py-2 sm:px-6 rounded-lg font-semibold transition-colors ${
            activeTab === "multi"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-800 hover:bg-gray-300"
          }`}
        >
          Multi-Train Journeys ({multiTrainConnections.length})
        </button>
      </div>

      <div className="container mx-auto w-full sm:max-w-lg lg:max-w-2xl">
        {activeTab === "direct" ? (
          <div className="space-y-4">
            {directTrains.length > 0 ? (
              directTrains.map((train, index) => (
                <List
                  key={index}
                  train={train}
                  fromStation={fromStation}
                  toStation={toStation}
                />
              ))
            ) : (
              <p className="text-center text-gray-500">
                No direct trains available.
              </p>
            )}
          </div>
        ) : (
          <div className="space-y-4">
            {multiTrainConnections.length > 0 ? (
              multiTrainConnections.map((journey, index) => (
                <Multi key={index} journey={journey} />
              ))
            ) : (
              <p className="text-center text-gray-500">
                No multi-train journeys available.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultsList;
