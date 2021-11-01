import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import './AddBooking.css';

const AddBooking = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://peaceful-thicket-40277.herokuapp.com/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2>Please Add a Booking</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 200 })}
                    placeholder="Name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price")} placeholder="Price" />
                <input {...register("img")} placeholder="image url" />
                <input className="color" type="submit" />
            </form>
        </div>
    );
};

export default AddBooking; <h2>Add Booking</h2>