import React from 'react';

const ContactInformation = ({ prevStep, nextStep, handleChange, values }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    const Prev = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div className="contact">
            <h1 className="">Contact information</h1>
            <p className="">optional*</p>
            <form className="">
                <label htmlFor="Name of reporter">Name of reporter</label>
                    <input
                    placeholder="Max Mustermann"
                    className=""
                    type="text"
                    value={values.name}
                    onChange={handleChange('Name')}
                    >
                    </input>
                    <label htmlFor="Phone number">Phone number</label>
                    <input
                    placeholder="+496674453634"
                    className=""
                    type="text"
                    value={values.number}
                    onChange={handleChange('Number')}
                    >
                    </input>
                    <label htmlFor="Email adress">Email adress</label>
                    <input
                    placeholder="maxmustermann@gmail.com"
                    className=""
                    type="email"
                    value={values.email}
                    onChange={handleChange('Email')}
                    >
                    </input>
                    <p className="">*If you want to get informed about the dog, leave your contact information!</p>
            </form>
            <footer className="">
            <button onClick={ Prev } className="">Previous</button>
            <button onClick={ Next } className="">Report</button>
            </footer>
    </div>
    )
}

export default ContactInformation;