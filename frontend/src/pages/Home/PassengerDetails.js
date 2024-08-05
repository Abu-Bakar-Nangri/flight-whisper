import React, { useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import PassengerCard from "../../components/Home/PassengerCard/PassengerCard";
import { useLocation } from "react-router-dom";

const PassengerDetails = () => {
  const [showScrollTopButton, setShowScrollTopButton] = useState(false);
//   const location = useLocation();
//   const { flights } = location.state;

//   console.log(flights)

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
      <Header />
      <div className="container mx-auto">
        <div className="flex justify-between items-center py-6">
          <div>
            <p>
              gjhg
            </p>
            <p>
              ghfhg
            </p>
          </div>
          <div className="cursor-pointer hover:underline h-12 bg-slate-500 rounded flex justify-center items-center px-6 text-white">
            View Summary
          </div>
        </div>
        <div className="flex justify-around items-center my-10">
          <div className="border-b-2 text-left border-slate-900 w-auto flex justify-start items-center">
            <h1 className="text-3xl font-semibold text-slate-900">1</h1>
            <sub className="px-2 text-base text-slate-900">Flights</sub>
          </div>
          <div className="border-b-2 text-left border-slate-900 w-auto flex justify-start items-center">
            <h1 className="text-3xl font-semibold text-slate-900">2</h1>
            <sub className="px-2 text-base text-slate-900">Passengers</sub>
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
      </div>
      <PassengerCard/>
      <Footer />
      {showScrollTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-700"
        >
          Scroll to Top
        </button>
      )}
    </>
  );
};

export default PassengerDetails;
