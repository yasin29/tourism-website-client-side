import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const Book = () => {
    const { villaId } = useParams();
    const [villa, setVIlla] = useState({});

    useEffect(() => {
        fetch(`https://pacific-ocean-19299.herokuapp.com/villas/${villaId}`)
            .then(res => res.json())
            .then(data => setVIlla(data))
    }, [])

    return (
        <div className="container mb-3">
            <h1 className="display-1">Villa Details</h1>
            <img className="d-block w-sm-75 w-lg-50 img-fluid mx-auto" style={{ height: '250px' }} src={villa.img} alt="" />
            <h2>Villa Name: {villa.name}</h2>
            <p>{villa.description}</p>
            <h4>Price: {villa.price} BDT</h4>
            <Link to={`/checkout/${villa._id}`}>
                <button className="btn btn-warning">Proceed To Checkout</button>
            </Link>
        </div>
    );
};

export default Book;