import { FaTrain } from "react-icons/fa";


const TrainInfo = ({ train }) => {


  return (
    <div>
      <div className="flex">
        <p className="text-lg font-semibold text-gray-800">
          {`${train.starting_station.name} (${train.starting_station.code})`}{" "}
        </p>
        <span className="text-xl">{"->"}</span>
        <p className="text-lg font-semibold text-gray-800">
          {`${train.terminating_station.name} (${train.terminating_station.code})`}{" "}
        </p>
      </div>
      <h3 className="text-2xl text-gray-700 mt-1">
        <FaTrain className="inline text-blue-500 mr-2" />
        Train: <span className="font-bold">{train.train_name}</span> ({train.train_number})
      </h3>
    </div>
  );
};

export default TrainInfo;
