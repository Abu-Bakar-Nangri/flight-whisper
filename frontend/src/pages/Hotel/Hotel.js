import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import CSS from './Hotel.module.css'
import HotelBooking from './HotelInfo'

const Hotel = () => {
  return (
    <div>
      <div className={CSS['container-fluid']}>
        <Header />
        <h1>Hotels</h1>
        <div className={`${CSS["flights-container"]} container`}>
          <HotelBooking />
        </div>
      </div>
      <div className='container'>
        <h1>Hotels</h1>
        
      </div>
      <Footer />
    </div>
  )
}

export default Hotel
