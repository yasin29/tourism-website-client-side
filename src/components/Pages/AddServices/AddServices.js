import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './AddServices.css';

const AddServices = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://pacific-ocean-19299.herokuapp.com/villas', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('New Villa Added Successfully');
                    reset();
                }
            })
    };
    return (
        <div className="add-service mb-3">
            <h2>Add Villa</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder="name" />
                <textarea {...register("description")} placeholder="Description" />
                <input type="number" {...register("price", { min: 100, max: 100000 })} placeholder="Price" />
                <input {...register("img")} placeholder="imageURL" />
                <input className="btn btn-success" type="submit" />
                <br /><br />
                <h2>For remove villa</h2>
                <Link to="/remove">
                    <button className="btn btn-danger">Remove Villa</button>
                </Link>
            </form>
        </div>
    );
};

export default AddServices;