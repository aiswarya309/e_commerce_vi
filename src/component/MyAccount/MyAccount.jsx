import React, { useState } from 'react'
import './myAccount.css'
import { AccountLayout } from '../AccountLayout.jsx/AccountLayout'
import { ManageAddress } from '../ManageAddress/ManageAddress'

export const MyAccount = () => {
  const [active , setActive] = useState('')
  return (
    <div className='myAccount-container'>
      <div className="myAccount-options">
        <div className="card">
          <div className="card-body">
            Hello
          </div>
        </div>
        <div className="list">
          <div className="list-group">
            <button type="button" className="list-group-item list-group-item-action active" aria-current="true" disabled>
              My Account Setting
            </button>
            <button type="button" className="list-group-item list-group-item-action" onClick={()=>setActive('profile')}>Profile Information</button>
            <button type="button" className="list-group-item list-group-item-action" onClick={()=>setActive('address')}>Manage Address</button>
            <button type="button" className="list-group-item list-group-item-action" onClick={()=>setActive('pan_card')}>PAN Card Information</button>
          </div>
        </div>
        <div className="frequently-visited"><p>Frequently Visited</p>
          <p>Track Order Help Center</p></div>
      </div>
      <div className="option-list">
        {/* <AccountLayout>ffghs</AccountLayout> */}
        {active === 'profile' && <div>Profile Information</div>}
        {active === 'address' && <ManageAddress/>}
        {active === 'pan_card' && <div>PAN Card Information</div>}
        </div>
    </div>
  )
}
