import React, { useState } from 'react';

const Header = () => {
    // const [navbar, setNavbar] = useState(true);

    // const NavbarHandler = (e) => {
    //     e.preventDefault();
    //     setNavbar(false);        
    // }


    return (
        <header className="header">
            <button className="home-button" onClick="">Start</button>
            <ul className="nav-list">
                <li>Start</li>
                <li>Other Links</li>
                <li>How to find help</li>
                <li>AGB</li>
                <li>Impressum</li>
            </ul>
        </header>

    )
}

export default Header;


