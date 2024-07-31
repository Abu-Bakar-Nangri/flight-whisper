import React, { useState, useEffect } from "react";
import CSS from "./Header.module.css";
import { Link, useLocation } from "react-router-dom";
import logo from '../../Images/logo.png'

const Header = () => {
  const activelink = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleLoginPopup = () => {
    setShowLoginPopup(!showLoginPopup);
  };

  useEffect(() => {
    function handleScroll() {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div className={`${CSS["links-container"]} container mx-auto`}>
        <div>
          <Link className={CSS["link-visit"]}>
            <span>Visit Us</span>
          </Link>
          <Link className={CSS["link-buy-tickets"]}>
            <span>Buy Tickets</span>
          </Link>
        </div>
        <div>
          <Link className={CSS["social-links"]}>
            <i className="fa-brands fa-linkedin-in"></i>
          </Link>
          <Link className={CSS["social-links"]}>
            <i className="fa-brands fa-github"></i>
          </Link>
          <Link className={CSS["social-links"]}>
            <i className="fa-brands fa-instagram"></i>
          </Link>
        </div>
      </div>

      <header
        className={isScrolled ? `${CSS["headerFixed"]}` : `${CSS["header"]}`}
      >
        <div
          className={isScrolled ? `${CSS["navBarFixed"]}` : `${CSS["navBar"]}`}
        >
          <div className={CSS.logos}>
            <Link className={CSS.logo} to={"/"}>
              <img src={logo} className={CSS.logo}  alt="logo" />
            </Link>
          </div>
          <div className={CSS.toggle_btn} onClick={toggleMenu}>
            <i className={isOpen ? "fa-solid fa-times" : "fa-solid fa-bars"}></i>
          </div>
          
        </div>
        {isOpen&& 
        <div className={`${CSS.dropdown_menu} ${isOpen ? CSS.open : ""}`}>
          <ul className={CSS.links}>
            <li className={CSS.items}>
              <Link className={CSS.navItem} to={"/"}>
                Home
              </Link>
            </li>
            <li className={CSS.items}>
              <Link className={CSS.navItem} to={"/hotel"}>
                Hotels
              </Link>
            </li>
            <li className={CSS.items}>
              <Link className={CSS.navItem} to={"/tripideas"}>
                Trip Ideas
              </Link>
            </li>
            <li className={CSS.items}>
              <Link className={CSS.navItem} to={"/blog"}>
                Blog
              </Link>
            </li>
            <li className={CSS.items}>
              <Link className={CSS.navItem} to={"/contact"}>
                Contact
              </Link>
            </li>
            <li className={CSS.items}>
              <Link className={CSS.navItem} to={"/about"}>
                About
              </Link>
            </li>
            <li onClick={toggleLoginPopup} className={CSS.items}>
              <Link to={'/'} className={CSS.navItem}>Profile</Link>
            </li>
            <li onClick={toggleLoginPopup} className={CSS.items}>
              <Link to={'/'} className={CSS.navItem}>Setting</Link>
            </li>
            <li onClick={toggleLoginPopup} className={CSS.items}>
              <Link to={'/login'} className={CSS.navItem}>Login</Link>
            </li>
          </ul>
        </div>}
      </header>
    </div>
  );
};

export default Header;
