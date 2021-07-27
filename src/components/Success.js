import React from 'react';

const Success = () => {
    return (
        <div className="container h-full text-center pt-20 px-8">
            <h1 className="mt-6 bold text-4xl text-center">Successfully reported!</h1>
            <p>Thank you for working together to save the animals.</p>
            <a href="/">
            <button type="button" className="bg-blue-700 w-36 h-24 rounded-md shadow-md text-white text-xl mt-12">Report another animal</button>
            </a>
        </div>
    )
}

export default Success;