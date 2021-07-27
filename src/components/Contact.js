import React from 'react';

const Contact = ({ prevStep, nextStep, handleChange, values }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    const Prev = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div className="form">
            <h1>Contact information</h1>
            <h6>optional*</h6>
            <form className="contact">
                <label htmlFor="Name of reporter">Name of reporter</label>
                    <input
                    placeholder="Max Mustermann"
                    type="text"
                    value=""
                    onChange={handleChange('Name')}
                    >
                    </input>
                    <label htmlFor="Phone number">Phone number</label>
                    <input
                    placeholder="+496674453634"
                    type="text"
                    value=""
                    onChange={handleChange('Number')}
                    >
                    </input>
                    <label htmlFor="Email adress">Email adress</label>
                    <input
                    placeholder="maxmustermann@gmail.com"
                    type="text"
                    value=""
                    onChange={handleChange('Email')}
                    >
                    </input>
                    <h6>*If you want to get informed about the dog, leave your contact information!</h6>
            </form>
            <footer>
            <button onClick={ Prev }>Previous</button>
            <button onClick={ Next }>Report</button>
            </footer>
    </div>
    )
}

export default Contact;