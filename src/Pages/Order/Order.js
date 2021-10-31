import React from 'react';

const Order = () => {
    return (
        <div>
            <h2>This is order</h2>
        </div>
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