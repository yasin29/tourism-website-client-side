import React, { useEffect, useState } from 'react';

const AllOrders = () => {
    const [bookings, setBookings] = useState([]);
    const [change, setChange] = useState('');
    useEffect(() => {
        fetch('https://pacific-ocean-19299.herokuapp.com/bookings')
            .then(res => res.json())
            .then(data => setBookings(data))
    }, [change]);
    const statusChange = id => {
        const url = `https://pacific-ocean-19299.herokuapp.com/bookings/${id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify()
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('Congratulations! Your Booking is Confirmed');
                    setChange('Confirmed');
                }
            })
    }
    return (
        <div>
            <h2>All Bookings</h2>
            {
                bookings.map(booking =>
                    <div key={booking._id} className="bg-secondary text-white rounded p-3 m-5 w-50 mx-auto">
                        <h2>Villa Name: {booking.booking.name}</h2>
                        <p>Booking ID : {booking._id.slice(19, 24)}</p>
                        <h4>Name:  {booking.name}</h4>
                        <p>Address: {booking.address}</p>
                        <p>Mobile:{booking.phone}</p>
                        <p className={`bg-primary d-inline p-2 rounded ${(booking.status === "Confirmed") ? 'bg-success' : 'bg-warning'}`}>Status: {booking.status}</p>
                        <br />{(booking.status === "pending") && <button onClick={() => statusChange(booking._id)} className="btn btn-success my-3">Accept</button>}
                    </div>
                )
            }
        </div>
    );
};

export default AllOrders;