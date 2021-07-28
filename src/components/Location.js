import React, { useRef, useEffect, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = process.env.REACT_APP_MAP_ACCESS_TOKEN;

const Position = ({ prevStep, nextStep, handleChange, values }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    const Prev = e => {
        e.preventDefault();
        prevStep();
    }

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(26.1);
    const [lat, setLat] = useState(44.4);
    const [zoom, setZoom] = useState(9);

    useEffect(() => {
        if (map.current) return;
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    });

    useEffect(() => {
        if(!map.current) return;
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    });

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
                <div className="map-container">
                    <div className="map-sidebar">
                        Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                    </div>
                    <div className="map" ref={mapContainer}>
                    </div>
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