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
            <h1>Where is the dog?</h1>
            <form>
            <label htmlFor="Where is help needed?">Where is help needed?</label>
                <input
                    placeholder="loaction, area, neighborhood,.."
                    type="text"
                    value=""
                    onChange={handleChange('Where seen')}
                    />
                <p><i>Implementing position, google maps</i></p>
                <label for="more-details">More details (e.g. exact adress, ..)</label>
                <textarea id="more-details" onChange={handleChange('Where seen')}></textarea>
            </form>
            <footer>
                <button onClick={ Prev }>Previous</button>
                <button onClick={ Next }>Next</button>
            </footer>
        </div>
    )
}

export default Position;