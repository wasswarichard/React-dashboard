import React from 'react';
// import Spinner from "../../images/spinner.gif"
// import Spinner from "../images/spinner.gif"
import spinner from "../images/spinner.gif"

const FullPageLoader = () => {
    return (
        <div className="fp-container">
            <img src={spinner} className="fp-loader" alt="loading"/>
        </div>
    )
}
export default FullPageLoader;

// <img src="img/richard.jpg" width="40px" height="40px" alt="">