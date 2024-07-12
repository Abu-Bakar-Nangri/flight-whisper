import React, { useState } from 'react';
import CSS from './FlightsSearch.module.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FlightsSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [travelClass, setTravelClass] = useState('Economy');
    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0);
    const [infant, setInfant] = useState(0);
    const [departDate, setDepartDate] = useState(null);
    const [returnDate, setReturnDate] = useState(null);
    const [tripType, setTripType] = useState('return');
    const [originCity, setOriginCity] = useState('');
    const [destinationCity, setDestinationCity] = useState('');

    const cities = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

    const handleRadioChange = (e) => {
        setTripType(e.target.value);
        if (e.target.value === 'oneway') {
            setReturnDate(null);
        }
    };

    const handleNegativeAdult = () => {
        if (adult > 1) {
            if (infant >= adult) {
                toast.error('Number of infants cannot exceed number of adults');
            } else {
                setAdult(adult - 1);
            }
        }
    };

    const handlePositiveAdult = () => {
        if (adult < 5) {
            setAdult(adult + 1);
        } else {
            toast.error('Number of adults cannot exceed 5');
        }
    };

    const handleNegativeChildren = () => {
        if (children > 0) {
            setChildren(children - 1);
        }
    };

    const handlePositiveChildren = () => {
        if (children < 5) {
            setChildren(children + 1);
        } else {
            toast.error('Number of children cannot exceed 5');
        }
    };

    const handleNegativeInfant = () => {
        if (infant > 0) {
            setInfant(infant - 1);
        }
    };

    const handlePositiveInfant = () => {
        if (infant < adult) {
            setInfant(infant + 1);
        } else {
            toast.error('Number of infants cannot exceed number of adults');
        }
    };

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleDepartDateChange = (date) => {
        if (returnDate && date > returnDate) {
            toast.error('Departure date cannot be later than return date');
        } else {
            setDepartDate(date);
        }
    };

    const handleReturnDateChange = (date) => {
        if (departDate && date < departDate) {
            toast.error('Return date cannot be earlier than departure date');
        } else {
            setReturnDate(date);
        }
    };

    const handleSearch = () => {
        if (!originCity) {
            toast.error('Please enter the origin city');
            return;
        }
        if (!destinationCity) {
            toast.error('Please enter the destination city');
            return;
        }
        if (!departDate) {
            toast.error('Please select a departure date');
            return;
        }
        if (tripType === 'return' && !returnDate) {
            toast.error('Please select a return date');
            return;
        }
        // Perform the search action here
        console.log('Search action performed');
    };

    return (
        <div>
            <ToastContainer />
            <div className={CSS['radio-container']}>
                <input type='radio' name='radio' value={'return'} checked={tripType === 'return'} onChange={handleRadioChange} />
                <label>Return</label>
                <input type='radio' name='radio' value={'oneway'} checked={tripType === 'oneway'} onChange={handleRadioChange} />
                <label>One way</label>
            </div>

            <div className={CSS['flights-inputs']}>
                <div className={CSS['flights-input']}>
                    <label>From</label>
                    <input 
                        type='text' 
                        placeholder='Origin city' 
                        value={originCity} 
                        onChange={(e) => setOriginCity(e.target.value)} 
                    />
                </div>
                <div className={CSS['flights-input']}>
                    <label>To</label>
                    <input 
                        type='text' 
                        placeholder='Destination city' 
                        value={destinationCity} 
                        onChange={(e) => setDestinationCity(e.target.value)} 
                    />
                </div>
                <div className={CSS['flights-input']}>
                    <label>Depart</label>
                    <DatePicker
                        selected={departDate}
                        onChange={handleDepartDateChange}
                        minDate={new Date()}
                        placeholderText='Select a date'
                        id='depart-input'
                        className={CSS['date-picker']}
                    />
                </div>
                <div className={CSS['flights-input']}>
                    <label>Return</label>
                    <DatePicker
                        selected={returnDate}
                        onChange={handleReturnDateChange}
                        minDate={new Date()}
                        placeholderText='Select a date'
                        id='return-input'
                        className={CSS['date-picker']}
                        disabled={tripType === 'oneway'}
                    />
                </div>
                <div className={CSS['flights-input']}>
                    <label>Traveller and cabin class</label>
                    <div className={CSS['custom-dropdown']}>
                        <button className={CSS['dropdown-toggle']} onClick={toggleDropdown}>
                            {adult + children + infant} traveler, {travelClass}
                        </button>
                        {isOpen && (
                            <div className={CSS['dropdown-content']}>
                                <select value={travelClass} onChange={(e) => setTravelClass(e.target.value)}>
                                    <option value="Economy">Economy</option>
                                    <option value="Premium Economy">Premium Economy</option>
                                    <option value="Business Class">Business Class</option>
                                    <option value="First Class">First Class</option>
                                </select>
                                <p>Adults</p>
                                <div className={CSS['adults-container']}>
                                    <button onClick={handleNegativeAdult}><i className="fa-solid fa-minus"></i></button>
                                    <span>{adult}</span>
                                    <button onClick={handlePositiveAdult}><i className="fa-solid fa-plus"></i></button>
                                    <p>16+ years</p>
                                </div>

                                <p>Children</p>
                                <div className={CSS['adults-container']}>
                                    <button onClick={handleNegativeChildren}><i className="fa-solid fa-minus"></i></button>
                                    <span>{children}</span>
                                    <button onClick={handlePositiveChildren}><i className="fa-solid fa-plus"></i></button>
                                    <p>2-15 years</p>
                                </div>

                                <p>Infants</p>
                                <div className={CSS['adults-container']}>
                                    <button onClick={handleNegativeInfant}><i className="fa-solid fa-minus"></i></button>
                                    <span>{infant}</span>
                                    <button onClick={handlePositiveInfant}><i className="fa-solid fa-plus"></i></button>
                                    <p>0-2 years</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={CSS['flights-input']}>
                    <label>Search</label>
                    <button className={CSS['flights-search']} onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FlightsSearch;
