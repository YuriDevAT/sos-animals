const logo = require('../assets/home.png');

function Home({ nextStep }: any) {
  const Next = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <div className='home'>
      <img src={logo} alt='' width='320' height='auto' />
      <p id='home-p'>
        If you see an abandoned dog on the street, please help by filling out
        the form in this app. An animal welfare organisation nearby will be
        notified and help the animal as soon as possible.
      </p>
      <button onClick={Next} className='btn home-btn' type='submit'>
        Report animal
      </button>
    </div>
  );
}

export default Home;
