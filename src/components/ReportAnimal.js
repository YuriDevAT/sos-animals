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
        <div className="container items-center px-12">
        <h1 className="my-6 bold text-4xl text-center">Who needs help?</h1>
        <form className="text-lg flex flex-col justify-between pb-8">
            <label
            htmlFor="Who needs help?">
            How many dogs need help?
            </label>
            <div className="flex justify-around my-2">
                <input type="radio" id="one_dog" name="number_of_dogs" value={values.whoNeedsHelp} className="bg-blue-400 w-16 h-16 rounded shadow-sm my-2" />
                <label htmlFor="One dog">1</label>
                <input type="radio" id="two_dogs" name="number_of_dogs" value={values.whoNeedsHelp} className="bg-blue-400 w-16 h-16 rounded shadow-sm my-2" />
                <label htmlFor="Two dogs">2</label>
                <input type="radio" id="group_dogs" name="number_of_dogs" value={values.whoNeedsHelp} className="bg-blue-400 w-16 h-16 rounded shadow-sm my-2" />
                <label htmlFor="Group of dogs">more</label>
            </div>
            <label htmlFor="type">What type of dog is it?</label>
                <input
                type="text"
                placeholder="young, old, Laprador, Husky,.."
                value={values.typeOfDog}
                onChange={handleChange}
                className="container rounded border py-2 pl-2 my-2 z-30"
                />
            
            <label htmlFor="size">How big is the dog?</label>
            <div className="flex justify-around  my-2">
                <input type="radio" id="small" name="size_of_dogs" value={values.sizeOfDog} className="bg-blue-400 w-16 h-16 rounded shadow-sm my-2" />
                <label htmlFor="Small dog">Small</label>
                <input type="radio" id="middle" name="size_of_dogs" value={values.sizeOfDog} className="bg-blue-400 w-16 h-16 rounded shadow-sm my-2" />
                <label htmlFor="Middle dog">Middle</label>
                <input type="radio" id="big" name="size_of_dogs" value={values.sizeOfDog} className="bg-blue-400 w-16 h-16 rounded shadow-sm my-2" />
                <label htmlFor="Big dog">Big</label>
            </div>   
            <label htmlFor="When did you see it?">When did you see the dog?</label>
            <input
                placeholder="morning, noon, 4pm,.."
                className="container rounded border py-2 pl-2 my-2"
                type="text"
                value={values.whenSeen}
                onChange={handleChange}
                />
            
        </form>
        <footer className="container flex justify-around h-1/5">
        <button onClick={ Prev } className="bg-blue-700 text-white rounded h-16 w-24 shadow-md">Previous</button>
        <button onClick={ Next } className="bg-blue-700 text-white rounded h-16 w-24 shadow-md">Next</button>
        </footer>
        </div>
    )
}

export default ReportAnimal;