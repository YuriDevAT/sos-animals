// eslint-disable-next-line import/no-webpack-loader-syntax
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import React from 'react';

mapboxgl.accessToken =
  'pk.eyJ1IjoiaG9ycm9yIiwiYSI6ImNrcm1qNnRpbjFhczkycGxpZzYzMDA2bTYifQ.KQ3G_5evHkaDQ8qJT_OjhA';

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
    /*  map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat],
      zoom: zoom,
    }); */
  });

  React.useEffect(() => {
    if (!map.current) return;
    /*  map.current.on('move', () => {
      setLng(map.current.getCenter().lng.toFixed(4));
      setLat(map.current.getCenter().lat.toFixed(4));
      setZoom(map.current.getZoom().toFixed(2));
    }); */
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
