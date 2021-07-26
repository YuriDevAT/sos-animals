import React from 'react';

const Home = ({ nextStep }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }
    return (
        <div className="container flex flex-col items-center pt-20 px-8">
            <h1 className="my-12 bold text-5xl">SOS Animals</h1>
            <p className="text-justify text-lg">If you see an abandon dog on the street, please help by 
            filling out the form in this app.
                An animal welfare organisation nearby will be notified and
                helps the animal as soon as possible.
            </p>
            <button
            className="bg-blue-700 w-36 h-24 rounded-md shadow-md text-white text-xl mt-12"
            onClick={ Next }>Report <br />animal</button>
        </div>
    )
}

export default Home;