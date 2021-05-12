import React from 'react';

const Footer = () => {

    return (
        <footer>
            <nav className="h-20 fixed bottom-0 w-full flex justify-around items-center">
                <button className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Previous</button>
                <button className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Next</button>
            </nav>
        </footer>

    )
}

export default Footer;