import { Link } from 'react-router-dom';
import './Navbar.css';
import {GiHamburgerMenu} from "react-icons/gi";
import {MdOutlineRestaurantMenu} from "react-icons/md";
import {useState} from "react";
import {navbarLogo} from "../constants/images.js";

export default function Navbar() {
    const[toggleMenu, setToggleMenu] = useState(false);

    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
            <img  src={navbarLogo} alt="navbarLogo"></img>
             </div>
            <div className="app__navbar-links">
            <ul>
                <li><Link to ="/">Home</Link></li>
                <li><Link to="/Menu">Menu</Link></li>
                <li><Link to="/Gallery">Gallery</Link></li>
                <li><Link to="/Chef">Chef</Link></li>
                <li><Link to= "/About">About </Link></li>
            </ul>
            </div>
            <div className="app__navbar-login">
                <Link to="/EventBooking">EventBooking</Link>
            </div>
            <div className="app__navbar-book">
            <Link to="/BookTable" >Book a Table</Link>
            </div>
             <div className="app__navbar-icon-wrapper">
                <GiHamburgerMenu className="app__navbar-icon" size={24} color="#cdb587"  onClick={() => setToggleMenu(true)} />
            {toggleMenu && (
                <div className="app__navbar-overlay">
                    <MdOutlineRestaurantMenu size={30} color="#cdb587" className="overlay-close" onClick={() => setToggleMenu(false)} />
                <ul className="app__smallscreen-links">
                <li><Link to ="/" onClick={()=>setToggleMenu(false)}>Home</Link></li>
                <li><Link to="/Menu" onClick={()=>setToggleMenu(false)} >Menu</Link></li>
                <li><Link to="/Gallery" onClick={()=>setToggleMenu(false)}>Gallery</Link></li>
                <li><Link to="/Contact" onClick={()=>setToggleMenu(false)}>Contact</Link></li>
                <li><Link to= "/About" onClick={()=>setToggleMenu(false)}>About </Link></li>
                </ul>
                </div>
        )}
             </div>
        </nav>
    )
}
