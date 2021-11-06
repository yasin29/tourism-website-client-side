import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [bookings, setBookings] = useState([]);
    const { user } = useAuth();
    useEffect(() => {
        fetch('https://pacific-ocean-19299.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, []);
    console.log(bookings);
    console.log(user);
    return (
        <div className="container">
            <h1>My Bookings</h1>
            {
                bookings.map(booking =>
                    (user.email === booking.email) && <div key={booking._id} className="bg-secondary text-white rounded p-3 m-5 w-50 mx-auto">
                        <h2>Villa Name: {booking.booking.name}</h2>
                        <p>Booking ID : {booking._id.slice(19, 24)}</p>
                        <h4>Name:  {booking.name}</h4>
                        <p>Address: {booking.address}</p>
                        <p>Mobile:{booking.phone}</p>
                        <p className={`bg-primary d-inline p-2 rounded ${(booking.status === "Confirmed") ? 'bg-success' : 'bg-warning'}`}>Status: <b>{booking.status}</b></p>
                    </div>
                )
            }
        </div>
    );
};

export default MyOrders;