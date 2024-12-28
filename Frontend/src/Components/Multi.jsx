import React, { useState , useContext } from "react";
import List from "./List"; 
import context from '../Context/context'

const Multi = ({ journey }) => {
  const [expandedSection, setExpandedSection] = useState(null);
  const [selectedTrain, setSelectedTrain] = useState(null);

  const { toStation, fromStation } = useContext(context)

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
    setSelectedTrain(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-md font-semibold text-gray-800">
            {`${fromStation.station_name} (${fromStation.station_code}) → ${toStation.station_name} (${toStation.station_code})`}
          </p>
          <h3 className="text-2xl text-gray-600">Journey Details</h3>
          <p className="text-sm text-gray-600">{`Total Sections: ${journey.length}`}</p>
        </div>
      </div>

      <div className="mt-4 space-y-6">
        {journey.map((section, sectionIndex) => {

          const fr = { station_code: section.from };
          const t = { station_code: section.to};
          

          return (
            <div key={sectionIndex} className="border-t pt-4">
              <div className="flex justify-between items-center">
                <p className="text-lg font-semibold text-gray-700">
                  Part {sectionIndex + 1}: {`${fr.station_code} → ${t.station_code}`}
                </p>
                <button
                  onClick={() => toggleSection(sectionIndex)}
                  className="text-blue-500 hover:text-blue-700 font-medium"
                >
                  {expandedSection === sectionIndex ? "Hide Trains" : "Show Trains"}
                </button>
              </div>
             
              {expandedSection === sectionIndex && (
                <div className="mt-4 space-y-4">
                  
                  {section.trains.map((train, trainIndex) => (
                    
                    <List
                      key={trainIndex}
                      train={train}
                      fromStation={fr}  
                      toStation={t}     
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
