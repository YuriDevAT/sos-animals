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
        <header className="container bg-blue-600 h-20 shadow-md relative">
                <nav className="relative">
                    <button className="w-20 h-20 bg-yellow-300 float-left menu-toggle" onClick={toggle}>
                        <div className={`bar1 ${isOpen ? 'change' : ''} w-12 h-1 bg-black my-2 mx-auto`}></div>
                        <div className={`bar2 ${isOpen ? 'change' : ''} w-12 h-1 bg-black my-2 mx-auto`}></div>
                        <div className={`bar3 ${isOpen ? 'change' : ''} w-12 h-1 bg-black my-2 mx-auto`}></div>
                    </button>
                    <ul className={`menu-links ${isOpen ? 'show' : ''} mt-20 bg-yellow-300 w-1/2 shadow-lg z-20`}>
                        {navigation.map((nav) => (
                            <li key={nav.text} className="py-3 border bg-yellow-300 pl-2">
                                <a href={nav.link} onClick={toggle} onBlur={hide} onFocus={show} className="">{nav.text}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className={`menu-bg ${isOpen ? 'show-bg' : ''} mt-20 bg-black opacity-60 w-full h-716 z-1`}></div>
                <div className="flex h-full justify-around text-center items-center">
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >1</div>
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >2</div>
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >3</div>
                    <div className="w-14 h-14 bg-yellow-300 rounded-full" >4</div>
                </div>            
        </header>

    )
}

export default Header;


