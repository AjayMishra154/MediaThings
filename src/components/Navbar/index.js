import './index.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false)
    const toggleDropdown = () => setDropdownVisible(!dropdownVisible)
    return (
        <nav className='navbar'>
            <Link to="/" className='logoLink'>
                <img src="/logo1.png" alt="MediaThingsLogo" className="logo" />
            </Link>
            <ul className={`linksList ${dropdownVisible ? 'show' : ''}`}>
                <li>
                    <Link to="/" className='links'>Home</Link>
                </li>
                <li>
                    <Link to="/about" className='links'>About</Link>
                </li>
                <li>
                    <Link to="/services" className='links'>Services</Link>
                </li>
                <li>
                    <Link to="/contactUs" className='links'>Contact Us</Link>
                </li>
            </ul>
            <button type='button' className='button1' onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-menu-up" viewBox="0 0 16 16">
                    <path d="M7.646 15.854a.5.5 0 0 0 .708 0L10.207 14H14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h3.793zM1 9V6h14v3zm14 1v2a1 1 0 0 1-1 1h-3.793a1 1 0 0 0-.707.293l-1.5 1.5-1.5-1.5A1 1 0 0 0 5.793 13H2a1 1 0 0 1-1-1v-2zm0-5H1V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zM2 11.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 0-1h-8a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h11a.5.5 0 0 0 0-1h-11a.5.5 0 0 0-.5.5m0-4a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 0-1h-6a.5.5 0 0 0-.5.5"/>
                </svg>
            </button>
        </nav>
    )
}

export default Navbar
