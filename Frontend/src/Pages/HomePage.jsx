import React, { useContext } from "react";
import { FaHeart, FaUser, FaBars, FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import SearchForm from "../PageComponents/SearchForm";
import ResultsList from "../PageComponents/ResultsList";
import context from "../Context/context";
import Loader from "../Components/Loader";

const HomePage = () => {
  const { trainResults, loading, search, error } = useContext(context);

  return (
    <div className="bg-gradient-to-b from-[#00172E] to-[#05203C] min-h-screen text-white">
      <div className="mb-5 px-6 md:px-36">
        <div className="flex justify-between items-center py-6 md:py-12">
          <Link to="/">
            <img src="vite.svg" alt="Logo" className="h-12" />
          </Link>
          <div className="flex items-center space-x-4">
            <p className="cursor-pointer text-white hover:bg-gray-400/20 px-3 py-2 rounded transition-all duration-300">
              <FaGlobe size={20} />
            </p>
            <p className="cursor-pointer text-white hover:bg-gray-400/20 px-3 py-2 rounded transition-all duration-300">
              <FaHeart size={20} />
            </p>
            <p className="cursor-pointer text-white flex items-center space-x-2 hover:bg-gray-400/20 px-3 py-2 rounded transition-all duration-300">
              <FaUser size={20} />
              <span className="text-[14px] font-semibold">Log in</span>
            </p>
            <p className="cursor-pointer text-white hover:bg-gray-400/20 px-3 py-2 rounded transition-all duration-300">
              <FaBars size={20} />
            </p>
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Find the Best Way to Travel
          </h1>
          <p className="mt-4 text-lg md:text-xl text-gray-300">
            Effortlessly explore your travel options and plan your journey.
          </p>
        </div>

        <div className="mt-10">
          <SearchForm />
        </div>
      </div>

      {error.length > 0 && (
        <div className="flex justify-center items-center my-6 px-4">
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-md w-full md:w-3/4">
            <strong className="font-bold">Error: </strong>
            <span>{error}</span>
          </div>
        </div>
      )}

      <div className="flex flex-col justify-center items-center w-full h-screen">
        {!search ? (
          <div
            className="relative h-full w-full flex flex-col items-center justify-center"
            style={{
              backgroundImage: "url('welcome.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="bg-black/50 absolute inset-0"></div>
            <h2 className="text-3xl z-10 md:text-4xl font-semibold text-white relative">
              Welcome to Travel Explorer
            </h2>
            <p className="mt-4 text-lg z-10 text-gray-300 relative">
              Enter your travel details to begin your journey.
            </p>
          </div>
        ) : loading ? (
          <div className="p-6 md:p-10 text-center bg-white text-gray-900 shadow-md rounded-lg w-full h-full flex items-center justify-center">
            <Loader />
          </div>
        ) : trainResults &&
          (trainResults.directTrains.length > 0 ||
            trainResults.multiTrainConnections.length > 0) ? (
          <div className="p-6 md:p-10 bg-white text-gray-900 shadow-md rounded-lg w-full h-full overflow-y-auto">
            <ResultsList />
          </div>
        ) : (
          <div className="p-6 md:p-10 text-center bg-white text-gray-900 shadow-md rounded-lg w-full h-full flex items-center justify-center">
            <p className="text-lg font-semibold text-gray-700">
              No results found for the selected route and date.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
