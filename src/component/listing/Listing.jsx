import React from 'react'
import './listing.css'
import data from '../../data.json'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export const Listing = () => {
    const [data, setData] = useState([])
    const token = sessionStorage.getItem('token')
    console.log('tkn:', token);

    useEffect(() => {
        const product = axios.get('http://localhost:5000/api/products', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then((res) => {
                console.log(res);

                setData(res.data.products)
            });

    }, [])

    return (
        // <div className='listing'>
        <div className='container mt-5 listing'>
            <div className='row row-cols-1 row-cols-md-4 g-4'>
                {
                    data && data.map((items, i) => (
                        <div  key={i}>
                            <Link className='link_list' style={{ textDecoration: 'none' }} to='/product' state={items}>
                                <Card style={{ width: '18rem' , height: '25.4rem'}} key={i}>
                                    <Card.Img variant="top" src={items.thumbnail} />
                                    <Card.Body style={{ lineHeight: 0.5, fontSize: '15px' }}>
                                        <Card.Title>{items.title}<span>&nbsp;{items.category}</span></Card.Title>
                                        <Card.Text>{items.brand}</Card.Text>
                                        <Card.Text><b>&#8377;{items.price}</b> </Card.Text>

                                        {/* <Button variant="primary">More Info</Button> */}
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}
