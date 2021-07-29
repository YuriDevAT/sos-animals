import React from 'react';

const Condition = ({ prevStep, nextStep, values }) => {
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
            <h1>Condition of the dog</h1>
            <form className="condition">
                <label htmlFor="condition">How is the condition of the dog?</label>
                <div className="checkbox">
                    <label htmlFor="good">
                    <input type="checkbox" id="good" name="condition_of_dog" value={values.good} />
                    Good</label>
                    <label htmlFor="anxious">
                    <input type="checkbox" id="anxious" name="condition_of_dog" value={values.anxious} />
                    Anxious</label>
                    <label htmlFor="aggressive">
                    <input type="checkbox" id="aggressive" name="condition_of_dog" value={values.aggressive} />
                    Agressive</label>
                    <label htmlFor="wounded">
                    <input type="checkbox" id="wounded" name="condition_of_dog" value={values.wounded} />
                    Wounded</label>
                    <label htmlFor="unknown">
                    <input type="checkbox" id="unknown" name="condition_of_dog" value={values.unknown} />
                    Unknown</label>
                </div>                  
            </form>
            <footer>
                <button onClick={Prev} className="btn nav-btn prev">Previous</button>
                <button onClick={Next} className="btn nav-btn submit" type="submit">Report</button>
            </footer>
        </div>
    )
}

export default Condition;