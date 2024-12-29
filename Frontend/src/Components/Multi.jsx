import React, { useState, useContext, useMemo } from "react";
import List from "./List";
import context from "../Context/context";

const Multi = ({ journey }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const { toStation, fromStation } = useContext(context);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-md font-semibold text-gray-800">
            {`${fromStation.station_name} (${fromStation.station_code}) → ${toStation.station_name} (${toStation.station_code})`}
          </p>
          <h3 className="text-xl md:text-2xl text-gray-600">Journey Details</h3>
          <p className="text-sm text-gray-600">{`Total Sections: ${journey.length}`}</p>
        </div>
      </div>

      <div className="mt-4 space-y-6">
        {journey.map((section, sectionIndex) => {
          // Memoize station objects for performance
          const fromStationMemo = useMemo(
            () => ({ station_code: section.from }),
            [section.from]
          );
          const toStationMemo = useMemo(
            () => ({ station_code: section.to }),
            [section.to]
          );

          return (
            <div key={sectionIndex} className="border-t pt-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-700">
                  Part {sectionIndex + 1}: {`${fromStationMemo.station_code} → ${toStationMemo.station_code}`}
                </p>
                <button
                  onClick={() => toggleSection(sectionIndex)}
                  aria-expanded={expandedSection === sectionIndex}
                  aria-controls={`section-${sectionIndex}`}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  {expandedSection === sectionIndex ? "Hide Trains" : "Show Trains"}
                </button>
              </div>

              {expandedSection === sectionIndex && (
                <div
                  id={`section-${sectionIndex}`}
                  className="mt-4 space-y-4"
                >
                  {section.trains.map((train, trainIndex) => (
                    <List
                      key={trainIndex}
                      train={train}
                      fromStation={fromStationMemo}
                      toStation={toStationMemo}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Multi;
