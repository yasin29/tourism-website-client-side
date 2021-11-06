import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Villa.css'

const Villa = ({ villa }) => {
    const { _id, name, description, price, img } = villa;
    return (
        <div>
            <Col id={name}>
                <Card className="p-3" id="cardHover">
                    <Card.Img className="d-block w-75 img-fluid mx-auto" style={{ height: '200px' }} variant="top" src={img} />
                    <Card.Body style={{ height: '200px' }}>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text>
                            {description.slice(0, 70)};
                        </Card.Text>
                        <h5>Price: <small>{price}</small></h5>
                        <Link to={`/booking/${_id}`}>
                            <button className="btn btn-warning">Book Now</button>
                        </Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Villa;