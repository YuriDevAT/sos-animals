import React from 'react';

const Condition = ({ prevStep, nextStep, handleChange, values }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    const Prev = e => {
        e.preventDefault();
        prevStep();
    }

    return (
        <div className="container pt-20 flex flex-col items-center h-screen pt-20">
            <h1 className="my-6 bold text-4xl">Condition of the animal</h1>
            <div className="flex flex-wrap justify-around p-8">
                <button className="bg-blue-400 w-24 h-24 rounded shadow-sm my-2">Good</button>
                <button className="bg-blue-400 w-24 h-24 rounded shadow-sm my-2">Anxious</button>
                <button className="bg-blue-400 w-24 h-24 rounded shadow-sm my-2">Agressive</button>
                <button className="bg-blue-400 w-24 h-24 rounded shadow-sm my-2">Wounded</button>
                <button className="bg-blue-400 w-24 h-24 rounded shadow-sm my-2">I can't tell</button>
            </div>
            <button onClick={ Prev } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Previous</button>
            <button onClick={ Next } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Next</button>
        </div>
    )
}

export default Condition;