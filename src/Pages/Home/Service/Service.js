import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { _id, img, name, description, price } = service;
    return (
        <div className="service">
            <img className="img-fluid" src={img} alt="" />
            <h3 className="p-2">{name}</h3>
            <p className="px-2">{description}</p>
            <p className="price">Price : {price}</p>
            <Link to={`/booking/${_id}`}>
                <button className="btn btn-primary mb-2">Booking Now</button>
            </Link>
        </div>
    );
};

export default Service;