import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Booking = () => {
    // const { detailId } = useParams();
    // const [detail, setDetail] = useState({});
    const { serviceId } = useParams();
    const [service, setService] = useState({})
    useEffect(() => {
        fetch(`http://localhost:5000/products/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])


    // useEffect(() => {
    //     fetch(`http://localhost:5000/products/${detailId}`)
    //         .then(res => res.json())
    //         .then(data => setDetail(data));
    // }, [])

    return (

        <div>
            <h2>Details of: {service.name}</h2>
            <h2>Details of: {service.description}</h2>
            <img src={service.img} alt="" />
            <h2>This is booking: {serviceId}</h2>
        </div>

        // <div>
        //     <h2>Details of: {detail.name}</h2>
        //     <h2>Details of: {detail.description}</h2>
        //     <img src={detail.img} alt="" />
        //     <h2>This is Booking:{detailId}</h2>
        // </div>
    );
};

export default Booking;