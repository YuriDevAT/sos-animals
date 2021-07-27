import React from 'react';

const Footer = ({ prevStep, nextStep }) => {

    return (
        <footer className="footer">
            <div>
                <button onClick={prevStep}>Previous</button>
                <button onClick={nextStep}>Next</button>
            </div>
        </footer>

    )
}

export default Footer;