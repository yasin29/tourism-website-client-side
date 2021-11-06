import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../../../../hooks/useAuth';
import './Checkout.css'

const Checkout = () => {
    const { villaId } = useParams();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { user } = useAuth();
    const [villa, setVilla] = useState({});
    console.log(villa);
    useEffect(() => {
        fetch(`https://pacific-ocean-19299.herokuapp.com/villas/${villaId}`)
            .then(res => res.json())
            .then(data => setVilla(data))
    }, []);
    const onSubmit = data => {
        data.booking = villa;
        axios.post('https://pacific-ocean-19299.herokuapp.com/bookings', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Booking request added Successfully');
                    reset();
                }
            })
    }

    return (
        <div>
            <h1>CheckOut</h1>
            <h4>Villa Name: {villa.name}</h4>
            <h5 className="text-danger">Price: {villa.price}</h5>
            <form className="checkout-form" onSubmit={handleSubmit(onSubmit)}>
                <input className="d-none" defaultValue="pending" {...register("status")} />
                <input defaultValue={user.displayName} {...register("name")} />

                <input defaultValue={user.email} {...register("email", { required: true })} />
                {errors.email && <span className="error">This field is required</span>}
                <textarea placeholder="Your Address" defaultValue="" {...register("address")} />
                <input placeholder="Your City" defaultValue="" {...register("city")} />
                <input placeholder="Your Mobile number" defaultValue="" {...register("phone")} />

                <input type="submit" />
            </form>
        </div>
    );
};

export default Checkout;