import React from 'react';

const Home = ({ nextStep }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }
    return (
        <div className="container flex flex-col items-center h-screen">
            <h1 className="my-6 bold text-5xl">SOS Animals</h1>
            <p className="p-8 text-justify text-lg">If you see an abandon animal on the street, please report
                by filling out the form in this app.
                The animal welfare organisation will be notificated and
                help the animal as soon as possible.
            </p>
            <button
            className="bg-blue-700 w-36 h-24 rounded-md shadow-md text-white"
            onClick={ Next }>Report an animal</button>
        </div>
    )
}

export default Home;