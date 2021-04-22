import React, { useState, useEffect } from 'react';


const Position = () => {
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
        <input placeholder="Where is help needed?"></input>
        <p><i>Implementing position, google maps</i></p>
        <p>More details (e.g. exact adress, ..)</p>
        <textarea></textarea>
        </div>
    )
}

export default Position;