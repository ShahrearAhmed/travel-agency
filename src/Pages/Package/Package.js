import React from 'react';
import "./Package.css"
const Package = ({ event }) => {
    const { img, place, description, cost } = event;
    return (
        <div className="package">
            <img className="img-fluid" src={img} alt="" />
            <h3 className="p-2">{place}</h3>
            <p className="px-2">{description}</p>
            <p className="price">Price : {cost}</p>
        </div>
    );
};

export default Package;