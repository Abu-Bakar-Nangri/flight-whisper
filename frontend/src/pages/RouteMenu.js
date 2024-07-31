import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Home/HomePage'
import About from './About/About';
import Blog from './Blog/Blog';
import Contact from './Contact/Contact';
import Hotel from './Hotel/Hotel';
import TripIdeas from './Trip Ideas/TripIdeas';
import Login from './CredentialsPages/Login';
import Register from './CredentialsPages/Register';
import ForgetPassword from './CredentialsPages/ForgetPassword';
import VerifyOTP from './CredentialsPages/VerifyOTP';
import ResetPassword from './CredentialsPages/ResetPassword';
import PasswordChanged from './CredentialsPages/PasswordChanged';
import SearchedFlight from './Home/SearchedFlight';


const RouteMenu = () => {
  return (
    <div>
        <Router>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/about' element={<About/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/forget-password' element={<ForgetPassword/>}/>
                <Route path='/verify-otp' element={<VerifyOTP/>}/>
                <Route path='/reset-password' element={<ResetPassword/>}/>
                <Route path='/password-changed' element={<PasswordChanged/>}/>
                <Route path='/search-flight' element={<SearchedFlight/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/hotel' element={<Hotel/>}/>
                <Route path='/tripideas' element={<TripIdeas/>}/>
                
            </Routes>
        </Router>
      
    </div>
  )
}

export default RouteMenu
