import React, { useState } from 'react'
import './myProfile.css'

export const MyProfile = () => {
    const [edit,setEdit] =useState({
        personal:false,
        email:false,
        phone:false
    })
    const [info,setInfo] =useState({
        firstName:'',
        lastName:'',
        gender:'',
        email:'',
        phone:''
    })
    const SaveInfo =(e)=>{
const {name,value} =e.target
console.log(name,value);

    }
    return (
        <div className='profile-container'>
            <div className="personal-info">
                <div className='info-heading'><span>Personal Information</span> <button onClick={()=>setEdit({...edit, personal:true})}>Edit</button></div>
                <form action="">
                    <div className='name-details'>
                        <input type='text' name='first' value={info.firstName} onChange={SaveInfo}/>
                        <input type='text' name='last' value={info.lastName} onChange={SaveInfo}/>
                        {edit.personal ? <input type="button" value='Save'  onClick={SaveInfo}/> :''}
                        
                    </div>
                    <h6>Your Gender</h6>
                    <input type='radio' id='male' value='male' name='gender' />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id='female' value='female' name='gender' />
                    <label htmlFor='female' >Female</label>
                </form>
            </div>
            <div className="email-info personal-info">
                <div className='info-heading'>  <span>Email Address</span> <button onClick={()=>setEdit({...edit,email:true})}>Edit</button></div>
                <input type="text" name='email' value={info.email} onChange={SaveInfo}/>
                {edit.email ? <input type="button" value='Save' /> :''}

            </div>
            <div className="phone-info personal-info">
                <div className='info-heading'>  <span>Phone Number</span> <button onClick={()=>setEdit({...edit,phone:true})}>Edit</button></div>
                <input type="text" name='phone' value={info.phone} onChange={SaveInfo}/>
                {edit.phone ? <input type="button" value='Save' /> :''}

            </div>
        </div>
    )
}
