import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import './Order.css';
import { Link } from 'react-router-dom';

const Order = () => {

    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    // const handleDelete = id => {
    //     const url = `http://localhost:5000/services/${id}`;
    //     fetch(url, {
    //         method: 'DELETE'
    //     })
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log(data);
    //             if (data.deletedCount) {
    //                 alert('deleted');
    //                 const remaining = services.filter(service => service._id !== id);
    //                 setServices(remaining);
    //             }
    //         })
    // }




    return (
        <div>

            {
                services.map(service => <div key={service._id} >
                    <h3 class="mt-5">{service.name}</h3>
                    <p class="mt-3">{service.description}</p>
                    <img src={service.img} alt="" />
                    <br></br>
                    <br></br>
                    {/* <button className="button" onClick={() => handleDelete(service._id)}>Delete</button> */}
                    <textarea className="add-service" placeholder="Address" />
                    <br />
                    <Link to={`/myOrder`}>
                        <button className="color">Order Place</button>
                    </Link>

                    {/* <button className="color">Order Place</button> */}
                </div>)


            }
        </div >
    );
};

export default Order;



















// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router';
// import details from '../Details/Details/FakeData';
// import './Order.css';

// const Order = () => {
//     const { serviceid } = useParams();

//     const [detail, setDetail] = useState({});

//     useEffect(() => {
//         let detail = details.find(d => d.id === serviceid)
//         setDetail(detail);
//     }, [serviceid])

//     return (
//         <div className="details-container mt-5">
//             <img src={detail?.img} alt="" />
//             <h3 className="p-3">{detail?.name}</h3>
//             <p className="p-3 mx-3">{detail?.description}</p>
//         </div>
//     );
// };

// export default Order;