import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Villa from './Villa/Villa';

const Villas = () => {
    const [villas, setVillas] = useState([]);
    useEffect(() => {
        fetch('https://pacific-ocean-19299.herokuapp.com/villas')
            .then(res => res.json())
            .then(data => setVillas(data))
    }, [])
    return (
        <div className="container bg-light my-5 p-3">
            <h2>OUR PRIVATE VILLAS</h2>
            {
                !villas ? <Spinner animation="border" variant="info" />
                    : <Row xs={1} md={2} lg={3} className="g-4">
                        {
                            villas.map(villa => <Villa key={villa._id} villa={villa} />)
                        }
                    </Row>
            }
        </div>
    );
};

export default Villas;