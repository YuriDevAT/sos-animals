import React from 'react';
import logo from '../img/home.png';

const Home = ({ nextStep }) => {
    const Next = e => {
        e.preventDefault();
        nextStep();
    }

    return (
        <div className="home">
            <img src={logo} alt="" width="320" height="auto" />
            <p id="home-p">
                If you see an abandon dog on the street, please help by 
                filling out the form in this app.
                An animal welfare organisation nearby will be notified and
                helps the animal as soon as possible.
            </p>
            <button onClick={Next} className="btn home-btn">Report animal</button>
        </div>
    )
}

export default Home;