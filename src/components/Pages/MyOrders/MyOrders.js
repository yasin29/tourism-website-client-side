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

    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to cancel this booking?")
        if (proceed) {
            const url = `https://pacific-ocean-19299.herokuapp.com/bookings/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Booking Canceled');
                        const remaining = bookings.filter(booking => booking._id !== id);
                        setBookings(remaining);
                    }

                })
        }
    }


    return (
        <div className="container">
            <h1>My Bookings</h1>
            {
                bookings.map(booking =>
                    ((user.email === booking.email) || (user.displayName === booking.name)) && <div key={booking._id} className="bg-secondary text-white rounded p-3 m-5 w-50 mx-auto">
                        <h2>Villa Name: {booking.booking.name}</h2>
                        <p>Booking ID : {booking._id.slice(19, 24)}</p>
                        <h4>Name:  {booking.name}</h4>
                        <p>Address: {booking.address}</p>
                        <p>Mobile:{booking.phone}</p>
                        <p className={`bg-primary d-inline p-2 rounded ${(booking.status === "Confirmed") ? 'bg-success' : 'bg-warning'}`}>Status: <b>{booking.status}</b></p>
                        <br />
                        <button onClick={() => handleDelete(booking._id)} className="btn btn-danger m-3">Cancel Booking</button>
                    </div>
                )
            }
        </div>
    );
};

export default MyOrders;