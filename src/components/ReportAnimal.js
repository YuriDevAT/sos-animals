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
        <div className="container flex flex-col items-center max-h-screen">
        <h1 className="my-6 bold text-5xl">Who needs help?</h1>
        <form className="px-8 text-lg">
            <label
            htmlFor="Who needs help?">
            Who needs help?
            </label>
            <div className="flex justify-around">
                <input type="radio" id="one_dog" name="number_of_dogs" value={values.whoNeedsHelp} className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2" />
                <label htmlFor="One dog">1 dog</label>
                <input type="radio" id="two_dogs" name="number_of_dogs" value={values.whoNeedsHelp} className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2" />
                <label htmlFor="Two dogs">2 dog</label>
                <input type="radio" id="group_dogs" name="number_of_dogs" value={values.whoNeedsHelp} className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2" />
                <label htmlFor="Group of dogs">Group of dogs</label>
            </div>
            <label htmlFor="Type">What type of dog is it?</label>
                <input
                type="text"
                placeholder="young, old, Laprador, Husky,.."
                value={values.typeOfDog}
                onChange={handleChange('Type of dog')}
                className="container rounded border py-2 pl-2"
                />
            
            <label htmlFor="size">How big is the dog?</label>
            <div className="flex justify-around">
                <input type="radio" id="small" name="size_of_dogs" value={values.sizeOfDog} className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2" />
                <label htmlFor="Small dog">Small</label>
                <input type="radio" id="middle" name="size_of_dogs" value={values.sizeOfDog} className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2" />
                <label htmlFor="Middle dog">Middle</label>
                <input type="radio" id="big" name="size_of_dogs" value={values.sizeOfDog} className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2" />
                <label htmlFor="Big dog">Big</label>
            </div>   
            <label htmlFor="When did you see it?">When did you see the dog?</label>
            <input
                placeholder="morning, noon, 4pm,.."
                className="container rounded border py-2 pl-2"
                type="text"
                value={values.whenSeen}
                onChange={handleChange('When seen')}
                />
            <button onClick={ Prev } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Previous</button>
            <button onClick={ Next } className="bg-indigo-900 text-white rounded h-16 w-24 shadow-md">Next</button>
        </form>
        </div>
    )
}

export default ReportAnimal;