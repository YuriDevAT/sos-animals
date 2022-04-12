function Condition({ prevStep, nextStep, values }: any) {
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
      <h1>Who needs help?</h1>
      <p className='steps'>Step 1 of 3</p>
      <form>
        <fieldset>
          <legend>How many dogs need help?</legend>
          <div className='radio-btn'>
            <label htmlFor='one'>
              <input
                type='radio'
                id='one'
                name='number_of_dogs'
                value={values.one}
              />
              1
            </label>
            <label htmlFor='two'>
              <input
                type='radio'
                id='two'
                name='number_of_dogs'
                value={values.two}
              />
              2
            </label>
            <label htmlFor='more'>
              <input
                type='radio'
                id='more'
                name='number_of_dogs'
                value={values.many}
              />
              more
            </label>
          </div>
        </fieldset>
        <fieldset className='checkbox-container large'>
          <legend>Condition of the dog?</legend>
          <label htmlFor='good'>
            <input
              type='checkbox'
              id='good'
              name='condition_of_dog'
              value={values.good}
            />
            Good
          </label>
          <label htmlFor='anxious'>
            <input
              type='checkbox'
              id='anxious'
              name='condition_of_dog'
              value={values.anxious}
            />
            Anxious
          </label>
          <label htmlFor='aggressive'>
            <input
              type='checkbox'
              id='aggressive'
              name='condition_of_dog'
              value={values.aggressive}
            />
            Agressive
          </label>
          <label htmlFor='wounded'>
            <input
              type='checkbox'
              id='wounded'
              name='condition_of_dog'
              value={values.wounded}
            />
            Wounded
          </label>
          <label htmlFor='unknown'>
            <input
              type='checkbox'
              id='unknown'
              name='condition_of_dog'
              value={values.unknown}
            />
            Unknown
          </label>
        </fieldset>
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

export default Condition;
