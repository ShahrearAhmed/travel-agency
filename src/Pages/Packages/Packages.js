import React, { useEffect, useState } from 'react';
import Package from '../Package/Package';
import "./Packages.css"

const Packages = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ShahrearAhmed/travel-agency/master/public/package.json")
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, []);
    return (
        <div class="mt-5">
            <h3 className="font">Select Your Best Package <br />For Your Travel</h3>
            <div className="package-container">
                {events.map((event) => (
                    <Package event={event}></Package>
                ))}
            </div>
        </div>
    );
};

export default Packages;