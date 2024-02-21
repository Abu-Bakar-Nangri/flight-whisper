import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import CSS from './TripIdeas.module.css'

const TripIdeas = () => {
  return (
    <div>
      <div className={CSS['container-fluid']}>
        <Header />
        <h1>Trip Ideas</h1>
        <p >
          <Link to={'/'} className={CSS['home-link']}><span>Home</span></Link>
          <i className={`${CSS['arrow']} fa-solid fa-arrow-right`}></i>
          <Link to={'/tripideas'} className={CSS['about-link']}><span>About Us</span></Link>
        </p>
      </div>
      <div className='container'>
        <h1>Trip Ideas</h1>
      </div>
      <Footer />
    </div>
  )
}

export default TripIdeas
