import React from 'react'
import data from '../../data.json'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

export const Listing = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const product = axios.get('http://localhost:5000/api/products')
        .then((res) => {
            setData(res.data.products)
        });
        console.log('product',product);
        
    },[])
    console.log("be response", data.products);

    return (
        // <div className='listing'>
        <div className='container mt-5 listing'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {
                    data && data.map((items, i) => (
                        <Link className='link_list' style={{ textDecoration: 'none' }} to='/product' state={items} key={i}>
                            <Card style={{ width: '18rem' }} key={i}>
                                <Card.Img variant="top" src={items.thumbnail} />
                                <Card.Body>
                                    <Card.Title>{items.title}</Card.Title>
                                    <Card.Text>
                                        {items.description}
                                    </Card.Text>
                                    <Button variant="primary">More Info</Button>
                                </Card.Body>
                            </Card>
                        </Link>)
                    )
                }
            </div>
        </div>
    )
}
