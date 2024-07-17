import React, { useState } from 'react';
import CSS from './HotelInfo.module.css'; // Assuming you have a CSS module for hotel booking styles
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HotelBooking = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [guests, setGuests] = useState(1);
    const [rooms, setRooms] = useState(1);
    const [checkInDate, setCheckInDate] = useState(null);
    const [checkOutDate, setCheckOutDate] = useState(null);
    const [location, setLocation] = useState('');
    const [roomType, setRoomType] = useState('Standard');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleCheckInDateChange = (date) => {
        if (checkOutDate && date > checkOutDate) {
            toast.error('Check-in date cannot be later than check-out date');
        } else {
            setCheckInDate(date);
        }
    };

    const handleCheckOutDateChange = (date) => {
        if (checkInDate && date < checkInDate) {
            toast.error('Check-out date cannot be earlier than check-in date');
        } else {
            setCheckOutDate(date);
        }
    };

    const handleSearch = () => {
        if (!location) {
            toast.error('Please enter the location');
            return;
        }
        if (!checkInDate) {
            toast.error('Please select a check-in date');
            return;
        }
        if (!checkOutDate) {
            toast.error('Please select a check-out date');
            return;
        }
        // Perform the search action here
        console.log('Search action performed');
    };

    return (
        <div>
            <ToastContainer />
            <div className={CSS['hotel-inputs']}>
                <div className={CSS['hotel-input']}>
                    <label>Location</label>
                    <input 
                        type='text' 
                        placeholder='Destination city or hotel name' 
                        value={location} 
                        onChange={(e) => setLocation(e.target.value)} 
                    />
                </div>
                <div className={CSS['hotel-input']}>
                    <label>Check-in</label>
                    <DatePicker
                        selected={checkInDate}
                        onChange={handleCheckInDateChange}
                        minDate={new Date()}
                        placeholderText='Select a date'
                        id='checkin-input'
                        className={CSS['date-picker']}
                    />
                </div>
                <div className={CSS['hotel-input']}>
                    <label>Check-out</label>
                    <DatePicker
                        selected={checkOutDate}
                        onChange={handleCheckOutDateChange}
                        minDate={new Date()}
                        placeholderText='Select a date'
                        id='checkout-input'
                        className={CSS['date-picker']}
                    />
                </div>
                <div className={CSS['hotel-input']}>
                    <label>Rooms and Guests</label>
                    <div className={CSS['custom-dropdown']}>
                        <button className={CSS['dropdown-toggle']} onClick={toggleDropdown}>
                            {guests} guests, {rooms} room(s)
                        </button>
                        {isOpen && (
                            <div className={CSS['dropdown-content']}>
                                <p>Rooms</p>
                                <div className={CSS['rooms-container']}>
                                    <button onClick={() => setRooms(rooms - 1)}><i className="fa-solid fa-minus"></i></button>
                                    <span>{rooms}</span>
                                    <button onClick={() => setRooms(rooms + 1)}><i className="fa-solid fa-plus"></i></button>
                                </div>
                                <p>Guests</p>
                                <div className={CSS['guests-container']}>
                                    <button onClick={() => setGuests(guests - 1)}><i className="fa-solid fa-minus"></i></button>
                                    <span>{guests}</span>
                                    <button onClick={() => setGuests(guests + 1)}><i className="fa-solid fa-plus"></i></button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                <div className={CSS['hotel-input']}>
                    <label>Search</label>
                    <button className={CSS['hotel-search']} onClick={handleSearch}>
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HotelBooking;
