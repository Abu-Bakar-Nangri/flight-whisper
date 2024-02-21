import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage'
import About from './About/About';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Hotel from './Hotel/Hotel';
import TripIdeas from './Trip Ideas/TripIdeas';

const RouteMenu = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/blog' element={<Blog/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/hotel' element={<Hotel/>}></Route>
                <Route path='/tripideas' element={<TripIdeas/>}></Route>
                <Route></Route>
                <Route></Route>
                <Route></Route>
                <Route></Route>
            </Routes>
        </Router>
      
    </div>
  )
}

export default RouteMenu
