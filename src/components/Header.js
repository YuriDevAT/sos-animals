import React,  { useState } from 'react';
import { UserButton } from '@clerk/clerk-react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hide = () => setIsOpen(false);
    const show = () => setIsOpen(true);

    const navigation = [
        { link: '/', text: 'Start' },
        { link: '#', text: 'About' },
        { link: '#', text: 'NGO\'s' }
        ];

    return (
        <header className="header">
                <nav>
                    <button
                    onClick={toggle}
                    id="menu-btn">
                        <i className="fa fa-bars"></i>
                    </button>
                    <ul className={`menu-links ${isOpen ? 'show' : ''}`}>
                        <li className="user">
                            <UserButton />
                        </li>
                        {navigation.map((nav) => (
                            <li key={nav.text}>
                                <a href={nav.link} onBlur={hide} onClick={toggle} onFocus={show}>{nav.text}</a>
                            </li>
                        ))}
                    </ul>
                     <h2>SOS Animals</h2>
                </nav>
                <div className={`menu-bg ${isOpen ? 'show' : ''}`}></div>   
        </header>
    )
}

export default Header;


