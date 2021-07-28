import React from 'react';

const Success = () => {
    return (
        <div className="success">
            <h1>Successfully reported!</h1>
            <p id="success-p">Thank you for working together to save the animals.</p>
            <a href="/">
            <button type="button" id="success-btn" className="btn">Report another animal</button>
            </a>
        </div>
    )
}

export default Success;