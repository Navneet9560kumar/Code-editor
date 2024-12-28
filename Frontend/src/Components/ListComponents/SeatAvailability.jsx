import { useState } from "react";
import { Link } from "react-router-dom";

const SeatAvailability = ({ train }) => {
  const [selectedClass, setSelectedClass] = useState(null);

  const toggleSeatAvailability = (classType) => {
    setSelectedClass(selectedClass === classType ? null : classType);
  };

  return (
    <div className="flex justify-between">
    <div className="mt-6">
      <h3 className="text-lg font-medium text-gray-700 mb-4">Available Seats:</h3>
      <div className="flex flex-wrap gap-4 items-center">
        <div className="flex flex-wrap gap-2">
          {Object.entries(train.seat_availability || {})
            .filter(([classType, details]) => details._id) 
            .map(([classType, details]) => (
              <button
                key={classType}
                onClick={() => toggleSeatAvailability(classType)}
                className={`px-4 py-2 rounded-md shadow-md font-medium transition duration-300 ${
                  selectedClass === classType
                    ? "bg-blue-100 border border-blue-400"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {selectedClass === classType ? (
                  <span>
                    {classType}:{" "}
                    <span
                      className={`font-bold ${
                        details.status === "Available"
                          ? "text-green-600"
                          : details.status === "RAC"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {details.status}
                    </span>{" "}
                    -{" "}
                    <span
                      className={`font-bold ${
                        details.status === "Available"
                          ? "text-green-600"
                          : details.status === "RAC"
                          ? "text-yellow-500"
                          : "text-red-500"
                      }`}
                    >
                      {details.available}
                    </span>
                  </span>
                ) : (
                  classType
                )}
              </button>
            ))}
        </div>
      </div>
    </div>
      <div className="mt-20">
          <Link
            to="https://www.irctc.co.in/nget/train-search"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded-md font-medium shadow-md transition duration-300"
          >
            Book Ticket
          </Link>
        </div>
    </div>
  );
};

export default SeatAvailability;
