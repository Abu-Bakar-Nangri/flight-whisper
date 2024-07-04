import React, { useState, useEffect } from 'react';
import CSS from './Header.module.css';
import { Link ,useLocation} from 'react-router-dom'
import LoginRegister from '../../pages/LoginRegister/LoginRegister';

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

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div>
            <div className={`${CSS['links-container']} container`}>
                <div>
                    <Link className={CSS["link-visit"]}><span>Visit Us</span></Link>
                    <Link className={CSS["link-buy-tickets"]}><span>Buy Tickets</span></Link>
                </div>
                <div >
                    <Link className={CSS['social-links']}>
                        <i className="fa-brands fa-linkedin-in"></i>
                    </Link>
                    <Link className={CSS['social-links']}>
                        <i class="fa-brands fa-github"></i>
                    </Link>
                    <Link className={CSS['social-links']}>
                        <i class="fa-brands fa-instagram"></i>
                    </Link>

                </div>
            </div>

            <header className={isScrolled ? `${CSS["headerFixed"]}` : `${CSS['header']}`}>
                <div className={isScrolled ? `${CSS["navBarFixed"]}` : `${CSS['navBar']}`}>
                    <div className={CSS.logos}>
                        <Link className={CSS.logo} to={'/'}>
                            <a href="index.html" className={CSS["logo"]}>FlightWhisper</a>
                        </Link>
                    </div>
                    <ul className={CSS.links}>
                        <li className={CSS.items}>
                            <Link className={activelink.pathname === '/' ? `${CSS['active']} ${CSS['navItem']}`: `${CSS['navItem']}`}  to={'/'}>Home</Link>
                        </li>
                        <li className={CSS.items}>
                            <Link className={CSS.navItem} to={'/hotel'}>Hotels</Link>
                        </li>
                        <li className={CSS.items}>
                            <Link className={CSS.navItem} to={'/tripideas'}>Trip Ideas</Link>
                        </li>
                        <li className={CSS.items}>
                            <Link className={CSS.navItem} to={'/blog'}>Blog</Link>
                        </li>
                        <li className={CSS.items}>
                            <Link className={CSS.navItem} to={'/contact'}>Contact</Link>
                        </li>
                        <li className={CSS.items}>
                            <Link className={CSS.navItem} to={'/about'}>About</Link>
                        </li>
                    </ul>
                    <div className={CSS.dropdown}>
                        <button className={CSS.action_btn}>
                            <i className="fa-solid fa-user"></i>
                        </button>
                        <div className={CSS['dropdown-content']}>
                            <a href="#">Profile</a>
                            <a href="#">Settings</a>
                            <a href="#" onClick={toggleLoginPopup} >Login</a>
                        </div>
                    </div>
                    <div className={CSS.toggle_btn} onClick={toggleMenu}>
                        <i className={isOpen ? 'fa-solid fa-times' : 'fa-solid fa-bars'}></i>
                    </div>
                </div>


                <div className={`${CSS.dropdown_menu} ${isOpen ? CSS.open : ''}`}>
                    <li className={CSS.items}>
                        <Link className={`${CSS.navItem} ${CSS.active}`} to={'/'}>Home</Link>
                    </li>
                    <li className={CSS.items}>
                        <Link className={CSS.navItem} to={'/hotel'}>Hotels</Link>
                    </li>
                    <li className={CSS.items}>
                        <Link className={CSS.navItem} to={'/tripideas'}>Trip Ideas</Link>
                    </li>
                    <li className={CSS.items}>
                        <Link className={CSS.navItem} to={'/blog'}>Blog</Link>
                    </li>
                    <li className={CSS.items}>
                        <Link className={CSS.navItem} to={'/contact'}>Contact</Link>
                    </li>
                    <li className={CSS.items}>
                        <Link className={CSS.navItem} to={'/about'}>About</Link>
                    </li>
                    <li onClick={toggleLoginPopup} className={CSS.items}><Link className={CSS.action_btn} >Login</Link></li>
                </div>

                {showLoginPopup && (
                    <div className={CSS.login_popup}>
                        <LoginRegister />
                        <div className={CSS.close_popup} onClick={toggleLoginPopup}>
                            <span className={CSS.close_popup_btn}>&times;</span>
                        </div>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;
