import './index.css'
import { Link } from 'react-router-dom'

const Navbar = () => (
    <nav className='navbar'>
        <Link to="/" className='appLogo'>
            <img src="/logo1.png" alt="MediaThingsLogo" className='logoImage' />
        </Link>
        <ul className='linksList'>
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
    </nav>
)

export default Navbar