import React, { useState } from "react";

const SearchedFlights = ({ flight }) => {
  const [fareTermModel,setFareTermModel]=useState(false)
  if (!flight) {
    return <div>No flight data available</div>;
  }

  const {
    flightNumber,
    price,
    travelClass,
    airline,
    departureTime,
    arrivalTime,
    departureDate,
    arrivalDate,
    origin,
    destination,
  } = flight;

  function calculateDuration(departureTime, arrivalTime) {
    const referenceDate = new Date();

    // Construct Date objects for departure and arrival times
    const departureDateTime = new Date(
      `${referenceDate.toDateString()} ${departureTime}`
    );
    const arrivalDateTime = new Date(
      `${referenceDate.toDateString()} ${arrivalTime}`
    );

    let differenceInMs = arrivalDateTime - departureDateTime;

    // If arrival time is earlier than departure time, it means the arrival is on the next day
    if (differenceInMs < 0) {
      differenceInMs += 24 * 60 * 60 * 1000; // Adding one day in milliseconds
    }

    const hours = Math.floor(differenceInMs / (1000 * 60 * 60));
    const minutes = Math.floor(
      (differenceInMs % (1000 * 60 * 60)) / (1000 * 60)
    );

    return { hours, minutes };
  }

  function formatDate(dateStr) {
    const date = new Date(dateStr);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString('en-GB', options);
  }
  

  const duration = calculateDuration(departureTime, arrivalTime);

  const handleTermModel =()=>{
    alert("term")
  }
  const handleFareDetails =()=>{
    alert("fare details")
  }

  return (
    <div className="w-10/12 ring-1 ring-slate-200 my-6 py-6 px-6 container mx-auto relative border-t-4 border-slate-500 shadow stroke-slate-300">
      <div className="mb-4 flex justify-between items-center">
        <p className="text-lg font-semibold text-slate-800">
          Total: PKR {price || "N/A"} <span className="text-base font-normal">(for 2 passengers)</span>
        </p>
        <p className="text-lg font-semibold text-slate-800">{flightNumber}</p>
      </div>

      <div className="ring-1 ring-slate-200 py-2 px-4 rounded">
        <div className="mx-4 my-2">
          <div className="flex justify-between items-center">
            <p>Airline: {airline || "N/A"}</p>
            <p>{departureDate ? formatDate(departureDate) : "N/A"}</p>
          </div>
        </div>
        <div className="bg-slate-100 w-full rounded px-2 py-2 flex justify-between items-center">
          <div className="flex justify-around items-center w-1/2">
            <div>
              <p>
                {origin?.airportCode || "N/A"} ({origin?.country || "N/A"})
              </p>
              <p className="text-2xl font-semibold">{departureTime || "N/A"}</p>
            </div>
            <div className="mx-4">
              <p>{duration.hours}h {duration.minutes}m</p>
              <p className="text-4xl">→</p>
            </div>
            <div>
              <p>
                {destination?.airportCode || "N/A"} ({destination?.country || "N/A"})
              </p>
              <p className="text-2xl font-semibold">{arrivalTime || "N/A"}</p>
            </div>
          </div>
          <div className="flex justify-around items-center w-1/2">
            <div>
              <p className="text-xs">Class</p>
              <p className="text-lg font-medium">{travelClass || "N/A"}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4">
        <div >
          <p>fare</p>
          <div className="flex justify-start items-center">
          <p onClick={handleTermModel} className=" cursor-pointer underline hover:no-underline text-xs text-slate-800 pr-6">Fare rules / Terms and conditions</p>
          <p onClick={handleFareDetails} className="cursor-pointer underline hover:no-underline text-xs text-slate-800">Fare details</p>
          </div>

        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="py-2 text-lg font-semibold">PKR {price || "N/A"}</p>
          <button className="cursor-pointer hover:underline h-10 px-12 bg-slate-500 rounded flex justify-center items-center text-white">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchedFlights;
