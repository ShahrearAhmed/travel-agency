import React, { useEffect, useState } from 'react';
import './MyOrder.css';
const MyOrder = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://peaceful-thicket-40277.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    const handleDelete = id => {
        const url = `https://peaceful-thicket-40277.herokuapp.com/services/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    alert('cancel');
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

                    <textarea className="add-service" placeholder="Address" />
                    <br />
                    <button className="button" onClick={() => handleDelete(service._id)}>Cancel</button>
                    <br />
                    <br />

                    <button className="color">Confirm</button>


                    {/* <button className="color">Order Place</button> */}
                </div>)


            }
        </div >
    );
};

export default MyOrder;