import React from 'react';

const ReportAnimal = ({ prevStep, nextStep, handleChange, values }) => {
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
            <h1>Who needs help?</h1>
            <form>
                <label
                htmlFor="Who needs help?">
                How many dogs need help?
                </label>
                <div className="radio-btn">
                    <label htmlFor="one">
                    <input type="radio" id="one" name="number_of_dogs" value={values.one} />
                    1</label>
                    <label htmlFor="two">
                    <input type="radio" id="two" name="number_of_dogs" value={values.two} />
                    2</label>
                    <label htmlFor="more">
                    <input type="radio" id="more" name="number_of_dogs" value={values.many} />
                    more</label>
                </div>
                <label htmlFor="type">What type of dog is it?</label>
                    <input
                    type="text"
                    placeholder="young, old, Laprador, Husky,.."
                    value={values.typeOfDog}
                    onChange={handleChange('typeOfDog')}
                    />
                <label htmlFor="size">How big is the dog?</label>
                <div className="checkbox-container">
                    <label htmlFor="Small dog" className="checkbox">
                    <input type="checkbox" id="small" name="size_of_dog" value={values.small} />
                    <span className="checkmark"></span>
                    Small</label>
                    <label htmlFor="Middle dog" className="checkbox">
                    <input type="checkbox" id="middle" name="size_of_dog" value={values.middle} />
                    <span className="checkmark"></span>
                    Middle</label>
                    <label htmlFor="Big dog" className="checkbox">
                    <input type="checkbox" id="big" name="size_of_dog" value={values.large} />
                    <span className="checkmark"></span>
                    Big</label>
                </div>   
                <label htmlFor="When did you see it?">When did you see the dog?</label>
                <input
                    placeholder="morning, noon, 4pm,.."
                    type="text"
                    value={values.when}
                    onChange={handleChange('when')}
                    />
            </form>
            <footer>
                <button onClick={Prev} className="btn nav-btn prev">Previous</button>
                <button onClick={Next} className="btn nav-btn next">Next</button>
            </footer>
        </div>
    )
}

export default ReportAnimal;