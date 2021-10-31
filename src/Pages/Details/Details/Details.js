import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import details from './FakeData';
import './Details.css';

const Details = () => {

    const { serviceId } = useParams();
    const [service, setService] = useState({})

    useEffect(() => {
        fetch(`http://localhost:5000/products/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])

    // const [detail, setDetail] = useState({});

    // useEffect(() => {
    //     let detail = details.find(d => d.id === id)
    //     setDetail(detail);
    // }, [id])

    return (

        <div>
            <h2>Details of: {service.name}</h2>
            <h2>Details of: {service.description}</h2>
            <img src={service.img} alt="" />
            <h2>This is booking: {serviceId}</h2>
        </div>
        // <div className="details-container mt-5">
        //     <img src={detail?.img} alt="" />
        //     <h3 className="p-3">{detail?.name}</h3>
        //     <p className="p-3 mx-3">{detail?.description}</p>
        // </div>
    );
};

export default Details;