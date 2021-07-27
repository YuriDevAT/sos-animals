import React,  { useState } from 'react';

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
                <nav className="">
                    <button className="" onClick={toggle}>
                        <i className={`close ${isOpen ? 'open' : ''}`}></i>
                    </button>
                    <ul className={`menu-links ${isOpen ? 'show' : ''}`}>
                        {navigation.map((nav) => (
                            <li key={nav.text} className="">
                                <a href={nav.link} onClick={toggle} onBlur={hide} onFocus={show} className="">{nav.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={`menu-bg ${isOpen ? 'show-bg' : ''}`}></div>
                <div className="steps">
                    <div className="">1</div>
                    <div className="">2</div>
                    <div className="">3</div>
                    <div className="">4</div>
                </div>            
        </header>

    )
}

export default Header;


