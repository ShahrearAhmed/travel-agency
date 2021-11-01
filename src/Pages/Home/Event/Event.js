import React from "react";
import "./Event.css";

const Event = ({ event }) => {
    const { img, name, description, price } = event;
    return (
        <div className="event">
            <img className="img-fluid" src={img} alt="" />
            <h3 className="p-2">{name}</h3>
            <p className="px-2">{description}</p>
            <p className="price">Price : {price}</p>
        </div>
    );
};

export default Event;