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
                    id="type"
                    name="type"
                    placeholder=" young, old, Laprador, Husky,.."
                    value={values.typeOfDog}
                    onChange={handleChange('typeOfDog')}
                    />
                <fieldset className="dog-size">
                    <legend>How big is the dog?</legend>
                    <div className="checkbox-container">
                        <label htmlFor="small" className="checkbox">
                        <input type="checkbox" id="small" name="size" value={values.small} />
                        Small</label>
                        <label htmlFor="middle" className="checkbox">
                        <input type="checkbox" id="middle" name="size" value={values.middle} />
                        Middle</label>
                        <label htmlFor="big" className="checkbox">
                        <input type="checkbox" id="big" name="size" value={values.large} />
                        Big</label>
                    </div> 
                </fieldset>  
                <label htmlFor="time">When did you see the dog?</label>
                <input
                    placeholder=" morning, noon, 4pm,.."
                    type="text"
                    id="time"
                    name="time"
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