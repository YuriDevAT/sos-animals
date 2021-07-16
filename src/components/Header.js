import React,  { useState } from 'react';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const hide = () => setIsOpen(false);
    const show = () => setIsOpen(true);

    const navigation = [
    { link: '#', text: 'Start' },
    { link: '#', text: 'About' },
    { link: '#', text: 'NGO\'s' }
    ];

    return (
        <header className="bg-blue-600 container h-20 shadow-md fixed left-0 mx-auto max-w-sm">
            <div className="h-full relative">
                <nav className="relative">
                    <button className="w-20 h-20 bg-yellow-300 float-left menu-toggle" onClick={toggle}>
                        <span className={`menu ${isOpen ? 'cross' : 'hamburger'}`}></span>
                    </button>
                    <ul className={`menu-links ${isOpen ? 'show' : ''} mt-20 bg-yellow-300 w-1/2 shadow-lg z-20`}>
                        {navigation.map((nav) => (
                            <li key={nav.text} className="py-3 border bg-yellow-300 pl-2">
                                <a href={nav.link} onClick={toggle} onBlur={hide} onFocus={show} className="">{nav.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={`menu-links ${isOpen ? 'show' : ''} mt-20 bg-black opacity-60 h-screen w-full z-10`}></div>
                <div className="flex h-full justify-around text-center items-center">
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >1</div>
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >2</div>
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >3</div>
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >4</div>
                </div>
            </div>
            
        </header>

    )
}

export default Header;


