import React, { useState, useEffect } from 'react';


const Position = ({ prevStep, nextStep, handleChange, values }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    const Prev = e => {
        e.preventDefault();
        prevStep();
    }

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    }, [lat, long]);

    const handleResponse = (response) => {
        if (response.ok) {
            return response.json();
        } else {
            throw new Error("Please enable your location!");
        }
    }

    return (
        <div className="pt-20 px-8">
        <h1 className="my-6 bold text-4xl text-center">Where is the dog?</h1>
        <form className="flex flex-col">
        <label htmlFor="Where is help needed?">Where is help needed?</label>
            <input
                placeholder="loaction, area, neighborhood,.."
                className="container rounded border py-2 pl-2"
                type="text"
                value={values.position}
                onChange={handleChange('Where seen')}
                />
            <p><i>Implementing position, google maps</i></p>
            <p>More details (e.g. exact adress, ..)</p>
            <textarea className="w-full h-56" onChange={handleChange('Where seen')}></textarea>
        </form>
        <footer className="container flex justify-around">
        <button onClick={ Prev } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Previous</button>
        <button onClick={ Next } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Next</button>
        </footer>
        </div>
    )
}

export default Position;