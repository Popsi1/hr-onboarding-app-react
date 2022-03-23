import React from 'react';
import "./Navbar.css"
import SideBarToggle from '../SideBar/SideBarToggle';
import { Link } from "react-router-dom";

const Navbar = ({onClick}) => (
    <header className='header'>
        <nav className='nav'>
            <div className='toggle'>
                <SideBarToggle onClick={onClick}/>
            </div>
            <div className='nav-logo'>
                <a href='http://136.244.65.254/'><img src="https://res.cloudinary.com/dmig48csz/image/upload/v1641848026/image_2_a1god5.png" alt="logo"/></a>
            </div>
            <div className='spacer' />
            <div className='nav-links'>
                <ul>
                    <li><a href="#!">Careers</a></li>
                    <li><a href="#!">About Us</a></li>
                    <li><a href="#!">Products</a></li>
                    <Link to="/login">
                    <li><a>Sign In</a></li>
                    </Link>

                </ul>
            </div>
        </nav>
        
    </header>
);


export default Navbar
