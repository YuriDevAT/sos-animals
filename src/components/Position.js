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
        <div className="position">
        <h1>Where is the dog?</h1>
        <form>
        <input placeholder="Where is help needed?" />
            <p><i>Implementing position, google maps</i></p>
            <p>More details (e.g. exact adress, ..)</p>
            <textarea></textarea>
            <button onClick={ Prev } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Previous</button>
            <button onClick={ Next } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Next</button>
        </form>
        </div>
    )
}

export default Position;