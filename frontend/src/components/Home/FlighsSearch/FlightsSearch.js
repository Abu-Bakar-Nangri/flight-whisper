import React, { useState } from 'react';
import CSS from './FlightsSearch.module.css';

const FlightsSearch = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [travelclass, setTravelClass] = useState('Economy');
    const [adult, setAdult] = useState(1);
    const [children, setChildren] = useState(0);
    const [departDate, setDepartDate] = useState('');
    const [returnDate, setReturnDate] = useState('');
    const [tripType, setTripType] = useState('return');

    const currentDate = new Date().toISOString().split('T')[0];

    const handleRadioChange = (e) => {
        setTripType(e.target.value);
        if (e.target.value === 'oneway') {
            setReturnDate('');
        }
    };


    const handleNegavtiveAdult = () => {
        (adult > 1) ? setAdult(adult - 1) : setAdult(adult);
    }
    const handlePositiveAdult = () => {
        (adult < 10) ? setAdult(adult + 1) : setAdult(adult)
    }

    const handleNegavtiveChildren = () => {
        children > 0 ? setChildren(children - 1) : setChildren(children)
    }
    const handlePositiveChildren = () => {
        (children < 10) ? setChildren(children + 1) : setChildren(children)
    }

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
            <div>
            <div className={CSS['radio-container']}>
                <input type='radio' name='radio' value={'return'} checked={tripType === 'return'} onChange={handleRadioChange} />
                <label>Return</label>
                <input type='radio' name='radio' value={'oneway'} checked={tripType === 'oneway'} onChange={handleRadioChange} />
                <label>One way</label>
            </div>

            <div className={CSS['flights-inputs']}>
                <div className={CSS['flights-input']}>
                    <label>From</label>
                    <input type='text' placeholder='Country or City' />
                </div>
                <div className={CSS['flights-input']}>
                    <label>To</label>
                    <input type='text' placeholder='Country or City' />
                    
                </div>
                <div className={CSS['flights-input']}>
                    <label>Depart</label>
                    <input min={currentDate} type='date' value={departDate} onChange={(e) => setDepartDate(e.target.value)} />
                </div>
                <div className={CSS['flights-input']}>
                    <label>Return</label>
                    <input min={currentDate} type='date' value={returnDate} onChange={(e) => setReturnDate(e.target.value)} disabled={tripType === 'oneway'} />
                </div>
                <div className={CSS['flights-input']}>
                    <label>Traveller and cabin class</label>
                    <div className={CSS['custom-dropdown']}>
                        <button className={CSS['dropdown-toggle']} onClick={toggleDropdown}>
                            {adult + children} traveler, {travelclass}
                        </button>
                        {isOpen && (
                            <div className={CSS['dropdown-content']}>
                                <select value={travelclass} onChange={(e) => setTravelClass(e.target.value)}>
                                    <option value="Economy">Economy</option>
                                    <option value="Premium Economy">Premium Economy</option>
                                    <option value="Business Class">Business Class</option>
                                    <option value="First Class">First Class</option>
                                </select>
                                <p>Adults</p>
                                <div className={CSS['adults-container']}>
                                    <button onClick={handleNegavtiveAdult}><i class="fa-solid fa-minus"></i></button>
                                    <span>{adult}</span>
                                    <button onClick={handlePositiveAdult}><i class="fa-solid fa-plus"></i></button>
                                    <p>16+ years</p>
                                </div>

                                <p>Children</p>
                                <div className={CSS['adults-container']}>
                                    <button onClick={handleNegavtiveChildren}><i class="fa-solid fa-minus"></i></button>
                                    <span>{children}</span>
                                    <button onClick={handlePositiveChildren}><i class="fa-solid fa-plus"></i></button>
                                    <p>0-15 years</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlightsSearch;
