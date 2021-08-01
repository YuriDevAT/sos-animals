import React, { useRef, useEffect, useState } from 'react';
// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from '!mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

mapboxgl.accessToken = "pk.eyJ1IjoiaG9ycm9yIiwiYSI6ImNrcm1qNnRpbjFhczkycGxpZzYzMDA2bTYifQ.KQ3G_5evHkaDQ8qJT_OjhA";

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
            <p className="steps">Step 3 of 3</p>
            <form>
                <div className="map-sidebar">
                    Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
                </div>
                <div className="map-container" ref={mapContainer}>
                </div>
                <input
                    placeholder=" loaction, area, neighborhood,.."
                    type="text"
                    aria-label="location"
                    value={values.position}
                    onChange={handleChange('position')}
                />
            </form>
            <footer>
                <button onClick={Prev} className="btn nav-btn prev">Previous</button>
                <button onClick={Next} className="btn nav-btn submit" type="submit">Report</button>
            </footer>
        </div>
    )
}

export default Position;