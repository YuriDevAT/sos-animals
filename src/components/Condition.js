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
                    <label htmlFor="Dog is fine">
                    <input type="checkbox" id="good" name="condition_of_dog" value={values.condition} />
                    Good</label>
                    <label htmlFor="Dog is anxious">
                    <input type="checkbox" id="anxious" name="condition_of_dog" value={values.condition} />
                    Anxious</label>
                    <label htmlFor="Dog is aggressive">
                    <input type="checkbox" id="aggressive" name="condition_of_dog" value={values.condition} />
                    Agressive</label>
                    <label htmlFor="Dog is wounded">
                    <input type="checkbox" id="wounded" name="condition_of_dog" value={values.condition} />
                    Wounded</label>
                    <label htmlFor="I cannot tell">
                    <input type="checkbox" id="unkown" name="condition_of_dog" value={values.condition} />
                    Unknown</label>
                </div>                  
            </form>
            <footer>
                <button onClick={Prev} className="btn nav-btn prev">Previous</button>
                <button onClick={Next} className="btn nav-btn next">Next</button>
            </footer>
        </div>
    )
}

export default Condition;