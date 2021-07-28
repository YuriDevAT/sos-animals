import React from 'react';
import axios from 'axios';
import mapboxgl from 'mapbox-gl';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';


const Position = ({ prevStep, nextStep, handleChange, values }) => {
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
            <h1>Where is the dog?</h1>
            <form>
            <label htmlFor="Where is help needed?">Where is help needed?</label>
                <input
                    placeholder="loaction, area, neighborhood,.."
                    type="text"
                    onChange={handleChange('Where seen')}
                    />
                    {/* Map Display here */}
                <div className="map-holder">
                    <div id="map"></div>
                </div>
                {/* Coordinates Display here */}
                <div className="dislpay-arena">
                    <div className="coordinates-header">
                    <h3>Current Coordinates</h3>
                    <p>Latitude:</p>
                    <p>Longitude:</p>
                    </div>
                    <div className="coordinates-header">
                    <h3>Current Location</h3>
                    <div className="form-group">
                        <input
                        type="text"
                        className="location-control"
                        value="location"
                        readonly
                        />
                    </div>
                    <button type="button" class="copy-btn">Copy</button>
                    </div>
                    <button type="button" class="location-btn">Get Location</button>
                    </div>
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