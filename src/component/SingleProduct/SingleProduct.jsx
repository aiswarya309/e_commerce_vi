import React from 'react'
import { useLocation } from 'react-router-dom'
import './singleProduct.css'

export const SingleProduct = () => {
    const location = useLocation();
    const { description, title, thumbnail, price } = location.state;
    return (
        <div>
            <div className="product">
                <div className="product_img">
                    <img src={thumbnail} alt="" /><br/>
                    <button>Add to Cart</button>
                    <button>Buy now</button>
                </div>
                <div className="product_description">
                    <h4>{title}</h4>
                    <span><p>4.5</p> 261 Rating & 21 Reviews</span>
                    <p>${price}</p>
                    <div className="offers">
                        <p><b>Bank Offers</b>5% cashback on Axis Bank Flipkart Debit Card up to ₹750T&C</p>
                        <p><b>Bank Offers</b>5% cashback on Flipkart SBI Credit Card upto ₹4,000 per calendar quarterT&C</p>
                        <p><b>Bank Offers</b>Flat ₹50 off on Flipkart Bajaj Finserv Insta EMI Card. Min Booking Amount: ₹2,500T&C</p>
                        <p><b>Bank Offers</b>Bank Offer5% cashback on Flipkart Axis Bank Credit Card upto ₹4,000 per statement quarterT&C</p>

                    </div>

                </div>
            </div>
            <div className="other_product"></div>
        </div>
    )
}
