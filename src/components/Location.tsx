// eslint-disable-next-line import/no-webpack-loader-syntax
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';

const Position = ({ prevStep, nextStep, handleChange, values }: any) => {
  const Next = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    nextStep();
  };

  const Prev = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    prevStep();
  };

  const mapContainer = React.useRef(null);
  const map = React.useRef(null);
  const [lng, setLng] = React.useState(26.1);
  const [lat, setLat] = React.useState(44.4);
  const [zoom, setZoom] = React.useState(9);

  React.useEffect(() => {
    if (map.current) return;
  });

  React.useEffect(() => {
    if (!map.current) return;
  });

  return (
    <div className='form'>
      <h1>Where is the dog?</h1>
      <p className='steps'>Step 3 of 3</p>
      <form>
        <div className='map-sidebar'>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div className='map-container' ref={mapContainer}></div>
        <input
          placeholder=' loaction, area, neighborhood,..'
          type='text'
          aria-label='location'
          value={values.position}
          onChange={handleChange('position')}
        />
      </form>
      <footer>
        <button onClick={Prev} className='btn nav-btn prev'>
          Previous
        </button>
        <button onClick={Next} className='btn nav-btn submit' type='submit'>
          Report
        </button>
      </footer>
    </div>
  );
};

export default Position;
