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
            <div>
                <input type="radio" id="one_dog" name="number_of_dogs" value={values.whoNeedsHelp} />
                <label htmlFor="One dog">1</label>
                <input type="radio" id="two_dogs" name="number_of_dogs" value={values.whoNeedsHelp} />
                <label htmlFor="Two dogs">2</label>
                <input type="radio" id="group_dogs" name="number_of_dogs" value={values.whoNeedsHelp} />
                <label htmlFor="Group of dogs">more</label>
            </div>
            <label htmlFor="type">What type of dog is it?</label>
                <input
                type="text"
                placeholder="young, old, Laprador, Husky,.."
                value=""
                onChange={handleChange}
                />
            <label htmlFor="size">How big is the dog?</label>
            <div>
                <input type="radio" id="small" name="size_of_dogs" value={values.sizeOfDog} />
                <label htmlFor="Small dog">Small</label>
                <input type="radio" id="middle" name="size_of_dogs" value={values.sizeOfDog} />
                <label htmlFor="Middle dog">Middle</label>
                <input type="radio" id="big" name="size_of_dogs" value={values.sizeOfDog} />
                <label htmlFor="Big dog">Big</label>
            </div>   
            <label htmlFor="When did you see it?">When did you see the dog?</label>
            <input
                placeholder="morning, noon, 4pm,.."
                type="text"
                value=""
                onChange={handleChange}
                />
        </form>
        <footer>
            <button onClick={ Prev }>Previous</button>
            <button onClick={ Next }>Next</button>
        </footer>
        </div>
    )
}

export default ReportAnimal;