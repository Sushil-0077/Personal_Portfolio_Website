import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaUserAlt, FaEnvelope, FaGraduationCap, FaFileAlt, FaBars, FaTimes } from "react-icons/fa";
import './style.css';

const data = [
    { label: 'HOME', to: '/', icon: <FaHome /> },
    { label: 'ABOUT ME', to: '/about', icon: <FaUserAlt /> },
    { label: 'CONTACT', to: '/contact', icon: <FaEnvelope /> },
    { label: 'EDUCATION', to: '/education', icon: <FaGraduationCap /> },
    { label: 'RESUME', to: '/resume', icon: <FaFileAlt /> }
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="navbar_main_container">
            <div className="navbar_main_container_holder">
                <div className="distination">Junior Web Developer</div>
                <button className="menu_button" onClick={toggleMenu}>
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </button>
                <div className={`navbar_list_container ${menuOpen ? 'open' : ''}`}>
                    <ul className="navbar_menu">
                        {data.map((item, key) => (
                            <li key={key} className="navbar_list" onClick={toggleMenu}>
                                <Link className="navbar_list_link" to={item.to}>
                                    {item.icon}
                                    <span className="navbar_list_label">{item.label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
