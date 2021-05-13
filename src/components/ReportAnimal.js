import React from 'react';

const ReportAnimal = () => {

    return (
        <div className="container pt-20 flex flex-col items-center">
        <h1 className="my-6 bold text-5xl">Who needs help?</h1>
        <form className="px-8 text-lg">
            <label
            htmlFor="Who needs help?">
            Who needs help?
            </label>
            <div className="flex justify-around">
                <button className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2">1 Dog</button>
                <button className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2">2 Dog</button>
                <button className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2">group of dogs</button>
            </div>
            <label htmlFor="Type">What type of dog is it?</label>
                <input
                placeholder="young, old, Laprador, Husky,.."
                className="container rounded border py-2 pl-2"
                type="text"
                >
                </input>
            
            <label htmlFor="size">How big is the dog?</label>
            <div className="flex justify-around">
                <button className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2">small</button>
                <button className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2">middle</button>
                <button className="bg-blue-400 w-20 h-20 rounded shadow-sm my-2">big</button>
            </div>   
            <label htmlFor="When did you see it?">When did you see the dog?</label>
            <input
                placeholder="morning, noon, 4pm,.."
                className="container rounded border py-2 pl-2"
                type="text"
                >
                </input>
        </form>
        </div>
    )
}

export default ReportAnimal;