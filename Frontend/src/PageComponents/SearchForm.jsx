import { useContext } from "react";
import Input from "../Components/Input";
import axios from "axios";
import context from "../Context/context";

const SearchForm = () => {
  const modeOptions = ["Train Only", "Bus Only", "Flight Only", "Mixed Mode"];

  const {
    setTrainResults,
    fromStation,
    toStation,
    setLoading,
    setSearch,
    mode,
    date,
    setError,
  } = useContext(context);

  const handleSearch = async () => {
    setError("");

    if (!mode) {
      setError("Please select a mode.");
      return;
    }
    if (mode === "Bus Only") {
      setError("Working on Bus Services !! Will Update Soon. Try Other Services");
      return;
    }
    if (mode === "Flight Only") {
      setError("Working on Flight Services !! Will Update Soon. Try Other Services");
      return;
    }
    if (mode === "Mixed Mode") {
      setError("Working on Mixed Services !! Will Update Soon. Try Other Services");
      return;
    }
    if (!fromStation.station_code) {
      setError("Please select a source station.");
      return;
    }
    if (!toStation.station_code) {
      setError("Please select a destination station.");
      return;
    }
    if (!date) {
      setError("Please select a date.");
      return;
    }

    setLoading(true);
    setSearch(true);

    try {
      const response = await axios.post(
        "https://train-ticket-rmn1.onrender.com/api/trains/search-trains",
        {
          fromStation: fromStation.station_code,
          toStation: toStation.station_code,
        },
        {
          withCredentials: true,
        }
      );
      if (response.data.result) {
        setLoading(false);
        setTrainResults(response.data.result);
      }
    } catch (error) {
      setLoading(false);
      setError(`Error fetching train data. Please try again later. \n Error : ${error}`);
      console.error("Error fetching train data:", error);
    }
  };

  return (
    <div className="flex flex-col sm:flex-row sm:gap-4 gap-2 items-stretch">
      <Input
        placeholder={"Train Only"}
        label={"Mode"}
        type={"select"}
        options={modeOptions}
        round={"left"}
        className="flex-1"
      />
      <Input
        placeholder={"City, place, location"}
        type={"text"}
        label={"From"}
        className="flex-1"
      />
      <Input
        placeholder={"City, place, location"}
        type={"text"}
        label={"To"}
        className="flex-1"
      />
      <Input
        placeholder={"Select Date"}
        label={"Date"}
        type={"date"}
        round={"right"}
        className="flex-1"
      />
      <button
        onClick={handleSearch}
        className="bg-blue-700 text-white rounded-lg py-2 px-4 hover:bg-blue-800 flex-1 sm:flex-none"
      >
        Search
      </button>
    </div>
  );
};

export default SearchForm;
