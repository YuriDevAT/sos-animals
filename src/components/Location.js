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
        <div className="form">
            <h1 className="">Where is the dog?</h1>
            <form className="">
            <label htmlFor="Where is help needed?">Where is help needed?</label>
                <input
                    placeholder="loaction, area, neighborhood,.."
                    className=""
                    type="text"
                    onChange={handleChange('Where seen')}
                    />
                <p><i>Implementing position, google maps</i></p>
                <label for="more-details">More details (e.g. exact adress, ..)</label>
                <textarea id="more-details" className="" onChange={handleChange('Where seen')}></textarea>
            </form>
            <footer className="">
                <button onClick={ Prev } className="">Previous</button>
                <button onClick={ Next } className="">Next</button>
            </footer>
        </div>
    )
}

export default Position;