import React from 'react';

function Position({ prevStep, nextStep, handleChange, values }: any) {
  const Next = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    nextStep();
  };

  const Prev = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    prevStep();
  };

  const mapContainer = React.useRef(null);
  const [lng] = React.useState(26.1);
  const [lat] = React.useState(44.4);
  const [zoom] = React.useState(9);

  return (
    <div className='form'>
      <h1>Where is the dog?</h1>
      <p className='steps'>Step 3 of 3</p>
      <form>
        <div className='map-sidebar'>
          Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}
        </div>
        <div className='map-container' ref={mapContainer}>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d64667.87727006931!2d26.012817441117452!3d44.43505026466841!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1f93abf3cad4f%3A0xac0632e37c9ca628!2sBukarest%2C%20Rum%C3%A4nien!5e0!3m2!1sde!2sat!4v1649609187524!5m2!1sde!2sat'
            width='600'
            height='450'
            title='Bukarest City '
            style={{ border: 0 }}
            allowFullScreen
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          />
        </div>
        <input
          placeholder=' loaction, area, neighborhood,..'
          type='text'
          aria-label='location'
          value={values.position}
          onChange={handleChange('position')}
        />
      </form>
      <footer>
        <button onClick={Prev} className='btn nav-btn prev' type='button'>
          Previous
        </button>
        <button onClick={Next} className='btn nav-btn submit' type='submit'>
          Report
        </button>
      </footer>
    </div>
  );
}

export default Position;
