import React, { useEffect, useState } from 'react';

const Remove = () => {
    const [villas, setVillas] = useState([]);
    useEffect(() => {
        fetch('https://pacific-ocean-19299.herokuapp.com/villas')
            .then(res => res.json())
            .then(data => setVillas(data))
    }, [])
    const handleDelete = id => {
        const proceed = window.confirm("Are you sure to remove this item?")
        if (proceed) {
            const url = `https://pacific-ocean-19299.herokuapp.com/villas/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount) {
                        alert('Selected Villa Deleted');
                        const remaining = villas.filter(villa => villa._id !== id);
                        setVillas(remaining);
                    }

                })
        }
    }
    return (
        <div>
            <h1>Remove Villa</h1>
            {
                villas.map(villa => <div
                    key={villa._id}
                    className="m-2"
                >
                    <h4 className="d-inline m-3">{villa.name}</h4>
                    <button onClick={() => handleDelete(villa._id)} className="btn btn-danger">Delete</button>
                </div>)
            }
        </div>
    );
};

export default Remove;