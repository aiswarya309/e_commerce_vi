import React, { useContext } from 'react'
import './cart.css'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar } from '../Navbar/Navbar'
import { Footer } from '../Footer/Footer'
import { decrement, increment, removeItem, saveforLater, removeSaved,addToCart,SaveCartDecrement,saveCartIncrement } from '../../redux/slice'
// import { Modal } from '@mui/base/Modal';
// import { Modal } from '@mui/material';
import Modal from '@mui/material/Modal';
import MyVerticallyCenteredModal from '../bootstrapAddressModel';
import RemoveCartPopUp from '../RemoveCartBs'
import cartEmpty from '../../assets/cart-empty.png'
import { AddressContext } from '../../context/AddressProvider'


export const Cart = () => {
    const cart = useSelector((state) => state.cart.cart)
    const saveLater = useSelector((state) => state.cart.saveForLater)
    const dispatch = useDispatch();
    const [modalShow, setModalShow] = React.useState(false);
    const { address } = useContext(AddressContext)
    const totalPrice = cart.reduce((total, item) => total + item.quantity * item.price, 0)
    const totalDiscount = cart.reduce((discount, item) => discount + (item.discountPercentage * item.quantity) / 100, 0)
    const totalItem = cart.reduce((total, item) => total + item.quantity, 0)
    const platformFee = 20
    const totalAmount = totalPrice - totalDiscount + platformFee
    const saveMoney = totalAmount - totalPrice
    console.log("cart", cart,totalPrice);
    const getDeliveryDate = () => {
        const today = new Date();
        console.log("*",today.getDay());
        today.setDate(today.getDay() + 7)
        return today.toDateString();

    }

    const handleSaveLaterToCart =(item)=>{
        dispatch(addToCart(item));
        dispatch(removeSaved(item.id));
    }
    return (<>
        <div className='container-cart'>
            <div className='cart'>
                <div className="address">
                    {/* <p>From Saved Address</p> */}
                    {cart.length > 0 && <div className="selected-address">
                        {address.length !== 0 ?
                            <>
                                <span> Deliver to :<b>{address[0].name}   {address[0].pincode}  </b>{address[0].type} </span>
                                <button variant="primary" onClick={() => setModalShow(true)}>Change</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    setModalShow={setModalShow}
                                    onHide={() => setModalShow(false)}
                                />
                            </>

                            : <span>From Saved Address
                                <button variant="primary" onClick={() => setModalShow(true)}>Enter delivery Address</button>
                                <MyVerticallyCenteredModal
                                    show={modalShow}
                                    onHide={() => setModalShow(false)}
                                /></span>}
                    </div>
                    }

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
                            <div className="date">Delivery by {getDeliveryDate()}</div>
                        </div>
                    )) : <div className='empty-cart'>
                        <img src={cartEmpty} className='empty-cart-img' />
                        <h4>Your cart is empty</h4>
                        <p>Explore our wide section and find something you like</p>
                    </div>
                }
                {cart && cart.length > 0 ? <div className="place-order">
                    <button className='btn-place-order'>PLACE ORDER</button>
                </div> : ''}

                <div className="saveLater">
                    {
                        saveLater && saveLater.length>0 ? (
                            <>
                                <hr />
                                <h3>Saved for later</h3>

                                {saveLater.map((item, i) => (
                                    <div className="carts-item" key={i}>
                                        <div className="img">
                                            <img src={item.thumbnail} alt="" />
                                            <div className='cart-change'>
                                                <button className='cart-btn' disabled>-</button>
                                                <div>{item.quantity}</div>
                                                <button className='cart-btn' disabled>+</button>
                                            </div>
                                        </div>
                                        <div className="details">
                                            <h3>{item.title}</h3>
                                            <p className="brand">{item.brand}</p>
                                            <p className="catagory">{item.category}</p>
                                            <p className="price">{item.price}</p>
                                            <button className='' onClick={() => dispatch(removeSaved(item.id))}>Remove</button>
                                            <button className='' onClick={() => handleSaveLaterToCart(item)}>Add to cart</button>
                                        </div>
                                    </div>
                                ))}
                            </>) : ''
                    }
                </div>

            </div>
            {cart.length >0 &&   <div className="price-details">
                <div className="title">
                    <h3>PRICE DETAILS</h3>
                </div>
                <div className="price">
                    <p>price {`(${totalItem} item)`}</p>{totalPrice.toFixed(2)}
                    <p>Discount {totalDiscount.toFixed(2)}</p>
                    <p>Platform fee {platformFee}</p><hr />
                    <p><b>Total Amount {totalAmount.toFixed(2)}</b></p><hr />
                    <p>You will save $ {saveMoney.toFixed(2)} on this order</p>

                </div>
            </div>}
          
        </div>
    </>
    )
}
