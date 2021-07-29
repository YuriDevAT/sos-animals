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
                    <input type="radio" id="one" name="number_of_dogs" value={values.one} />
                    <label htmlFor="one">1</label>
                    <input type="radio" id="two" name="number_of_dogs" value={values.two} />
                    <label htmlFor="two">2</label>
                    <input type="radio" id="more" name="number_of_dogs" value={values.many} />
                    <label htmlFor="more">more</label>
                </div>
                <label htmlFor="type">What type of dog is it?</label>
                    <input
                    type="text"
                    placeholder="young, old, Laprador, Husky,.."
                    value={values.typeOfDog}
                    onChange={handleChange('typeOfDog')}
                    />
                <label htmlFor="size">How big is the dog?</label>
                <div className="checkbox">
                    <input type="checkbox" id="small" name="size_of_dog" value={values.small} />
                    <label htmlFor="Small dog">Small</label>
                    <input type="checkbox" id="middle" name="size_of_dog" value={values.middle} />
                    <label htmlFor="Middle dog">Middle</label>
                    <input type="checkbox" id="big" name="size_of_dog" value={values.large} />
                    <label htmlFor="Big dog">Big</label>
                </div>   
                <label htmlFor="When did you see it?">When did you see the dog?</label>
                <input
                    placeholder="morning, noon, 4pm,.."
                    type="text"
                    value={values.when}
                    onChange={handleChange('whenSeen')}
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