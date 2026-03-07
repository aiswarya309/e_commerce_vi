import React, { useContext, useState } from 'react'
import TextField from '@mui/material/TextField';
import { AddressContext } from '../../context/AddressProvider';
// import {
//   Unstable_NumberInput as BaseNumberInput,
//   NumberInputProps,
//   numberInputClasses,
// } from '@mui/base/Unstable_NumberInput';



export const AddNewAddress = ({setAdd}) => {
  const [formData , setFormData] =  useState({
    id:'',
name:'',
phone:'',
pincode:'',
locality:'',
address:'',
city:'',
state:'',
landmark:'',
alternatePhone:'',
type:''
  })
  const {address,setAddress,setSelectedAddress,selectedAddress}= useContext(AddressContext)
  
  
  const handleChange = (e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
    // console.log(formData);
  }
const handleSave =()=>{
  const newAddress = {...formData,id:address.length + 1}
  if(!selectedAddress)
    setSelectedAddress(newAddress)
  setAddress([...address,newAddress])

  console.log('aadres:-',address,selectedAddress);
  
  setAdd(false)

  
}
const handleCancel =()=>{
  setFormData({
    name:'',
    phone:'',
    pincode:'',
    locality:'',
    address:'',
    city:'',
    state:'',
    landmark:'',
    alternatePhone:'',
    type:''
})
setAdd(false)
}

  return (
    <div className='add-address-container'>
      <h4>ADD A NEW ADDRESS</h4>
      <button className="uselocation"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" className="da7+UC"><g fill="none" fillRule="evenodd"><path d="M0 0h16v16H0z"></path><path className="" fill="#fff" d="M8 5.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 1 0 0-5.4zm6 2A6 6 0 0 0 8.7 2V.7H7.3V2A6 6 0 0 0 2 7.3H.7v1.4H2A6 6 0 0 0 7.3 14v1.3h1.4V14A6 6 0 0 0 14 8.7h1.3V7.3H14zm-6 5.4A4.7 4.7 0 0 1 3.3 8 4.7 4.7 0 0 1 8 3.3 4.7 4.7 0 0 1 12.7 8 4.7 4.7 0 0 1 8 12.7z"></path></g></svg>Use my current location</button><br />
      {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" />
            <TextField id="outlined-basic" label="Outlined" variant="outlined" />
             <NumberInput
      aria-label="Demo number input"
      placeholder="Type a number…"
      value={value}
      onChange={(event, val) => setValue(val)}
    /> */}

      <div className="form-floating mb-3">
        <input type="text" className="form-control" name="name" placeholder="Name" onChange={handleChange} value={formData.name}/>
        <label htmlFor="floatingInput">Name</label>
      </div>
      <div className="form-floating mb-3">
        <input type="number" className="form-control" name="phone" placeholder="10-digit mobile number" onChange={handleChange} value={formData.phone}/>
        <label htmlFor="phone">10-digit mobile number</label>
      </div>
      <div className="form-floating mb-3">
        <input type="number" className="form-control" name="pincode" placeholder="Pincode" onChange={handleChange} value={formData.pincode}/>
        <label pincode="floatingInput">Pincode </label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" name="locality" placeholder="locality" onChange={handleChange} value={formData.locality}/>
        <label htmlFor="locality">Locality </label>
      </div>
      <div className="form-floating mb-3">
        <input type="textarea" className="form-control" name="address" placeholder="Address" onChange={handleChange} value={formData.address}/>
        <label htmlFor="address">Address ( Area and Street) </label>
      </div>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" name="city" placeholder="city" onChange={handleChange} value={formData.city}/>
        <label htmlFor="city">City/District/Town </label>
      </div>
      <select className="form-select" aria-label="Default select example"name='state' onChange={handleChange} value={formData.state}>
        <option value=''>--Select State--</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </select>
      <div className="form-floating mb-3">
        <input type="text" className="form-control" name="landmark" placeholder="landmark" onChange={handleChange} value={formData.landmark}/>
        <label htmlFor="landmark">Landmark (Optional) </label>
      </div>
      <div className="form-floating mb-3">
        <input type="number" className="form-control" name="alternatePhone" placeholder="alternative phone" onChange={handleChange} value={formData.alternatePhone}/>
        <label htmlFor="alternatePhone">Alternate Phone (Optional) </label>
      </div>
     <div className="form-check">
  <input className="form-check-input" type="radio"  name="type" onChange={handleChange} checked={formData.type === 'home' } value='home'/>
  <label className="form-check-label" htmlFor="type">
    Home
  </label>
</div>
<div className="form-check">
  <input className="form-check-input" type="radio"  name="type"  onChange={handleChange} checked={formData.type === 'work'} value='work'/>
  <label className="form-check-label" htmlFor="ra dioDefault2">
   Work
  </label>
</div>
<button type="button" className="btn btn-primary" onClick={handleSave}>SAVE</button>
<button type="button" className="btn btn-light" onClick={handleCancel}>CANCEL</button>
    </div>
  )
}
