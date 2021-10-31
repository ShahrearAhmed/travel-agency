import React, { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './ManageServices.css';

const ManageServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = id => {
        const url = `http://localhost:5000/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('deleted');
                    const remaining = services.filter(service => service._id !== id);
                    setServices(remaining);
                }
            })
    }
    return (
        <div>

            {
                services.map(service => <div key={service._id} >
                    <h3 class="mt-5">{service.name}</h3>
                    <p class="mt-3">{service.description}</p>
                    <img src={service.img} alt="" />
                    <br></br>
                    <br></br>
                    <button className="button" onClick={() => handleDelete(service._id)}>Delete</button>
                </div>)

            }
        </div>
    );
};

export default ManageServices;