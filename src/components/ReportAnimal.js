import React from 'react';

const ReportAnimal = () => {


    return (
        <div className="report">
        <h1>Who needs help?</h1>
        <form>
            <label htmlFor="Who needs help?">Who needs help?</label>
                <button>1 Dog</button>
                <button>2 Dog</button>
                <button>group of dogs</button>
            
            <label htmlFor="Type">What type of dog is it?</label>
                <input placeholder="young, old, Laprador, Husky,.."></input>
            
            <label htmlFor="size">How big is the dog?</label>
                <button>small</button>
                <button>middle</button>
                <button>big</button>
            
            <label htmlFor="When did you see it?">When did you see the dog?</label>
                <select>Date</select>
                <select>Time</select>
            
        </form>
        </div>
    )
}

export default ReportAnimal;