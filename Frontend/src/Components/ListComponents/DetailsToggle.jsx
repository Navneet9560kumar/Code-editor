const DetailsToggle = ({ toggleDetails, showDetails }) => {
  return (
    <button
      onClick={toggleDetails}
      className="text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md font-medium shadow-md"
    >
      {showDetails ? "Hide Details" : "See Details"}
    </button>
  );
};

export default DetailsToggle;
