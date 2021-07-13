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
        <div className="container pt-20 pt-20 px-8">
            <h1 className="my-6 bold text-4xl text-center">Condition of the animal</h1>
            <form className="">
                <label htmlFor="Condition of dog">How is the condition of the animal?</label>
                <div className="flex flex-wrap justify-around items-center">
                    <input type="radio" id="good" name="condition_of_dog" value={values.condition} className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2" />
                    <label htmlFor="Dog is fine">Good</label>
                    <input type="radio" id="anxious" name="condition_of_dog" value={values.condition} className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2" />
                    <label htmlFor="Dog is anxious">Anxious</label>
                    <input type="radio" id="aggressive" name="condition_of_dog" value={values.condition} className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2" />
                    <label htmlFor="Dog is aggressive">Agressive</label>
                    <input type="radio" id="wounded" name="condition_of_dog" value={values.condition} className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2" />
                    <label htmlFor="Dog is wounded">Wounded</label>
                    <input type="radio" id="unkown" name="condition_of_dog" value={values.condition} className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2" />
                    <label htmlFor="I cannot tell">Unknown</label>
                </div>                  
            </form>
            <button onClick={ Prev } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Previous</button>
            <button onClick={ Next } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Next</button>
        </div>
    )
}

export default Condition;