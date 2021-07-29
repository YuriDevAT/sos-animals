import React from 'react';

const ExtraInformation = ({ prevStep, nextStep, handleChange, values }) => {
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
            <h1>Extra information</h1>
            <form>
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
                    Small</label>
                    <label htmlFor="Middle dog" className="checkbox">
                    <input type="checkbox" id="middle" name="size_of_dog" value={values.middle} />
                    Middle</label>
                    <label htmlFor="Big dog" className="checkbox">
                    <input type="checkbox" id="big" name="size_of_dog" value={values.large} />
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

export default ExtraInformation;