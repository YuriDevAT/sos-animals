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
        <div className="report">
        <h1 className="">Who needs help?</h1>
        <form className="">
            <label
            htmlFor="Who needs help?">
            How many dogs need help?
            </label>
            <div className="">
                <input type="radio" id="one_dog" name="number_of_dogs" value={values.whoNeedsHelp} className="" />
                <label htmlFor="One dog">1</label>
                <input type="radio" id="two_dogs" name="number_of_dogs" value={values.whoNeedsHelp} className="" />
                <label htmlFor="Two dogs">2</label>
                <input type="radio" id="group_dogs" name="number_of_dogs" value={values.whoNeedsHelp} className="" />
                <label htmlFor="Group of dogs">more</label>
            </div>
            <label htmlFor="type">What type of dog is it?</label>
                <input
                type="text"
                placeholder="young, old, Laprador, Husky,.."
                value={values.typeOfDog}
                onChange={handleChange}
                className=""
                />
            
            <label htmlFor="size">How big is the dog?</label>
            <div className="">
                <input type="radio" id="small" name="size_of_dogs" value={values.sizeOfDog} className="" />
                <label htmlFor="Small dog">Small</label>
                <input type="radio" id="middle" name="size_of_dogs" value={values.sizeOfDog} className="" />
                <label htmlFor="Middle dog">Middle</label>
                <input type="radio" id="big" name="size_of_dogs" value={values.sizeOfDog} className="" />
                <label htmlFor="Big dog">Big</label>
            </div>   
            <label htmlFor="When did you see it?">When did you see the dog?</label>
            <input
                placeholder="morning, noon, 4pm,.."
                className=""
                type="text"
                value={values.whenSeen}
                onChange={handleChange}
                />
            
        </form>
        <footer className="">
        <button onClick={ Prev } className="">Previous</button>
        <button onClick={ Next } className="">Next</button>
        </footer>
        </div>
    )
}

export default ReportAnimal;