import React from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { decrement, increment ,removeItem,saveforLater } from '../../redux/slice'
export const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const dispatch = useDispatch();
    console.log("cart",cart);
    
    return (<>
        <Navbar/>
        <div className='container-cart'>
            <div className='cart'>
                <div className="address">
                    <p>From Saved Address</p>
                    <button>Enter Delivery Pincode</button>
                </div>
                {
                    cart.map((item, i) => (
                        <div className="carts-item" key={i}>
                            <div className="img">
                                <img src={item.thumbnail} alt="" />
                                <div className='cart-change'>
                                    <button className='cart-btn' onClick={()=>dispatch(decrement(item.id))}>-</button>
                                    <div>{item.quantity}</div>
                                    <button className='cart-btn' onClick={()=>dispatch(increment(item.id))}>+</button>
                                </div>
                            </div>
                            <div className="details">
                                <h3>{item.title}</h3>
                                <p className="brand">{item.brand}</p>
                                <p className="catagory">{item.category}</p>
                                <p className="price">{item.price}</p>
                                <button className='' onClick={()=>dispatch(saveforLater(item))}>Save for later</button>
                                <button className='' onClick={()=>dispatch(removeItem(item.id))}>Remove</button>
                            </div>
                            <div className="date">Delivery by Mon Oct 20</div>
                        </div>
                    ))
                }
                <div className="saved"></div>
            </div>
            <div className="price-details">
                <div className="title">
                    <h3>PRICE DETAILS</h3>
                </div>
                <div className="price">
                    <p>price</p>
                    <p>Discount</p>
                    <p>Coupons</p>
                    <p>Platform fee</p><hr/>
                    <p><b>Total Amount</b></p><hr/>
                    <p>You will save $ 15,309 on this order</p>

                </div>
            </div>
        </div>
        <Footer/>
    </>
    )
}
