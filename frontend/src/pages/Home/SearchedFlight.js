import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Header from "../../components/Header/Header";
import SearchedFlights from "../../components/Home/SearchedFlights/SearchedFlights";
import Footer from '../../components/Footer/Footer'

const SearchedFlight = () => {
  const location = useLocation();
  const { data } = location.state;
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);

  function searchFlights(data, flights) {
    return flights.filter((flight) => {
      return (
        flight.origin.country === data.origin &&
        flight.destination.country === data.destination
        // flight.departureDate === data.departDate &&
        // (data.tripType === 'return' ? flight.returnDate === data.returnDate : true) &&
        // flight.travelClass === data.travelClass
      );
    });
  }

  // Search for flights
  const matchedFlights = searchFlights(data, flightData);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollTopButton(true);
    } else {
      setShowScrollTopButton(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);


  return (
    <> 
    <Header/>
    <div className="container mx-auto dark:bg-dark">
      <div className="flex justify-between items-center py-6">
        <div>
          <p>
            {data.origin} to {data.destination}
          </p>
          <p>
            {data.tripType}, {data.travelClass}, {data.total} passenger
            {data.total > 1 ? "s" : ""}
          </p>
        </div>
        <div className="cursor-pointer hover:underline h-12 bg-slate-500 rounded flex justify-center items-center px-6 text-white">
          View Summary
        </div>
      </div>
      <h2 className="font-semibold text-left text-2xl py-4">Make a Booking</h2>
      <div className="flex justify-around items-center">
        <div className="border-b-2 text-left border-slate-900 w-auto flex justify-start items-center">
          <h1 className="text-3xl font-semibold text-slate-900">1</h1>
          <sub className="px-2 text-base ext-slate-900">Flights</sub>
        </div>
        <div className="border-b-2 text-left border-slate-400 w-auto flex justify-start items-center">
          <h1 className="text-3xl font-semibold text-slate-400">2</h1>
          <sub className="px-2 text-base text-slate-400">Passengers</sub>
        </div>
        <div className="border-b-2 text-left border-slate-400 w-auto flex justify-start items-center">
          <h1 className="text-3xl font-semibold text-slate-400">3</h1>
          <sub className="px-2 text-base text-slate-400">Options</sub>
        </div>
        <div className="border-b-2 text-left border-slate-400 w-auto flex justify-start items-center">
          <h1 className="text-3xl font-semibold text-slate-400">4</h1>
          <sub className="px-2 text-base text-slate-400">Payments</sub>
        </div>
        <div className="border-b-2 text-left border-slate-400 w-auto flex justify-start items-center">
          <h1 className="text-3xl font-semibold text-slate-400">5</h1>
          <sub className="px-2 text-base text-slate-400">Confirm</sub>
        </div>
      </div>
      {Array.isArray(matchedFlights) && matchedFlights.length > 0 ? (
        <>
          <div className="flex justify-center items-center pt-14 font-medium text-lg">
            <h1>Select flights</h1>
            <p>({matchedFlights.length} options)</p>
          </div>
          <p className="text-center pt-4 pb-6 text-slate-600">
            All times displayed are local for each city.
          </p>
          <div className="ring-1 ring-slate-200 flex justify-between items-center h-12 w-10/12 container mx-auto mb-8">
            <div>
              <p className="px-4 text-xs">Filter by:</p>
              <p className="px-4 text-base font-medium">
                Active filter: {matchedFlights.length}{" "}
              </p>
            </div>
            <div className="flex justify-end items-center">
              <p className="py-6 px-4">Sort by:</p>
              <p className="ring-1 px-4 ring-slate-200 py-3 cursor-pointer hover:bg-slate-200">
                Price
              </p>
              <p className="ring-1 px-4 ring-slate-200 py-3 cursor-pointer hover:bg-slate-200">
                Departure time
              </p>
              <p className="ring-1 px-4 ring-slate-200 py-3 cursor-pointer hover:bg-slate-200">
                Duration
              </p>
            </div>
          </div>
          {matchedFlights.map((flight) => (
            <SearchedFlights key={flight.flightNumber} flight={flight} />
          ))}
        </>
      ) : (
        <>
          <p className="text-center py-10 font-medium text-lg">No flights found</p>
        </>
      )}
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
        >
          Scroll to Top
        </button>
      )}
     
    </div>
  <Footer/></>
  );
};

export default SearchedFlight;


const airportToCountry = {
  SYD: "Australia",
  SIN: "Singapore",
  CDG: "France",
  FRA: "Germany",
  DXB: "United Arab Emirates",
  LHR: "United Kingdom",
  HOU: "United States",
  NRT: "Japan",
  ICN: "South Korea",
  AMS: "Netherlands",
  BKK: "Thailand",
  HND: "Japan",
  IST: "Turkey",
  MXP: "Italy",
  ZRH: "Switzerland",
  CAI: "Egypt",
  DOH: "Qatar",
  KUL: "Malaysia",
  DEL: "India",
  PEK: "China",
  CPH: "Denmark",
  HEL: "Finland",
  MUC: "Germany",
  SVO: "Russia",
  AUH: "United Arab Emirates",
  LGA: "United States",
  GRU: "Brazil",
  JNB: "South Africa",
  LGW: "United Kingdom",
  MNL: "Philippines",
  ADD: "Ethiopia",
  WAW: "Poland",
  KIX: "Japan",
  EZE: "Argentina",
  KHI: "Pakistan",
  CMB: "Sri Lanka",
  BUD: "Hungary",
  JFK: "United States",
  LAX: "United States",
  ATL: "United States",
  SEA: "United States",
  MIA: "United States",
  DFW: "United States",
  LAS: "United States",
  PHX: "United States",
};

const flightData = [
  {
    flightNumber: "QF200",
    airline: "Qantas",
    origin: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    destination: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    departureDate: "2024-08-01",
    departureTime: "09:34",
    arrivalDate: "2024-08-01",
    arrivalTime: "17:12",
    travelClass: "Economy",
    price: 400,
  },
  {
    flightNumber: "QF600",
    airline: "Qantas",
    origin: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    destination: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    departureDate: "2024-08-01",
    departureTime: "09:00",
    arrivalDate: "2024-08-01",
    arrivalTime: "13:00",
    travelClass: "Economy",
    price: 700,
  },
  {
    flightNumber: "AF220",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "FRA",
      country: airportToCountry["FRA"],
    },
    departureDate: "2024-08-02",
    departureTime: "10:00",
    arrivalDate: "2024-08-02",
    arrivalTime: "12:00",
    travelClass: "Business",
    price: 550,
  },
  {
    flightNumber: "EK230",
    airline: "Emirates",
    origin: {
      airportCode: "DXB",
      country: airportToCountry["DXB"],
    },
    destination: {
      airportCode: "NRT",
      country: airportToCountry["NRT"],
    },
    departureDate: "2024-08-03",
    departureTime: "16:00",
    arrivalDate: "2024-08-04",
    arrivalTime: "08:00",
    travelClass: "Economy",
    price: 700,
  },
  {
    flightNumber: "NH240",
    airline: "All Nippon Airways",
    origin: {
      airportCode: "HND",
      country: airportToCountry["HND"],
    },
    destination: {
      airportCode: "ICN",
      country: airportToCountry["ICN"],
    },
    departureDate: "2024-08-04",
    departureTime: "14:00",
    arrivalDate: "2024-08-04",
    arrivalTime: "16:00",
    travelClass: "Business",
    price: 600,
  },
  {
    flightNumber: "TK250",
    airline: "Turkish Airlines",
    origin: {
      airportCode: "IST",
      country: airportToCountry["IST"],
    },
    destination: {
      airportCode: "MXP",
      country: airportToCountry["MXP"],
    },
    departureDate: "2024-08-05",
    departureTime: "07:00",
    arrivalDate: "2024-08-05",
    arrivalTime: "09:00",
    travelClass: "First Class",
    price: 800,
  },
  {
    flightNumber: "LX260",
    airline: "Swiss International Air Lines",
    origin: {
      airportCode: "ZRH",
      country: airportToCountry["ZRH"],
    },
    destination: {
      airportCode: "CAI",
      country: airportToCountry["CAI"],
    },
    departureDate: "2024-08-06",
    departureTime: "11:00",
    arrivalDate: "2024-08-06",
    arrivalTime: "15:00",
    travelClass: "Economy",
    price: 670,
  },
  {
    flightNumber: "QR270",
    airline: "Qatar Airways",
    origin: {
      airportCode: "DOH",
      country: airportToCountry["DOH"],
    },
    destination: {
      airportCode: "KUL",
      country: airportToCountry["KUL"],
    },
    departureDate: "2024-08-07",
    departureTime: "05:00",
    arrivalDate: "2024-08-07",
    arrivalTime: "15:00",
    travelClass: "Business",
    price: 950,
  },
  {
    flightNumber: "AI280",
    airline: "Air India",
    origin: {
      airportCode: "DEL",
      country: airportToCountry["DEL"],
    },
    destination: {
      airportCode: "PEK",
      country: airportToCountry["PEK"],
    },
    departureDate: "2024-08-08",
    departureTime: "23:00",
    arrivalDate: "2024-08-09",
    arrivalTime: "07:00",
    travelClass: "Economy",
    price: 750,
  },
  {
    flightNumber: "SAS290",
    airline: "Scandinavian Airlines",
    origin: {
      airportCode: "CPH",
      country: airportToCountry["CPH"],
    },
    destination: {
      airportCode: "HEL",
      country: airportToCountry["HEL"],
    },
    departureDate: "2024-08-09",
    departureTime: "09:00",
    arrivalDate: "2024-08-09",
    arrivalTime: "11:00",
    travelClass: "Business",
    price: 500,
  },
  {
    flightNumber: "LH300",
    airline: "Lufthansa",
    origin: {
      airportCode: "MUC",
      country: airportToCountry["MUC"],
    },
    destination: {
      airportCode: "SVO",
      country: airportToCountry["SVO"],
    },
    departureDate: "2024-08-10",
    departureTime: "08:00",
    arrivalDate: "2024-08-10",
    arrivalTime: "12:00",
    travelClass: "First Class",
    price: 850,
  },
  {
    flightNumber: "EY310",
    airline: "Etihad Airways",
    origin: {
      airportCode: "AUH",
      country: airportToCountry["AUH"],
    },
    destination: {
      airportCode: "GRU",
      country: airportToCountry["GRU"],
    },
    departureDate: "2024-08-11",
    departureTime: "15:00",
    arrivalDate: "2024-08-12",
    arrivalTime: "07:00",
    travelClass: "Economy",
    price: 950,
  },
  {
    flightNumber: "SAA320",
    airline: "South African Airways",
    origin: {
      airportCode: "JNB",
      country: airportToCountry["JNB"],
    },
    destination: {
      airportCode: "MNL",
      country: airportToCountry["MNL"],
    },
    departureDate: "2024-08-12",
    departureTime: "22:00",
    arrivalDate: "2024-08-14",
    arrivalTime: "08:00",
    travelClass: "Business",
    price: 1150,
  },
  {
    flightNumber: "ET330",
    airline: "Ethiopian Airlines",
    origin: {
      airportCode: "ADD",
      country: airportToCountry["ADD"],
    },
    destination: {
      airportCode: "WAW",
      country: airportToCountry["WAW"],
    },
    departureDate: "2024-08-13",
    departureTime: "01:00",
    arrivalDate: "2024-08-13",
    arrivalTime: "07:00",
    travelClass: "Economy",
    price: 800,
  },
  {
    flightNumber: "JL340",
    airline: "Japan Airlines",
    origin: {
      airportCode: "KIX",
      country: airportToCountry["KIX"],
    },
    destination: {
      airportCode: "EZE",
      country: airportToCountry["EZE"],
    },
    departureDate: "2024-08-14",
    departureTime: "09:00",
    arrivalDate: "2024-08-15",
    arrivalTime: "19:00",
    travelClass: "First Class",
    price: 1300,
  },
  {
    flightNumber: "PK350",
    airline: "Pakistan International Airlines",
    origin: {
      airportCode: "KHI",
      country: airportToCountry["KHI"],
    },
    destination: {
      airportCode: "CMB",
      country: airportToCountry["CMB"],
    },
    departureDate: "2024-08-15",
    departureTime: "17:00",
    arrivalDate: "2024-08-16",
    arrivalTime: "22:00",
    travelClass: "Economy",
    price: 500,
  },
  {
    flightNumber: "BUD360",
    airline: "Wizz Air",
    origin: {
      airportCode: "BUD",
      country: airportToCountry["BUD"],
    },
    destination: {
      airportCode: "ZRH",
      country: airportToCountry["ZRH"],
    },
    departureDate: "2024-08-16",
    departureTime: "07:00",
    arrivalDate: "2024-08-16",
    arrivalTime: "09:00",
    travelClass: "Business",
    price: 550,
  },
  {
    flightNumber: "AF370",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "DOH",
      country: airportToCountry["DOH"],
    },
    departureDate: "2024-08-17",
    departureTime: "10:00",
    arrivalDate: "2024-08-17",
    arrivalTime: "16:00",
    travelClass: "First Class",
    price: 800,
  },
  {
    flightNumber: "NH380",
    airline: "All Nippon Airways",
    origin: {
      airportCode: "HND",
      country: airportToCountry["HND"],
    },
    destination: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    departureDate: "2024-08-18",
    departureTime: "14:00",
    arrivalDate: "2024-08-18",
    arrivalTime: "20:00",
    travelClass: "Economy",
    price: 680,
  },
  {
    flightNumber: "TK390",
    airline: "Turkish Airlines",
    origin: {
      airportCode: "IST",
      country: airportToCountry["IST"],
    },
    destination: {
      airportCode: "MUC",
      country: airportToCountry["MUC"],
    },
    departureDate: "2024-08-19",
    departureTime: "08:00",
    arrivalDate: "2024-08-19",
    arrivalTime: "10:00",
    travelClass: "Business",
    price: 750,
  },
  {
    flightNumber: "LX400",
    airline: "Swiss International Air Lines",
    origin: {
      airportCode: "ZRH",
      country: airportToCountry["ZRH"],
    },
    destination: {
      airportCode: "PEK",
      country: airportToCountry["PEK"],
    },
    departureDate: "2024-08-20",
    departureTime: "11:00",
    arrivalDate: "2024-08-20",
    arrivalTime: "15:00",
    travelClass: "First Class",
    price: 920,
  },
  {
    flightNumber: "QR410",
    airline: "Qatar Airways",
    origin: {
      airportCode: "DOH",
      country: airportToCountry["DOH"],
    },
    destination: {
      airportCode: "BKK",
      country: airportToCountry["BKK"],
    },
    departureDate: "2024-08-21",
    departureTime: "06:00",
    arrivalDate: "2024-08-21",
    arrivalTime: "13:00",
    travelClass: "Economy",
    price: 710,
  },
  {
    flightNumber: "AI420",
    airline: "Air India",
    origin: {
      airportCode: "DEL",
      country: airportToCountry["DEL"],
    },
    destination: {
      airportCode: "JNB",
      country: airportToCountry["JNB"],
    },
    departureDate: "2024-08-22",
    departureTime: "15:00",
    arrivalDate: "2024-08-23",
    arrivalTime: "09:00",
    travelClass: "Business",
    price: 980,
  },
  {
    flightNumber: "SAS430",
    airline: "Scandinavian Airlines",
    origin: {
      airportCode: "CPH",
      country: airportToCountry["CPH"],
    },
    destination: {
      airportCode: "HEL",
      country: airportToCountry["HEL"],
    },
    departureDate: "2024-08-23",
    departureTime: "07:00",
    arrivalDate: "2024-08-23",
    arrivalTime: "09:00",
    travelClass: "Economy",
    price: 470,
  },
  {
    flightNumber: "LH440",
    airline: "Lufthansa",
    origin: {
      airportCode: "MUC",
      country: airportToCountry["MUC"],
    },
    destination: {
      airportCode: "SVO",
      country: airportToCountry["SVO"],
    },
    departureDate: "2024-08-24",
    departureTime: "20:00",
    arrivalDate: "2024-08-25",
    arrivalTime: "00:00",
    travelClass: "First Class",
    price: 870,
  },
  {
    flightNumber: "EY450",
    airline: "Etihad Airways",
    origin: {
      airportCode: "AUH",
      country: airportToCountry["AUH"],
    },
    destination: {
      airportCode: "GRU",
      country: airportToCountry["GRU"],
    },
    departureDate: "2024-08-25",
    departureTime: "23:00",
    arrivalDate: "2024-08-26",
    arrivalTime: "16:00",
    travelClass: "Business",
    price: 1030,
  },
  {
    flightNumber: "SAA460",
    airline: "South African Airways",
    origin: {
      airportCode: "JNB",
      country: airportToCountry["JNB"],
    },
    destination: {
      airportCode: "MNL",
      country: airportToCountry["MNL"],
    },
    departureDate: "2024-08-26",
    departureTime: "04:00",
    arrivalDate: "2024-08-27",
    arrivalTime: "17:00",
    travelClass: "Economy",
    price: 1100,
  },
  {
    flightNumber: "ET470",
    airline: "Ethiopian Airlines",
    origin: {
      airportCode: "ADD",
      country: airportToCountry["ADD"],
    },
    destination: {
      airportCode: "WAW",
      country: airportToCountry["WAW"],
    },
    departureDate: "2024-08-27",
    departureTime: "12:00",
    arrivalDate: "2024-08-27",
    arrivalTime: "16:00",
    travelClass: "Business",
    price: 820,
  },
  {
    flightNumber: "JL480",
    airline: "Japan Airlines",
    origin: {
      airportCode: "KIX",
      country: airportToCountry["KIX"],
    },
    destination: {
      airportCode: "EZE",
      country: airportToCountry["EZE"],
    },
    departureDate: "2024-08-28",
    departureTime: "09:00",
    arrivalDate: "2024-08-29",
    arrivalTime: "16:00",
    travelClass: "First Class",
    price: 1320,
  },
  {
    flightNumber: "PK490",
    airline: "Pakistan International Airlines",
    origin: {
      airportCode: "KHI",
      country: airportToCountry["KHI"],
    },
    destination: {
      airportCode: "CMB",
      country: airportToCountry["CMB"],
    },
    departureDate: "2024-08-29",
    departureTime: "13:00",
    arrivalDate: "2024-08-30",
    arrivalTime: "19:00",
    travelClass: "Economy",
    price: 510,
  },
  {
    flightNumber: "BUD500",
    airline: "Wizz Air",
    origin: {
      airportCode: "BUD",
      country: airportToCountry["BUD"],
    },
    destination: {
      airportCode: "ZRH",
      country: airportToCountry["ZRH"],
    },
    departureDate: "2024-08-30",
    departureTime: "06:00",
    arrivalDate: "2024-08-30",
    arrivalTime: "08:00",
    travelClass: "Business",
    price: 560,
  },
  {
    flightNumber: "AF510",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "DOH",
      country: airportToCountry["DOH"],
    },
    departureDate: "2024-08-31",
    departureTime: "12:00",
    arrivalDate: "2024-08-31",
    arrivalTime: "19:00",
    travelClass: "First Class",
    price: 790,
  },
  {
    flightNumber: "NH520",
    airline: "All Nippon Airways",
    origin: {
      airportCode: "HND",
      country: airportToCountry["HND"],
    },
    destination: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    departureDate: "2024-08-01",
    departureTime: "10:00",
    arrivalDate: "2024-08-01",
    arrivalTime: "17:00",
    travelClass: "Economy",
    price: 690,
  },
  {
    flightNumber: "TK530",
    airline: "Turkish Airlines",
    origin: {
      airportCode: "IST",
      country: airportToCountry["IST"],
    },
    destination: {
      airportCode: "MUC",
      country: airportToCountry["MUC"],
    },
    departureDate: "2024-08-02",
    departureTime: "08:00",
    arrivalDate: "2024-08-02",
    arrivalTime: "10:00",
    travelClass: "Business",
    price: 740,
  },
  {
    flightNumber: "LX540",
    airline: "Swiss International Air Lines",
    origin: {
      airportCode: "ZRH",
      country: airportToCountry["ZRH"],
    },
    destination: {
      airportCode: "PEK",
      country: airportToCountry["PEK"],
    },
    departureDate: "2024-08-03",
    departureTime: "12:00",
    arrivalDate: "2024-08-03",
    arrivalTime: "18:00",
    travelClass: "First Class",
    price: 900,
  },
  {
    flightNumber: "QR550",
    airline: "Qatar Airways",
    origin: {
      airportCode: "DOH",
      country: airportToCountry["DOH"],
    },
    destination: {
      airportCode: "BKK",
      country: airportToCountry["BKK"],
    },
    departureDate: "2024-08-04",
    departureTime: "05:00",
    arrivalDate: "2024-08-04",
    arrivalTime: "12:00",
    travelClass: "Economy",
    price: 730,
  },
  {
    flightNumber: "AI560",
    airline: "Air India",
    origin: {
      airportCode: "DEL",
      country: airportToCountry["DEL"],
    },
    destination: {
      airportCode: "JNB",
      country: airportToCountry["JNB"],
    },
    departureDate: "2024-08-05",
    departureTime: "20:00",
    arrivalDate: "2024-08-06",
    arrivalTime: "13:00",
    travelClass: "Business",
    price: 960,
  },
  {
    flightNumber: "SAS570",
    airline: "Scandinavian Airlines",
    origin: {
      airportCode: "CPH",
      country: airportToCountry["CPH"],
    },
    destination: {
      airportCode: "HEL",
      country: airportToCountry["HEL"],
    },
    departureDate: "2024-08-06",
    departureTime: "11:00",
    arrivalDate: "2024-08-06",
    arrivalTime: "13:00",
    travelClass: "Economy",
    price: 480,
  },
  {
    flightNumber: "LH580",
    airline: "Lufthansa",
    origin: {
      airportCode: "MUC",
      country: airportToCountry["MUC"],
    },
    destination: {
      airportCode: "SVO",
      country: airportToCountry["SVO"],
    },
    departureDate: "2024-08-07",
    departureTime: "14:00",
    arrivalDate: "2024-08-07",
    arrivalTime: "18:00",
    travelClass: "First Class",
    price: 880,
  },
  {
    flightNumber: "EY590",
    airline: "Etihad Airways",
    origin: {
      airportCode: "AUH",
      country: airportToCountry["AUH"],
    },
    destination: {
      airportCode: "GRU",
      country: airportToCountry["GRU"],
    },
    departureDate: "2024-08-08",
    departureTime: "22:00",
    arrivalDate: "2024-08-09",
    arrivalTime: "15:00",
    travelClass: "Business",
    price: 1050,
  },
  {
    flightNumber: "SAA600",
    airline: "South African Airways",
    origin: {
      airportCode: "JNB",
      country: airportToCountry["JNB"],
    },
    destination: {
      airportCode: "MNL",
      country: airportToCountry["MNL"],
    },
    departureDate: "2024-08-09",
    departureTime: "06:00",
    arrivalDate: "2024-08-10",
    arrivalTime: "20:00",
    travelClass: "Economy",
    price: 1120,
  },
  {
    flightNumber: "ET610",
    airline: "Ethiopian Airlines",
    origin: {
      airportCode: "ADD",
      country: airportToCountry["ADD"],
    },
    destination: {
      airportCode: "WAW",
      country: airportToCountry["WAW"],
    },
    departureDate: "2024-08-10",
    departureTime: "09:00",
    arrivalDate: "2024-08-10",
    arrivalTime: "13:00",
    travelClass: "Business",
    price: 830,
  },
  {
    flightNumber: "JL620",
    airline: "Japan Airlines",
    origin: {
      airportCode: "KIX",
      country: airportToCountry["KIX"],
    },
    destination: {
      airportCode: "EZE",
      country: airportToCountry["EZE"],
    },
    departureDate: "2024-08-11",
    departureTime: "15:00",
    arrivalDate: "2024-08-12",
    arrivalTime: "22:00",
    travelClass: "First Class",
    price: 1330,
  },
  {
    flightNumber: "PK630",
    airline: "Pakistan International Airlines",
    origin: {
      airportCode: "KHI",
      country: airportToCountry["KHI"],
    },
    destination: {
      airportCode: "CMB",
      country: airportToCountry["CMB"],
    },
    departureDate: "2024-08-12",
    departureTime: "12:00",
    arrivalDate: "2024-08-12",
    arrivalTime: "19:00",
    travelClass: "Economy",
    price: 520,
  },
  {
    flightNumber: "BUD640",
    airline: "Wizz Air",
    origin: {
      airportCode: "BUD",
      country: airportToCountry["BUD"],
    },
    destination: {
      airportCode: "ZRH",
      country: airportToCountry["ZRH"],
    },
    departureDate: "2024-08-13",
    departureTime: "07:00",
    arrivalDate: "2024-08-13",
    arrivalTime: "09:00",
    travelClass: "Business",
    price: 570,
  },
  {
    flightNumber: "AF650",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "DOH",
      country: airportToCountry["DOH"],
    },
    departureDate: "2024-08-14",
    departureTime: "16:00",
    arrivalDate: "2024-08-14",
    arrivalTime: "22:00",
    travelClass: "First Class",
    price: 800,
  },
  {
    flightNumber: "NH660",
    airline: "All Nippon Airways",
    origin: {
      airportCode: "HND",
      country: airportToCountry["HND"],
    },
    destination: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    departureDate: "2024-08-15",
    departureTime: "11:00",
    arrivalDate: "2024-08-15",
    arrivalTime: "19:00",
    travelClass: "Economy",
    price: 700,
  },
  {
    flightNumber: "TK670",
    airline: "Turkish Airlines",
    origin: {
      airportCode: "IST",
      country: airportToCountry["IST"],
    },
    destination: {
      airportCode: "MUC",
      country: airportToCountry["MUC"],
    },
    departureDate: "2024-08-16",
    departureTime: "06:00",
    arrivalDate: "2024-08-16",
    arrivalTime: "08:00",
    travelClass: "Business",
    price: 750,
  },
  {
    flightNumber: "LX680",
    airline: "Swiss International Air Lines",
    origin: {
      airportCode: "ZRH",
      country: airportToCountry["ZRH"],
    },
    destination: {
      airportCode: "PEK",
      country: airportToCountry["PEK"],
    },
    departureDate: "2024-08-17",
    departureTime: "16:00",
    arrivalDate: "2024-08-17",
    arrivalTime: "22:00",
    travelClass: "First Class",
    price: 930,
  },
  {
    flightNumber: "QR690",
    airline: "Qatar Airways",
    origin: {
      airportCode: "DOH",
      country: airportToCountry["DOH"],
    },
    destination: {
      airportCode: "BKK",
      country: airportToCountry["BKK"],
    },
    departureDate: "2024-08-18",
    departureTime: "07:00",
    arrivalDate: "2024-08-18",
    arrivalTime: "13:00",
    travelClass: "Economy",
    price: 720,
  },
  {
    flightNumber: "AI700",
    airline: "Air India",
    origin: {
      airportCode: "DEL",
      country: airportToCountry["DEL"],
    },
    destination: {
      airportCode: "JNB",
      country: airportToCountry["JNB"],
    },
    departureDate: "2024-08-19",
    departureTime: "09:00",
    arrivalDate: "2024-08-19",
    arrivalTime: "19:00",
    travelClass: "Business",
    price: 970,
  },
  {
    flightNumber: "SAS710",
    airline: "Scandinavian Airlines",
    origin: {
      airportCode: "CPH",
      country: airportToCountry["CPH"],
    },
    destination: {
      airportCode: "HEL",
      country: airportToCountry["HEL"],
    },
    departureDate: "2024-08-20",
    departureTime: "13:00",
    arrivalDate: "2024-08-20",
    arrivalTime: "15:00",
    travelClass: "Economy",
    price: 490,
  },
  {
    flightNumber: "LH720",
    airline: "Lufthansa",
    origin: {
      airportCode: "MUC",
      country: airportToCountry["MUC"],
    },
    destination: {
      airportCode: "SVO",
      country: airportToCountry["SVO"],
    },
    departureDate: "2024-08-21",
    departureTime: "17:00",
    arrivalDate: "2024-08-21",
    arrivalTime: "22:00",
    travelClass: "First Class",
    price: 860,
  },
  {
    flightNumber: "EY730",
    airline: "Etihad Airways",
    origin: {
      airportCode: "AUH",
      country: airportToCountry["AUH"],
    },
    destination: {
      airportCode: "GRU",
      country: airportToCountry["GRU"],
    },
    departureDate: "2024-08-22",
    departureTime: "12:00",
    arrivalDate: "2024-08-23",
    arrivalTime: "06:00",
    travelClass: "Business",
    price: 1020,
  },
  {
    flightNumber: "SAA740",
    airline: "South African Airways",
    origin: {
      airportCode: "JNB",
      country: airportToCountry["JNB"],
    },
    destination: {
      airportCode: "MNL",
      country: airportToCountry["MNL"],
    },
    departureDate: "2024-08-23",
    departureTime: "09:00",
    arrivalDate: "2024-08-24",
    arrivalTime: "23:00",
    travelClass: "Economy",
    price: 1130,
  },
  {
    flightNumber: "ET750",
    airline: "Ethiopian Airlines",
    origin: {
      airportCode: "ADD",
      country: airportToCountry["ADD"],
    },
    destination: {
      airportCode: "WAW",
      country: airportToCountry["WAW"],
    },
    departureDate: "2024-08-24",
    departureTime: "15:00",
    arrivalDate: "2024-08-24",
    arrivalTime: "19:00",
    travelClass: "Business",
    price: 840,
  },
  {
    flightNumber: "JL760",
    airline: "Japan Airlines",
    origin: {
      airportCode: "KIX",
      country: airportToCountry["KIX"],
    },
    destination: {
      airportCode: "EZE",
      country: airportToCountry["EZE"],
    },
    departureDate: "2024-08-25",
    departureTime: "20:00",
    arrivalDate: "2024-08-26",
    arrivalTime: "03:00",
    travelClass: "First Class",
    price: 1340,
  },
  {
    flightNumber: "PK770",
    airline: "Pakistan International Airlines",
    origin: {
      airportCode: "KHI",
      country: airportToCountry["KHI"],
    },
    destination: {
      airportCode: "CMB",
      country: airportToCountry["CMB"],
    },
    departureDate: "2024-08-26",
    departureTime: "08:00",
    arrivalDate: "2024-08-26",
    arrivalTime: "14:00",
    travelClass: "Economy",
    price: 530,
  },
  {
    flightNumber: "BUD780",
    airline: "Wizz Air",
    origin: {
      airportCode: "BUD",
      country: airportToCountry["BUD"],
    },
    destination: {
      airportCode: "ZRH",
      country: airportToCountry["ZRH"],
    },
    departureDate: "2024-08-27",
    departureTime: "10:00",
    arrivalDate: "2024-08-27",
    arrivalTime: "12:00",
    travelClass: "Business",
    price: 580,
  },
  {
    flightNumber: "AF790",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "DOH",
      country: airportToCountry["DOH"],
    },
    departureDate: "2024-08-28",
    departureTime: "08:00",
    arrivalDate: "2024-08-28",
    arrivalTime: "15:00",
    travelClass: "First Class",
    price: 810,
  },
  {
    flightNumber: "AA100",
    airline: "American Airlines",
    origin: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    destination: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    departureDate: "2024-08-01",
    departureTime: "08:00",
    arrivalDate: "2024-08-01",
    arrivalTime: "11:00",
    travelClass: "Economy",
    price: 300,
  },
  {
    flightNumber: "DL200",
    airline: "Delta Airlines",
    origin: {
      airportCode: "ATL",
      country: airportToCountry["ATL"],
    },
    destination: {
      airportCode: "ORD",
      country: airportToCountry["ORD"],
    },
    departureDate: "2024-08-02",
    departureTime: "09:00",
    arrivalDate: "2024-08-02",
    arrivalTime: "11:30",
    travelClass: "Business",
    price: 450,
  },
  {
    flightNumber: "UA300",
    airline: "United Airlines",
    origin: {
      airportCode: "SFO",
      country: airportToCountry["SFO"],
    },
    destination: {
      airportCode: "SEA",
      country: airportToCountry["SEA"],
    },
    departureDate: "2024-08-03",
    departureTime: "07:00",
    arrivalDate: "2024-08-03",
    arrivalTime: "09:00",
    travelClass: "First Class",
    price: 600,
  },
  {
    flightNumber: "SW400",
    airline: "Southwest Airlines",
    origin: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    destination: {
      airportCode: "DEN",
      country: airportToCountry["DEN"],
    },
    departureDate: "2024-08-04",
    departureTime: "10:00",
    arrivalDate: "2024-08-04",
    arrivalTime: "13:00",
    travelClass: "Economy",
    price: 250,
  },
  {
    flightNumber: "BA500",
    airline: "British Airways",
    origin: {
      airportCode: "LHR",
      country: airportToCountry["LHR"],
    },
    destination: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    departureDate: "2024-08-05",
    departureTime: "18:00",
    arrivalDate: "2024-08-05",
    arrivalTime: "21:00",
    travelClass: "Economy",
    price: 700,
  },
  {
    flightNumber: "AF600",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    departureDate: "2024-08-06",
    departureTime: "12:00",
    arrivalDate: "2024-08-06",
    arrivalTime: "15:00",
    travelClass: "Business",
    price: 900,
  },
  {
    flightNumber: "LH700",
    airline: "Lufthansa",
    origin: {
      airportCode: "FRA",
      country: airportToCountry["FRA"],
    },
    destination: {
      airportCode: "ORD",
      country: airportToCountry["ORD"],
    },
    departureDate: "2024-08-07",
    departureTime: "14:00",
    arrivalDate: "2024-08-07",
    arrivalTime: "16:00",
    travelClass: "First Class",
    price: 1200,
  },
  {
    flightNumber: "EK800",
    airline: "Emirates",
    origin: {
      airportCode: "DXB",
      country: airportToCountry["DXB"],
    },
    destination: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    departureDate: "2024-08-08",
    departureTime: "02:00",
    arrivalDate: "2024-08-08",
    arrivalTime: "10:00",
    travelClass: "Economy",
    price: 850,
  },
  {
    flightNumber: "SQ900",
    airline: "Singapore Airlines",
    origin: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    destination: {
      airportCode: "SFO",
      country: airportToCountry["SFO"],
    },
    departureDate: "2024-08-09",
    departureTime: "05:00",
    arrivalDate: "2024-08-09",
    arrivalTime: "11:00",
    travelClass: "Business",
    price: 1400,
  },
  {
    flightNumber: "QF1000",
    airline: "Qantas",
    origin: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    destination: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    departureDate: "2024-08-10",
    departureTime: "23:00",
    arrivalDate: "2024-08-10",
    arrivalTime: "07:00",
    travelClass: "First Class",
    price: 1600,
  },
  {
    flightNumber: "AA110",
    airline: "American Airlines",
    origin: {
      airportCode: "DFW",
      country: airportToCountry["DFW"],
    },
    destination: {
      airportCode: "MIA",
      country: airportToCountry["MIA"],
    },
    departureDate: "2024-08-11",
    departureTime: "08:00",
    arrivalDate: "2024-08-11",
    arrivalTime: "11:00",
    travelClass: "Economy",
    price: 320,
  },
  {
    flightNumber: "DL210",
    airline: "Delta Airlines",
    origin: {
      airportCode: "MSP",
      country: airportToCountry["MSP"],
    },
    destination: {
      airportCode: "ATL",
      country: airportToCountry["ATL"],
    },
    departureDate: "2024-08-12",
    departureTime: "09:00",
    arrivalDate: "2024-08-12",
    arrivalTime: "12:00",
    travelClass: "Business",
    price: 480,
  },
  {
    flightNumber: "UA310",
    airline: "United Airlines",
    origin: {
      airportCode: "DEN",
      country: airportToCountry["DEN"],
    },
    destination: {
      airportCode: "LAS",
      country: airportToCountry["LAS"],
    },
    departureDate: "2024-08-13",
    departureTime: "07:00",
    arrivalDate: "2024-08-13",
    arrivalTime: "09:00",
    travelClass: "First Class",
    price: 620,
  },
  {
    flightNumber: "SW410",
    airline: "Southwest Airlines",
    origin: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    destination: {
      airportCode: "PHX",
      country: airportToCountry["PHX"],
    },
    departureDate: "2024-08-14",
    departureTime: "10:00",
    arrivalDate: "2024-08-14",
    arrivalTime: "11:30",
    travelClass: "Economy",
    price: 260,
  },
  {
    flightNumber: "BA510",
    airline: "British Airways",
    origin: {
      airportCode: "LHR",
      country: airportToCountry["LHR"],
    },
    destination: {
      airportCode: "ORD",
      country: airportToCountry["ORD"],
    },
    departureDate: "2024-08-15",
    departureTime: "18:00",
    arrivalDate: "2024-08-15",
    arrivalTime: "21:00",
    travelClass: "Economy",
    price: 720,
  },
  {
    flightNumber: "AF610",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "MIA",
      country: airportToCountry["MIA"],
    },
    departureDate: "2024-08-16",
    departureTime: "12:00",
    arrivalDate: "2024-08-16",
    arrivalTime: "17:00",
    travelClass: "Business",
    price: 930,
  },
  {
    flightNumber: "LH720",
    airline: "Lufthansa",
    origin: {
      airportCode: "FRA",
      country: airportToCountry["FRA"],
    },
    destination: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    departureDate: "2024-08-17",
    departureTime: "14:00",
    arrivalDate: "2024-08-17",
    arrivalTime: "17:00",
    travelClass: "First Class",
    price: 1250,
  },
  {
    flightNumber: "EK820",
    airline: "Emirates",
    origin: {
      airportCode: "DXB",
      country: airportToCountry["DXB"],
    },
    destination: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    departureDate: "2024-08-18",
    departureTime: "02:00",
    arrivalDate: "2024-08-18",
    arrivalTime: "08:00",
    travelClass: "Economy",
    price: 860,
  },
  {
    flightNumber: "SQ930",
    airline: "Singapore Airlines",
    origin: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    destination: {
      airportCode: "SFO",
      country: airportToCountry["SFO"],
    },
    departureDate: "2024-08-19",
    departureTime: "05:00",
    arrivalDate: "2024-08-19",
    arrivalTime: "11:30",
    travelClass: "Business",
    price: 1450,
  },
  {
    flightNumber: "QF1030",
    airline: "Qantas",
    origin: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    destination: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    departureDate: "2024-08-20",
    departureTime: "23:00",
    arrivalDate: "2024-08-20",
    arrivalTime: "07:00",
    travelClass: "First Class",
    price: 1650,
  },
  {
    flightNumber: "AA120",
    airline: "American Airlines",
    origin: {
      airportCode: "ORD",
      country: airportToCountry["ORD"],
    },
    destination: {
      airportCode: "MIA",
      country: airportToCountry["MIA"],
    },
    departureDate: "2024-08-21",
    departureTime: "08:00",
    arrivalDate: "2024-08-21",
    arrivalTime: "11:00",
    travelClass: "Economy",
    price: 330,
  },
  {
    flightNumber: "DL220",
    airline: "Delta Airlines",
    origin: {
      airportCode: "ATL",
      country: airportToCountry["ATL"],
    },
    destination: {
      airportCode: "DFW",
      country: airportToCountry["DFW"],
    },
    departureDate: "2024-08-22",
    departureTime: "09:00",
    arrivalDate: "2024-08-22",
    arrivalTime: "12:00",
    travelClass: "Business",
    price: 490,
  },
  {
    flightNumber: "UA320",
    airline: "United Airlines",
    origin: {
      airportCode: "DEN",
      country: airportToCountry["DEN"],
    },
    destination: {
      airportCode: "PHX",
      country: airportToCountry["PHX"],
    },
    departureDate: "2024-08-23",
    departureTime: "07:00",
    arrivalDate: "2024-08-23",
    arrivalTime: "09:00",
    travelClass: "First Class",
    price: 630,
  },
  {
    flightNumber: "SW420",
    airline: "Southwest Airlines",
    origin: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    destination: {
      airportCode: "LAS",
      country: airportToCountry["LAS"],
    },
    departureDate: "2024-08-24",
    departureTime: "10:00",
    arrivalDate: "2024-08-24",
    arrivalTime: "11:00",
    travelClass: "Economy",
    price: 270,
  },
  {
    flightNumber: "BA520",
    airline: "British Airways",
    origin: {
      airportCode: "LHR",
      country: airportToCountry["LHR"],
    },
    destination: {
      airportCode: "ORD",
      country: airportToCountry["ORD"],
    },
    departureDate: "2024-08-25",
    departureTime: "18:00",
    arrivalDate: "2024-08-25",
    arrivalTime: "21:00",
    travelClass: "Economy",
    price: 730,
  },
  {
    flightNumber: "AF620",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "SFO",
      country: airportToCountry["SFO"],
    },
    departureDate: "2024-08-26",
    departureTime: "12:00",
    arrivalDate: "2024-08-26",
    arrivalTime: "16:00",
    travelClass: "Business",
    price: 940,
  },
  {
    flightNumber: "LH730",
    airline: "Lufthansa",
    origin: {
      airportCode: "FRA",
      country: airportToCountry["FRA"],
    },
    destination: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    departureDate: "2024-08-27",
    departureTime: "14:00",
    arrivalDate: "2024-08-27",
    arrivalTime: "16:00",
    travelClass: "First Class",
    price: 1260,
  },
  {
    flightNumber: "EK830",
    airline: "Emirates",
    origin: {
      airportCode: "DXB",
      country: airportToCountry["DXB"],
    },
    destination: {
      airportCode: "ORD",
      country: airportToCountry["ORD"],
    },
    departureDate: "2024-08-28",
    departureTime: "02:00",
    arrivalDate: "2024-08-28",
    arrivalTime: "09:00",
    travelClass: "Economy",
    price: 870,
  },
  {
    flightNumber: "SQ940",
    airline: "Singapore Airlines",
    origin: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    destination: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    departureDate: "2024-08-29",
    departureTime: "05:00",
    arrivalDate: "2024-08-29",
    arrivalTime: "13:00",
    travelClass: "Business",
    price: 1460,
  },
  {
    flightNumber: "QF1040",
    airline: "Qantas",
    origin: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    destination: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    departureDate: "2024-08-30",
    departureTime: "23:00",
    arrivalDate: "2024-08-30",
    arrivalTime: "07:00",
    travelClass: "First Class",
    price: 1680,
  },
  {
    flightNumber: "QR510",
    airline: "Qatar Airways",
    origin: {
      airportCode: "DOH",
      country: airportToCountry["DOH"],
    },
    destination: {
      airportCode: "MIA",
      country: airportToCountry["MIA"],
    },
    departureDate: "2024-09-01",
    departureTime: "14:00",
    arrivalDate: "2024-09-01",
    arrivalTime: "21:00",
    travelClass: "Economy",
    price: 740,
  },
  {
    flightNumber: "LH520",
    airline: "Lufthansa",
    origin: {
      airportCode: "FRA",
      country: airportToCountry["FRA"],
    },
    destination: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    departureDate: "2024-09-02",
    departureTime: "10:00",
    arrivalDate: "2024-09-02",
    arrivalTime: "13:00",
    travelClass: "Business",
    price: 820,
  },
  {
    flightNumber: "AI530",
    airline: "Air India",
    origin: {
      airportCode: "DEL",
      country: airportToCountry["DEL"],
    },
    destination: {
      airportCode: "HKG",
      country: airportToCountry["HKG"],
    },
    departureDate: "2024-09-03",
    departureTime: "17:00",
    arrivalDate: "2024-09-03",
    arrivalTime: "23:00",
    travelClass: "First Class",
    price: 880,
  },
  {
    flightNumber: "AF540",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "PEK",
      country: airportToCountry["PEK"],
    },
    departureDate: "2024-09-04",
    departureTime: "09:00",
    arrivalDate: "2024-09-04",
    arrivalTime: "18:00",
    travelClass: "Economy",
    price: 790,
  },
  {
    flightNumber: "TK550",
    airline: "Turkish Airlines",
    origin: {
      airportCode: "IST",
      country: airportToCountry["IST"],
    },
    destination: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    departureDate: "2024-09-05",
    departureTime: "22:00",
    arrivalDate: "2024-09-07",
    arrivalTime: "07:00",
    travelClass: "Business",
    price: 1200,
  },
  {
    flightNumber: "JL560",
    airline: "Japan Airlines",
    origin: {
      airportCode: "NRT",
      country: airportToCountry["NRT"],
    },
    destination: {
      airportCode: "SGN",
      country: airportToCountry["SGN"],
    },
    departureDate: "2024-09-06",
    departureTime: "11:00",
    arrivalDate: "2024-09-06",
    arrivalTime: "16:00",
    travelClass: "Economy",
    price: 680,
  },
  {
    flightNumber: "QF570",
    airline: "Qantas",
    origin: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    destination: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    departureDate: "2024-09-07",
    departureTime: "14:00",
    arrivalDate: "2024-09-07",
    arrivalTime: "09:00",
    travelClass: "First Class",
    price: 1300,
  },
  {
    flightNumber: "NH580",
    airline: "All Nippon Airways",
    origin: {
      airportCode: "HND",
      country: airportToCountry["HND"],
    },
    destination: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    departureDate: "2024-09-08",
    departureTime: "18:00",
    arrivalDate: "2024-09-08",
    arrivalTime: "15:00",
    travelClass: "Business",
    price: 950,
  },
  {
    flightNumber: "CX590",
    airline: "Cathay Pacific",
    origin: {
      airportCode: "HKG",
      country: airportToCountry["HKG"],
    },
    destination: {
      airportCode: "LHR",
      country: airportToCountry["LHR"],
    },
    departureDate: "2024-09-09",
    departureTime: "23:00",
    arrivalDate: "2024-09-10",
    arrivalTime: "05:00",
    travelClass: "Economy",
    price: 710,
  },
  {
    flightNumber: "SAA600",
    airline: "South African Airways",
    origin: {
      airportCode: "JNB",
      country: airportToCountry["JNB"],
    },
    destination: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    departureDate: "2024-09-10",
    departureTime: "15:00",
    arrivalDate: "2024-09-10",
    arrivalTime: "23:00",
    travelClass: "Business",
    price: 980,
  },
  {
    flightNumber: "EY610",
    airline: "Etihad Airways",
    origin: {
      airportCode: "AUH",
      country: airportToCountry["AUH"],
    },
    destination: {
      airportCode: "MNL",
      country: airportToCountry["MNL"],
    },
    departureDate: "2024-09-11",
    departureTime: "08:00",
    arrivalDate: "2024-09-11",
    arrivalTime: "20:00",
    travelClass: "First Class",
    price: 1160,
  },
  {
    flightNumber: "EK620",
    airline: "Emirates",
    origin: {
      airportCode: "DXB",
      country: airportToCountry["DXB"],
    },
    destination: {
      airportCode: "MIA",
      country: airportToCountry["MIA"],
    },
    departureDate: "2024-09-12",
    departureTime: "19:00",
    arrivalDate: "2024-09-12",
    arrivalTime: "22:00",
    travelClass: "Economy",
    price: 780,
  },
  {
    flightNumber: "BA630",
    airline: "British Airways",
    origin: {
      airportCode: "LHR",
      country: airportToCountry["LHR"],
    },
    destination: {
      airportCode: "DUB",
      country: airportToCountry["DUB"],
    },
    departureDate: "2024-09-13",
    departureTime: "13:00",
    arrivalDate: "2024-09-13",
    arrivalTime: "15:00",
    travelClass: "Business",
    price: 530,
  },
  {
    flightNumber: "SQ640",
    airline: "Singapore Airlines",
    origin: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    destination: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    departureDate: "2024-09-14",
    departureTime: "22:00",
    arrivalDate: "2024-09-14",
    arrivalTime: "06:00",
    travelClass: "Economy",
    price: 900,
  },
  {
    flightNumber: "LH650",
    airline: "Lufthansa",
    origin: {
      airportCode: "FRA",
      country: airportToCountry["FRA"],
    },
    destination: {
      airportCode: "NRT",
      country: airportToCountry["NRT"],
    },
    departureDate: "2024-09-15",
    departureTime: "17:00",
    arrivalDate: "2024-09-16",
    arrivalTime: "11:00",
    travelClass: "First Class",
    price: 950,
  },
  {
    flightNumber: "QF660",
    airline: "Qantas",
    origin: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    destination: {
      airportCode: "SFO",
      country: airportToCountry["SFO"],
    },
    departureDate: "2024-09-16",
    departureTime: "16:00",
    arrivalDate: "2024-09-16",
    arrivalTime: "08:00",
    travelClass: "Business",
    price: 1250,
  },
  {
    flightNumber: "AA670",
    airline: "American Airlines",
    origin: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    destination: {
      airportCode: "YYZ",
      country: airportToCountry["YYZ"],
    },
    departureDate: "2024-09-17",
    departureTime: "06:00",
    arrivalDate: "2024-09-17",
    arrivalTime: "08:00",
    travelClass: "Economy",
    price: 320,
  },
  {
    flightNumber: "CA680",
    airline: "China Airlines",
    origin: {
      airportCode: "TPE",
      country: airportToCountry["TPE"],
    },
    destination: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    departureDate: "2024-09-18",
    departureTime: "23:00",
    arrivalDate: "2024-09-20",
    arrivalTime: "07:00",
    travelClass: "First Class",
    price: 1180,
  },
  {
    flightNumber: "NZ690",
    airline: "Air New Zealand",
    origin: {
      airportCode: "AKL",
      country: airportToCountry["AKL"],
    },
    destination: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    departureDate: "2024-09-19",
    departureTime: "14:00",
    arrivalDate: "2024-09-19",
    arrivalTime: "09:00",
    travelClass: "Economy",
    price: 760,
  },
  {
    flightNumber: "LH700",
    airline: "Lufthansa",
    origin: {
      airportCode: "MUC",
      country: airportToCountry["MUC"],
    },
    destination: {
      airportCode: "ZRH",
      country: airportToCountry["ZRH"],
    },
    departureDate: "2024-09-20",
    departureTime: "11:00",
    arrivalDate: "2024-09-20",
    arrivalTime: "12:00",
    travelClass: "Business",
    price: 400,
  },
  {
    flightNumber: "EK710",
    airline: "Emirates",
    origin: {
      airportCode: "DXB",
      country: airportToCountry["DXB"],
    },
    destination: {
      airportCode: "BKK",
      country: airportToCountry["BKK"],
    },
    departureDate: "2024-09-21",
    departureTime: "20:00",
    arrivalDate: "2024-09-22",
    arrivalTime: "06:00",
    travelClass: "First Class",
    price: 900,
  },
  {
    flightNumber: "SQ720",
    airline: "Singapore Airlines",
    origin: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    destination: {
      airportCode: "HKG",
      country: airportToCountry["HKG"],
    },
    departureDate: "2024-09-22",
    departureTime: "12:00",
    arrivalDate: "2024-09-22",
    arrivalTime: "17:00",
    travelClass: "Economy",
    price: 620,
  },
  {
    flightNumber: "QF730",
    airline: "Qantas",
    origin: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    destination: {
      airportCode: "SFO",
      country: airportToCountry["SFO"],
    },
    departureDate: "2024-09-23",
    departureTime: "09:00",
    arrivalDate: "2024-09-23",
    arrivalTime: "05:00",
    travelClass: "Business",
    price: 1300,
  },
  {
    flightNumber: "AF740",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "MIA",
      country: airportToCountry["MIA"],
    },
    departureDate: "2024-09-24",
    departureTime: "16:00",
    arrivalDate: "2024-09-24",
    arrivalTime: "20:00",
    travelClass: "First Class",
    price: 950,
  },
  {
    flightNumber: "NH750",
    airline: "All Nippon Airways",
    origin: {
      airportCode: "HND",
      country: airportToCountry["HND"],
    },
    destination: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    departureDate: "2024-09-25",
    departureTime: "13:00",
    arrivalDate: "2024-09-25",
    arrivalTime: "10:00",
    travelClass: "Economy",
    price: 740,
  },
  {
    flightNumber: "BA760",
    airline: "British Airways",
    origin: {
      airportCode: "LHR",
      country: airportToCountry["LHR"],
    },
    destination: {
      airportCode: "DUB",
      country: airportToCountry["DUB"],
    },
    departureDate: "2024-09-26",
    departureTime: "08:00",
    arrivalDate: "2024-09-26",
    arrivalTime: "10:00",
    travelClass: "Business",
    price: 550,
  },
  {
    flightNumber: "QR770",
    airline: "Qatar Airways",
    origin: {
      airportCode: "DOH",
      country: airportToCountry["DOH"],
    },
    destination: {
      airportCode: "BKK",
      country: airportToCountry["BKK"],
    },
    departureDate: "2024-09-27",
    departureTime: "22:00",
    arrivalDate: "2024-09-28",
    arrivalTime: "05:00",
    travelClass: "First Class",
    price: 980,
  },
  {
    flightNumber: "LH780",
    airline: "Lufthansa",
    origin: {
      airportCode: "FRA",
      country: airportToCountry["FRA"],
    },
    destination: {
      airportCode: "PEK",
      country: airportToCountry["PEK"],
    },
    departureDate: "2024-09-28",
    departureTime: "15:00",
    arrivalDate: "2024-09-28",
    arrivalTime: "23:00",
    travelClass: "Economy",
    price: 720,
  },
  {
    flightNumber: "CX790",
    airline: "Cathay Pacific",
    origin: {
      airportCode: "HKG",
      country: airportToCountry["HKG"],
    },
    destination: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    departureDate: "2024-09-29",
    departureTime: "18:00",
    arrivalDate: "2024-09-29",
    arrivalTime: "15:00",
    travelClass: "Business",
    price: 900,
  },
  {
    flightNumber: "QF800",
    airline: "Qantas",
    origin: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    destination: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    departureDate: "2024-09-30",
    departureTime: "10:00",
    arrivalDate: "2024-09-30",
    arrivalTime: "06:00",
    travelClass: "First Class",
    price: 1400,
  },
  {
    flightNumber: "AS810",
    airline: "Alaska Airlines",
    origin: {
      airportCode: "SEA",
      country: airportToCountry["SEA"],
    },
    destination: {
      airportCode: "YVR",
      country: airportToCountry["YVR"],
    },
    departureDate: "2024-09-01",
    departureTime: "09:00",
    arrivalDate: "2024-09-01",
    arrivalTime: "10:00",
    travelClass: "Economy",
    price: 200,
  },
  {
    flightNumber: "IB820",
    airline: "Iberia",
    origin: {
      airportCode: "MAD",
      country: airportToCountry["MAD"],
    },
    destination: {
      airportCode: "EZE",
      country: airportToCountry["EZE"],
    },
    departureDate: "2024-09-02",
    departureTime: "22:00",
    arrivalDate: "2024-09-03",
    arrivalTime: "08:00",
    travelClass: "Business",
    price: 1300,
  },
  {
    flightNumber: "SA830",
    airline: "South African Airways",
    origin: {
      airportCode: "JNB",
      country: airportToCountry["JNB"],
    },
    destination: {
      airportCode: "AUH",
      country: airportToCountry["AUH"],
    },
    departureDate: "2024-09-03",
    departureTime: "14:00",
    arrivalDate: "2024-09-04",
    arrivalTime: "23:00",
    travelClass: "Economy",
    price: 680,
  },
  {
    flightNumber: "AF840",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "AMS",
      country: airportToCountry["AMS"],
    },
    departureDate: "2024-09-04",
    departureTime: "10:00",
    arrivalDate: "2024-09-04",
    arrivalTime: "11:30",
    travelClass: "Business",
    price: 500,
  },
  {
    flightNumber: "EK850",
    airline: "Emirates",
    origin: {
      airportCode: "DXB",
      country: airportToCountry["DXB"],
    },
    destination: {
      airportCode: "JNB",
      country: airportToCountry["JNB"],
    },
    departureDate: "2024-09-05",
    departureTime: "21:00",
    arrivalDate: "2024-09-06",
    arrivalTime: "06:00",
    travelClass: "Economy",
    price: 730,
  },
  {
    flightNumber: "AI860",
    airline: "Air India",
    origin: {
      airportCode: "DEL",
      country: airportToCountry["DEL"],
    },
    destination: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    departureDate: "2024-09-06",
    departureTime: "05:00",
    arrivalDate: "2024-09-06",
    arrivalTime: "14:00",
    travelClass: "Business",
    price: 850,
  },
  {
    flightNumber: "JL870",
    airline: "Japan Airlines",
    origin: {
      airportCode: "NRT",
      country: airportToCountry["NRT"],
    },
    destination: {
      airportCode: "HKG",
      country: airportToCountry["HKG"],
    },
    departureDate: "2024-09-07",
    departureTime: "20:00",
    arrivalDate: "2024-09-07",
    arrivalTime: "23:00",
    travelClass: "Economy",
    price: 670,
  },
  {
    flightNumber: "UA880",
    airline: "United Airlines",
    origin: {
      airportCode: "ORD",
      country: airportToCountry["ORD"],
    },
    destination: {
      airportCode: "SFO",
      country: airportToCountry["SFO"],
    },
    departureDate: "2024-09-08",
    departureTime: "16:00",
    arrivalDate: "2024-09-08",
    arrivalTime: "18:00",
    travelClass: "Business",
    price: 580,
  },
  {
    flightNumber: "AA890",
    airline: "American Airlines",
    origin: {
      airportCode: "DFW",
      country: airportToCountry["DFW"],
    },
    destination: {
      airportCode: "LHR",
      country: airportToCountry["LHR"],
    },
    departureDate: "2024-09-09",
    departureTime: "11:00",
    arrivalDate: "2024-09-09",
    arrivalTime: "23:00",
    travelClass: "First Class",
    price: 1400,
  },
  {
    flightNumber: "VS900",
    airline: "Virgin Atlantic",
    origin: {
      airportCode: "LHR",
      country: airportToCountry["LHR"],
    },
    destination: {
      airportCode: "MIA",
      country: airportToCountry["MIA"],
    },
    departureDate: "2024-09-10",
    departureTime: "13:00",
    arrivalDate: "2024-09-10",
    arrivalTime: "18:00",
    travelClass: "Economy",
    price: 750,
  },
  {
    flightNumber: "CX910",
    airline: "Cathay Pacific",
    origin: {
      airportCode: "HKG",
      country: airportToCountry["HKG"],
    },
    destination: {
      airportCode: "LAX",
      country: airportToCountry["LAX"],
    },
    departureDate: "2024-09-11",
    departureTime: "20:00",
    arrivalDate: "2024-09-11",
    arrivalTime: "18:00",
    travelClass: "First Class",
    price: 1300,
  },
  {
    flightNumber: "JL920",
    airline: "Japan Airlines",
    origin: {
      airportCode: "HND",
      country: airportToCountry["HND"],
    },
    destination: {
      airportCode: "LHR",
      country: airportToCountry["LHR"],
    },
    departureDate: "2024-09-12",
    departureTime: "07:00",
    arrivalDate: "2024-09-12",
    arrivalTime: "14:00",
    travelClass: "Economy",
    price: 730,
  },
  {
    flightNumber: "NH930",
    airline: "All Nippon Airways",
    origin: {
      airportCode: "HND",
      country: airportToCountry["HND"],
    },
    destination: {
      airportCode: "SFO",
      country: airportToCountry["SFO"],
    },
    departureDate: "2024-09-13",
    departureTime: "19:00",
    arrivalDate: "2024-09-13",
    arrivalTime: "12:00",
    travelClass: "Business",
    price: 980,
  },
  {
    flightNumber: "LX940",
    airline: "Swiss International Air Lines",
    origin: {
      airportCode: "ZRH",
      country: airportToCountry["ZRH"],
    },
    destination: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    departureDate: "2024-09-14",
    departureTime: "09:00",
    arrivalDate: "2024-09-14",
    arrivalTime: "10:30",
    travelClass: "Economy",
    price: 450,
  },
  {
    flightNumber: "IB950",
    airline: "Iberia",
    origin: {
      airportCode: "MAD",
      country: airportToCountry["MAD"],
    },
    destination: {
      airportCode: "MIA",
      country: airportToCountry["MIA"],
    },
    departureDate: "2024-09-15",
    departureTime: "18:00",
    arrivalDate: "2024-09-15",
    arrivalTime: "23:00",
    travelClass: "Business",
    price: 1250,
  },
  {
    flightNumber: "AF960",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "JFK",
      country: airportToCountry["JFK"],
    },
    departureDate: "2024-09-16",
    departureTime: "21:00",
    arrivalDate: "2024-09-16",
    arrivalTime: "18:00",
    travelClass: "Economy",
    price: 790,
  },
  {
    flightNumber: "TK970",
    airline: "Turkish Airlines",
    origin: {
      airportCode: "IST",
      country: airportToCountry["IST"],
    },
    destination: {
      airportCode: "HND",
      country: airportToCountry["HND"],
    },
    departureDate: "2024-09-17",
    departureTime: "16:00",
    arrivalDate: "2024-09-18",
    arrivalTime: "11:00",
    travelClass: "First Class",
    price: 1100,
  },
  {
    flightNumber: "JL980",
    airline: "Japan Airlines",
    origin: {
      airportCode: "HND",
      country: airportToCountry["HND"],
    },
    destination: {
      airportCode: "BKK",
      country: airportToCountry["BKK"],
    },
    departureDate: "2024-09-18",
    departureTime: "08:00",
    arrivalDate: "2024-09-18",
    arrivalTime: "15:00",
    travelClass: "Economy",
    price: 650,
  },
  {
    flightNumber: "NH990",
    airline: "All Nippon Airways",
    origin: {
      airportCode: "NRT",
      country: airportToCountry["NRT"],
    },
    destination: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    departureDate: "2024-09-19",
    departureTime: "23:00",
    arrivalDate: "2024-09-20",
    arrivalTime: "06:00",
    travelClass: "Business",
    price: 950,
  },
  {
    flightNumber: "KE1000",
    airline: "Korean Air",
    origin: {
      airportCode: "ICN",
      country: airportToCountry["ICN"],
    },
    destination: {
      airportCode: "HKG",
      country: airportToCountry["HKG"],
    },
    departureDate: "2024-09-20",
    departureTime: "10:00",
    arrivalDate: "2024-09-20",
    arrivalTime: "15:00",
    travelClass: "Economy",
    price: 680,
  },
  {
    flightNumber: "CX1010",
    airline: "Cathay Pacific",
    origin: {
      airportCode: "HKG",
      country: airportToCountry["HKG"],
    },
    destination: {
      airportCode: "NRT",
      country: airportToCountry["NRT"],
    },
    departureDate: "2024-09-21",
    departureTime: "22:00",
    arrivalDate: "2024-09-22",
    arrivalTime: "05:00",
    travelClass: "First Class",
    price: 990,
  },
  {
    flightNumber: "MH1020",
    airline: "Malaysia Airlines",
    origin: {
      airportCode: "KUL",
      country: airportToCountry["KUL"],
    },
    destination: {
      airportCode: "SIN",
      country: airportToCountry["SIN"],
    },
    departureDate: "2024-09-22",
    departureTime: "07:00",
    arrivalDate: "2024-09-22",
    arrivalTime: "08:00",
    travelClass: "Economy",
    price: 250,
  },
  {
    flightNumber: "JL1030",
    airline: "Japan Airlines",
    origin: {
      airportCode: "HND",
      country: airportToCountry["HND"],
    },
    destination: {
      airportCode: "MUC",
      country: airportToCountry["MUC"],
    },
    departureDate: "2024-09-23",
    departureTime: "16:00",
    arrivalDate: "2024-09-23",
    arrivalTime: "22:00",
    travelClass: "Business",
    price: 990,
  },
  {
    flightNumber: "AF1040",
    airline: "Air France",
    origin: {
      airportCode: "CDG",
      country: airportToCountry["CDG"],
    },
    destination: {
      airportCode: "SFO",
      country: airportToCountry["SFO"],
    },
    departureDate: "2024-09-24",
    departureTime: "20:00",
    arrivalDate: "2024-09-24",
    arrivalTime: "23:00",
    travelClass: "Economy",
    price: 790,
  },
  {
    flightNumber: "QR1050",
    airline: "Qatar Airways",
    origin: {
      airportCode: "DOH",
      country: airportToCountry["DOH"],
    },
    destination: {
      airportCode: "SYD",
      country: airportToCountry["SYD"],
    },
    departureDate: "2024-09-25",
    departureTime: "18:00",
    arrivalDate: "2024-09-26",
    arrivalTime: "06:00",
    travelClass: "First Class",
    price: 1150,
  },
];
