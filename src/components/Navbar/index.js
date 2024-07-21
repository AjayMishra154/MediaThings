import './index.css';
import { useState } from 'react';

const Navbar = () => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const toggleDropdown = () => setDropdownVisible(!dropdownVisible);
    
    return (
        <nav className='navbar'>
            <a href="#home" className='logoLink'>
                <img src="/logo1.png" alt="MediaThingsLogo" className="logo" />
            </a>
            <ul className={`linksList ${dropdownVisible ? 'show' : ''}`}>
                <li>
                    <a href="#home" className='links' onClick={() => setDropdownVisible(false)}>Home</a>
                </li>
                
                <li>
                    <a href="#services" className='links' onClick={() => setDropdownVisible(false)}>Services</a>
                </li>
                <li>
                    <a href="#about" className='links' onClick={() => setDropdownVisible(false)}>About</a>
                </li>
                <li>
                    <a href="#hiring" className='links' onClick={() => setDropdownVisible(false)}>Career</a>
                </li>
                <li>
                    <a href="#contactUs" className='links' onClick={() => setDropdownVisible(false)}>Contact Us</a>
                </li>
            </ul>
            <button type='button' className='button1' onClick={toggleDropdown}>
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                    <path d="M3 12.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </button>
        </nav>
    );
};

export default Navbar;
