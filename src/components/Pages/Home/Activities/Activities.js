import React, { useEffect, useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Activities.css"

import Slider from "react-slick";
import { Card } from 'react-bootstrap';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    useEffect(() => {
        fetch('https://pacific-ocean-19299.herokuapp.com/activities')
            .then(res => res.json())
            .then(data => setActivities(data))
    }, [])

    let settings = {
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 750,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 1,
                slidesToScroll: 1,

            }
        },
        {
            breakpoint: 1000,
            settings: {
                autoplay: true,
                autoplaySpeed: 2000,
                slidesToShow: 2,
                slidesToScroll: 2,

            }
        }]
    };

    return (
        <div id="activities" className="bg-light">
            <h2>Discover things to do</h2>
            <Slider
                {...settings}
                className="m-5"
            >

                {
                    activities.map(activity => (

                        <div key={activity._id} className="p-2 ">
                            <Card className="p-2" id="cardHover">
                                <Card.Img className="d-block w-75 img-fluid mx-auto" style={{ height: '200px' }} variant="top" src={activity.img} />
                                <Card.Body style={{ height: '180px' }} >
                                    <Card.Title>{activity.name}</Card.Title>
                                    <Card.Text>
                                        {activity.description.slice(0, 100)};
                                    </Card.Text>

                                </Card.Body>
                            </Card>
                        </div>

                    ))
                }
            </Slider >
        </div>
    );
};

export default Activities;