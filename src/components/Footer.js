import React from 'react';

const Footer = ({ prevStep, nextStep }) => {

    return (
        <footer className="footer">
            <nav className="">
                <button className="" onClick={prevStep}>Previous</button>
                <button className="" onClick={nextStep}>Next</button>
            </nav>
        </footer>

    )
}

export default Footer;