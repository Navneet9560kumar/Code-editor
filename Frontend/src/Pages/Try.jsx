import React, { useState, useEffect } from "react";

const Try = () => {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [trainsData, setTrainsData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [selectedPath, setSelectedPath] = useState(null);

  const fetchTrains = async () => {
    if (!fromStation || !toStation) {
      alert("Please enter both Source and Destination stations!");
      return;
    }
    setLoading(true);

    try {
      const response = await fetch("http://localhost:2100/api/trains/search-trains", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fromStation, toStation }),
      });

      const result = await response.json();
      if (result.success) {
        setTrainsData(result.result);
      } else {
        alert(result.message || "Error fetching data.");
      }
    } catch (error) {
      console.error(error);
      alert("Error fetching data.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-xl font-bold mb-4">Train Search</h1>
        <div className="flex gap-4">
          <input
            type="text"
            placeholder="From Station Code"
            value={fromStation}
            onChange={(e) => setFromStation(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
          <input
            type="text"
            placeholder="To Station Code"
            value={toStation}
            onChange={(e) => setToStation(e.target.value)}
            className="p-2 border border-gray-300 rounded w-full"
          />
          <button
            onClick={fetchTrains}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Search
          </button>
        </div>
      </div>

      {loading && <p>Loading...</p>}

      {trainsData && (
        <div>
          <div className="mb-6">
            <h2 className="text-lg font-semibold">Direct Trains</h2>
            {trainsData.directTrains.length > 0 ? (
              <div className="space-y-4">
                {trainsData.directTrains.map((train, index) => (
                  <div
                    key={index}
                    className="border border-gray-300 p-4 rounded shadow"
                  >
                    <div className="flex justify-between items-center">
                      <div>
                        <p>
                          <span className="font-bold">Train: </span>
                          {train.number} - {train.name}
                        </p>
                        <p>
                          <span className="font-bold">Classes: </span>
                          {Object.entries(train.seat_availability)
                            .filter(([_, value]) =>
                              ["Available", "RAC"].includes(value.status)
                            )
                            .map(([key]) => key)
                            .join(", ")}
                        </p>
                      </div>
                      <div>
                        <span className="bg-green-200 text-green-700 px-2 py-1 rounded">
                          Direct
                        </span>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4">
                          See More
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p>No direct trains found.</p>
            )}
          </div>

          <div>
            <h2 className="text-lg font-semibold">Multi-Train Connections</h2>
            {trainsData.multiTrainConnections.length > 0 ? (
              trainsData.multiTrainConnections.map((path, pathIndex) => (
                <div
                  key={pathIndex}
                  className="border border-gray-300 p-4 rounded mb-4"
                >
                  <h3 className="font-bold mb-2">
                    Path {pathIndex + 1}:{" "}
                    {path.map((segment) => `${segment.from} → ${segment.to}`).join(" → ")}
                  </h3>
                  <button
                    onClick={() =>
                      setSelectedPath(
                        selectedPath === pathIndex ? null : pathIndex
                      )
                    }
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                  >
                    {selectedPath === pathIndex ? "Hide Details" : "Show Details"}
                  </button>

                  {selectedPath === pathIndex && (
                    <div className="mt-4 space-y-4">
                      {path.map((segment, segmentIndex) => (
                        <div
                          key={segmentIndex}
                          className="border border-gray-300 p-4 rounded"
                        >
                          <h4 className="font-bold mb-2">
                            {segment.from} → {segment.to}
                          </h4>
                          {segment.trains.length > 0 ? (
                            segment.trains.map((train, trainIndex) => (
                              <p key={trainIndex}>
                                Train: {train.number} - {train.name}
                              </p>
                            ))
                          ) : (
                            <p>No trains available for this segment.</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))
            ) : (
              <p>No multi-train connections found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Try;
