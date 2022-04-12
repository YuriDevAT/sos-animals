function ExtraInformation({ prevStep, nextStep, handleChange, values }: any) {
  const Next = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    nextStep();
  };

  const Prev = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <div className='form'>
      <h1>Extra information</h1>
      <p className='steps'>Step 2 of 3</p>
      <form>
        <label htmlFor='type'>
          What type of dog is it?
          <input
            type='text'
            id='type'
            name='type'
            placeholder=' young, old, Laprador, Husky,..'
            value={values.typeOfDog}
            onChange={handleChange('typeOfDog')}
          />
        </label>
        <fieldset className='dog-size'>
          <legend>How big is the dog?</legend>
          <div className='checkbox-container'>
            <label htmlFor='small' className='checkbox'>
              <input
                type='checkbox'
                id='small'
                name='size'
                value={values.small}
              />
              Small
            </label>
            <label htmlFor='middle' className='checkbox'>
              <input
                type='checkbox'
                id='middle'
                name='size'
                value={values.middle}
              />
              Middle
            </label>
            <label htmlFor='big' className='checkbox'>
              <input
                type='checkbox'
                id='big'
                name='size'
                value={values.large}
              />
              Big
            </label>
          </div>
        </fieldset>
        <label htmlFor='time'>
          When did you see the dog?
          <input
            placeholder=' morning, noon, 4pm,..'
            type='text'
            id='time'
            name='time'
            value={values.when}
            onChange={handleChange('when')}
          />
        </label>
      </form>
      <footer>
        <button onClick={Prev} className='btn nav-btn prev' type='button'>
          Previous
        </button>
        <button onClick={Next} className='btn nav-btn next' type='button'>
          Next
        </button>
      </footer>
    </div>
  );
}

export default ExtraInformation;
