import React from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { decrement, increment, removeItem, saveforLater, removeSaved } from '../../redux/slice'
// import { Modal } from '@mui/base/Modal';
// import { Modal } from '@mui/material';
import Modal from '@mui/material/Modal';
import MyVerticallyCenteredModal from '../bootstrapAddressModel';
import RemoveCartPopUp from '../RemoveCartBs'
import cartEmpty from '../../assets/cart-empty.png'


export const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const saveLater = useSelector((state) => state.cart.saveForLater)
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = React.useState(false);
    console.log("cart", cart);

    return (<>
        <Navbar />
        <div className='container-cart'>
            <div className='cart'>
                <div className="address">
                    <p>From Saved Address</p>
                    <button variant="primary" onClick={() => setModalShow(true)}>Enter Delivery Pincode</button>
                    <MyVerticallyCenteredModal
                        show={modalShow}
                        onHide={() => setModalShow(false)}
                    />
                </div>
                {
                    cart && cart.length ? cart.map((item, i) => (
                        <div className="carts-item" key={i}>
                            <div className="img">
                                <img src={item.thumbnail} alt="" />
                                <div className='cart-change'>
                                    <button className='cart-btn' onClick={() => dispatch(decrement(item.id))} disabled={item.quantity <= 1}>-</button>
                                    <div>{item.quantity}</div>
                                    <button className='cart-btn' onClick={() => dispatch(increment(item.id))}>+</button>
                                </div>
                            </div>
                            <div className="details">
                                <h3>{item.title}</h3>
                                <p className="brand">{item.brand}</p>
                                <p className="catagory">{item.category}</p>
                                <p className="price">{item.price}</p>
                                <button className='' onClick={() => dispatch(saveforLater(item))}>Save for later</button>
                                {/* <button className='' onClick={() => dispatch(removeItem(item.id))}>Remove</button> */}
                                <RemoveCartPopUp id={item.id} />
                            </div>
                            <div className="date">Delivery by Mon Oct 20</div>
                        </div>
                    )) : <div className='empty-cart'>
                        <img src={cartEmpty} className='empty-cart-img'/>
                        <h4>Your cart is empty</h4>
                        <p>Explore our wide section and find something you like</p>
                    </div>
                }
                {cart && cart.length > 0 ? <div className="place-order">
                    <button className='btn-place-order'>PLACE ORDER</button>
                </div> : ''}

                <div className="saveLater">
                    {
                        saveLater && saveLater.length ? (
                            <>
                                <hr />
                                <h3>Saved for later</h3>

                                {saveLater.map((item, i) => (
                                    <div className="carts-item" key={i}>
                                        <div className="img">
                                            <img src={item.thumbnail} alt="" />
                                            <div className='cart-change'>
                                                <button className='cart-btn' onClick={() => dispatch(decrement(item.id))}>-</button>
                                                <div>{item.quantity}</div>
                                                <button className='cart-btn' onClick={() => dispatch(increment(item.id))}>+</button>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <h3>{item.title}</h3>
                                            <p className="brand">{item.brand}</p>
                                            <p className="catagory">{item.category}</p>
                                            <p className="price">{item.price}</p>
                                            <button className='' onClick={() => dispatch(removeSaved(item.id))}>Remove</button>
                                        </div>
                                    </div>
                                ))}
                            </>) : ''
                    }
                </div>

            </div>
            <div className="price-details">
                <div className="title">
                    <h3>PRICE DETAILS</h3>
                </div>
                <div className="price">
                    <p>price</p>
                    <p>Discount</p>
                    <p>Coupons</p>
                    <p>Platform fee</p><hr />
                    <p><b>Total Amount</b></p><hr />
                    <p>You will save $ 15,309 on this order</p>

                </div>
            </div>
        </div>
        <Footer />
    </>
    )
}
