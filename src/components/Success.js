import React from 'react';

const Success = () => {
    return (
        <div className="success">
            <h1 className="">Successfully reported!</h1>
            <p>Thank you for working together to save the animals.</p>
            <a href="/">
            <button type="button" className="">Report another animal</button>
            </a>
        </div>
    )
}

export default Success;