import React from 'react';
import img from '../../../images/error.gif'
const NotFound = () => {
    return (
        <div>
            <h2 className="text-danger">404</h2>
            <p>Opss! No Result Found</p>
            <img src={img} alt="" />
        </div>
    );
};

export default NotFound;