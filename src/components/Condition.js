import React from 'react';

const Condition = ({ prevStep, nextStep, handleChange, values }) => {
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
            <h1 className="">Condition of the animal</h1>
            <form className="condition">
                <label htmlFor="Condition of dog">How is the condition of the animal?</label>
                <div className="">
                    <input type="radio" id="good" name="condition_of_dog" value={values.condition} className="" />
                    <label htmlFor="Dog is fine">Good</label>
                    <input type="radio" id="anxious" name="condition_of_dog" value={values.condition} className="" />
                    <label htmlFor="Dog is anxious">Anxious</label>
                    <input type="radio" id="aggressive" name="condition_of_dog" value={values.condition} className="" />
                    <label htmlFor="Dog is aggressive">Agressive</label>
                    <input type="radio" id="wounded" name="condition_of_dog" value={values.condition} className="" />
                    <label htmlFor="Dog is wounded">Wounded</label>
                    <input type="radio" id="unkown" name="condition_of_dog" value={values.condition} className="" />
                    <label htmlFor="I cannot tell">Unknown</label>
                </div>                  
            </form>
            <footer className="">
                <button onClick={ Prev } className="">Previous</button>
                <button onClick={ Next } className="">Next</button>
            </footer>
        </div>
    )
}

export default Condition;