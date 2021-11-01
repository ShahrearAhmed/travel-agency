import React, { useEffect, useState } from "react";
import Event from "../Event/Event";
import "./Events.css";

const Events = () => {
    const [events, setEvents] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ShahrearAhmed/travel-agency/master/public/events.json")
            .then((res) => res.json())
            .then((data) => setEvents(data));
    }, []);
    return (
        <div class="mt-5">
            <h3 className="font">Upcoming Events</h3>
            <div className="event-container">
                {events.map((event) => (
                    <Event event={event}></Event>
                ))}
            </div>
        </div>
    );
};

export default Events;