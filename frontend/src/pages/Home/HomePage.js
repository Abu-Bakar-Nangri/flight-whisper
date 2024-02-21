import React from 'react';
import CSS from './HomePage.module.css';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import FlightsSearch from '../../components/Home/FlighsSearch/FlightsSearch';


const HomePage = () => {

  return (
    <div>
      <div className={CSS['container-background']}>
        <Header />
        <div className={`${CSS['flights-container']} container`}>
          <FlightsSearch />
        </div>
      </div>
      <div className='container'>
        <h1>Hotels</h1>
        <h1>Hotels</h1>
        <h1>Hotels</h1>
        <h1>Hotels</h1>
        <h1>Hotels</h1>
        <h1>Hotels</h1>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
