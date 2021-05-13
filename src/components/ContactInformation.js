import React from 'react';

const ContactInformation = () => {

    return (
        <div className="container pt-20 flex flex-col items-center">
            <h1 className="mt-6 bold text-4xl">Contact information</h1>
            <p className="mb-6">optional</p>
            <form className="px-8 text-lg">
            <label htmlFor="Name of reporter">Name of reporter</label>
                <input
                placeholder="Max Mustermann"
                className="container rounded border py-2 pl-2"
                type="text"
                >
                </input>
                <label htmlFor="Phone number">Phone number</label>
                <input
                placeholder="+496674453634"
                className="container rounded border py-2 pl-2"
                type=""
                >
                </input>
                <label htmlFor="Email adress">Email adress</label>
                <input
                placeholder="maxmustermann@gmail.com"
                className="container rounded border py-2 pl-2"
                type="email"
                >
                </input>
            </form>
    </div>
    )
}

export default ContactInformation;