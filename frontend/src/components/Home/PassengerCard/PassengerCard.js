import React, { useState, useEffect, useRef } from 'react';

const PassengerCard = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Select Title');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsDropdownOpen(false);
  };

  // Close the dropdown if clicked outside
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropdownOpen(false);
    }
  };

  const handleDateChange = (e) => {
    setDateOfBirth(e.target.value);
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className='container mx-auto w-10/12 ring-1 ring-slate-200 my-4 shadow-2'>
      <p className='pt-4 pb-2 px-6 font-semibold text-lg text-slate-800'>Passenger 1 (adult)</p>
      <p className='px-6 text-sm'>Make sure the names you enter exactly match your passport, and please use English characters only. Names can’t be changed once you have completed your booking.</p>
      
      <div className="relative inline-block mx-6 my-4 w-60" ref={dropdownRef}>
        <input
          type="text"
          value={selectedOption}
          onClick={toggleDropdown}
          readOnly
          className="py-2 px-4 h-12 text-medium font-medium ring-1 ring-slate-500 focus:border-slate-500 outline-none rounded w-full cursor-pointer"
        />
        {isDropdownOpen && (
          <div className="absolute w-full mt-1 bg-white ring-1 ring-slate-200 rounded shadow-lg">
            <ul className="py-1">
              <li
                onClick={() => handleOptionClick('Mr')}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer border-b border-slate-200"
              >
                Mr
              </li>
              <li
                onClick={() => handleOptionClick('Mrs')}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer border-b border-slate-200"
              >
                Mrs
              </li>
              <li
                onClick={() => handleOptionClick('Miss')}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer border-b border-slate-200"
              >
                Miss
              </li>
              <li
                onClick={() => handleOptionClick('Ms')}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer border-b border-slate-200"
              >
                Ms
              </li>
              <li
                onClick={() => handleOptionClick('Undisclosed')}
                className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
              >
                Undisclosed
              </li>
            </ul>
          </div>
        )}
      </div>
      
      <div className='flex justify-start items-center w-full py-2 px-6'>
        <input
          type="text"
          value={firstName}
          placeholder='First name'
          onChange={(e) => setFirstName(e.target.value)}
          className="py-2 px-4 h-12 mr-6 text-medium w-full font-medium ring-1 ring-slate-500 focus:border-slate-500 outline-none rounded cursor-text"
        />
        <input
          type="text"
          value={lastName}
          placeholder='Last name'
          onChange={(e) => setLastName(e.target.value)}
          className="py-2 px-4 h-12 text-medium font-medium w-full ring-1 ring-slate-500 focus:border-slate-500 outline-none rounded cursor-text"
        />
      </div>
      
      <div className=" w-6/12 py-2 px-6">
        <input
          id="dateOfBirth"
          type="date"
          value={dateOfBirth}
          onChange={handleDateChange}
          className="py-2 px-4 h-12 text-medium font-medium w-full ring-1 ring-slate-500 focus:ring-slate-500 outline-none rounded"
        />
      </div>
    </div>
  );
};

export default PassengerCard;
