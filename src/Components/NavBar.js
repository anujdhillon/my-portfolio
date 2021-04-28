import React from 'react';
import avatar from '../img/avatar.jpeg';
import { Link, animateScroll as scroll } from "react-scroll";
function Navbar(){
    return(
        <div className="NavBar">
            <nav className="nav">
                <div className="profile">
                    <img src={avatar} alt="Anuj"/>
                </div>
                <ul className="nav-items">
                    <li className="nav-item">
                        <Link
                            activeClass="active"
                            to="about"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                    <Link
                            activeClass="active"
                            to="portfolio"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Portfolio
                        </Link>
                    </li>    
                    <li className="nav-item">
                    <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={500}>
                            Contact
                        </Link>
                    </li>       
                </ul>
                <footer className="footer">
                <p>
                    @2021 Anuj Dhillon
                </p>
                </footer>
            </nav>
        </div>
    )
}
export default Navbar;