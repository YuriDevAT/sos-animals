import React from 'react';

const Home = ({ nextStep }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }
    return (
        <div className="home">
            <h1 className="">SOS Animals</h1>
            <p className="">
                If you see an abandon dog on the street, please help by 
                filling out the form in this app.
                An animal welfare organisation nearby will be notified and
                helps the animal as soon as possible.
            </p>
            <button
            className=""
            onClick={ Next }>Report <br />animal</button>
        </div>
    )
}

export default Home;