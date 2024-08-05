import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import logo from '../../Images/logo.png';

export default function Footer() {
    return (
        <footer className=" py-6 bg-footer-back text-white">
            <div className=" container mx-auto px-6 ">
                {/* Contact Information */}
                <div className="pt-5 pb-5  ">
                    <div className="flex flex-wrap justify-between">
                        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex items-start space-x-4">
                            <i className="fa-solid fa-location-dot text-xl"></i>
                            <div>
                                <h4 className="text-lg font-semibold">Find us</h4>
                                <span>Johar Town, Lahore, Pakistan</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex items-start space-x-4">
                            <i className="fas fa-phone text-xl"></i>
                            <div>
                                <h4 className="text-lg font-semibold">Call us</h4>
                                <span>+923245521001</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/3 mb-8 md:mb-0 flex items-start space-x-4">
                            <i className="far fa-envelope-open text-xl"></i>
                            <div>
                                <h4 className="text-lg font-semibold">Mail us</h4>
                                <span>abubakarnangri@gmail.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="pt-5 pb-5">
                    <div className="flex flex-wrap justify-between">
                        {/* Footer Widget: Logo and Social Icons */}
                        <div className="w-full md:w-1/3 mb-8">
                            <div>
                                <div className="mb-4">
                                    <Link to="/"><img src={logo} className="w-32" alt="logo" /></Link>
                                </div>
                                <div className="mb-4">
                                    <p>Welcome to FlightWhisper</p>
                                </div>
                                <div className="flex space-x-4">
                                    <span>Follow us</span>
                                    <Link to="" target="_blank"><i className="fab fa-facebook-f text-blue-600"></i></Link>
                                    <Link to="" target="_blank"><i className="fab fa-instagram text-pink-600"></i></Link>
                                    <Link to="" target="_blank"><i className="fab fa-youtube text-red-600"></i></Link>
                                </div>
                            </div>
                        </div>

                        {/* Footer Widget: Useful Links */}
                        <div className="w-full md:w-1/3 mb-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                                <ul className="space-y-2">
                                    <li><Link to="/" className="text-blue-400 hover:underline">Home</Link></li>
                                    <li><Link to="/hotel" className="text-blue-400 hover:underline">Hotels</Link></li>
                                    <li><Link to="/tripideas" className="text-blue-400 hover:underline">Trip Ideas</Link></li>
                                    <li><Link to="/blog" className="text-blue-400 hover:underline">Blog</Link></li>
                                    <li><Link to="/contact" className="text-blue-400 hover:underline">Contact Us</Link></li>
                                    <li><Link to="/about" className="text-blue-400 hover:underline">About Us</Link></li>
                                </ul>
                            </div>
                        </div>

                        {/* Footer Widget: Subscribe */}
                        <div className="w-full md:w-1/3 mb-8">
                            <div>
                                <h3 className="text-lg font-semibold mb-4">Subscribe</h3>
                                <p className="mb-4">Don’t miss to subscribe to our new feeds, kindly fill the form below.</p>
                                <form className="flex">
                                    <input type="text" placeholder="Email Address" className=" px-4 w-30 ring-1 ring-slate-200  border-gray-300 flex-grow" />
                                    <button className="bg-blue-500 text-white p-2 "><i className="fab fa-telegram-plane"></i></button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-gray-700 py-4">
                <div className="container mx-auto text-center">
                    <p className="text-sm">
                        Copyright &copy; 2024, All Right Reserved By <Link to="https://linktr.ee/abubakarnangri" className="text-blue-400 hover:underline">Abu Bakar Siddique</Link>
                    </p>
                </div>
            </div>
        </footer>
    )
}
