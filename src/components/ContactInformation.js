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
        <div className="container pt-20 px-8">
            <h1 className="mt-6 bold text-4xl text-center">Contact information</h1>
            <p className="mb-6 text-xs text-center">optional*</p>
            <form className="text-lg">
                <label htmlFor="Name of reporter">Name of reporter</label>
                    <input
                    placeholder="Max Mustermann"
                    className="container rounded border py-2 pl-2"
                    type="text"
                    value={values.name}
                    onChange={handleChange('Name')}
                    >
                    </input>
                    <label htmlFor="Phone number">Phone number</label>
                    <input
                    placeholder="+496674453634"
                    className="container rounded border py-2 pl-2"
                    type="text"
                    value={values.number}
                    onChange={handleChange('Number')}
                    >
                    </input>
                    <label htmlFor="Email adress">Email adress</label>
                    <input
                    placeholder="maxmustermann@gmail.com"
                    className="container rounded border py-2 pl-2"
                    type="email"
                    value={values.email}
                    onChange={handleChange('Email')}
                    >
                    </input>
                    <p className="text-xs text-justify">*If you want to get informed about the dog, leave your contact information!</p>
            </form>
            <button onClick={ Prev } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Previous</button>
            <button onClick={ Next } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Report</button>
    </div>
    )
}

export default ContactInformation;