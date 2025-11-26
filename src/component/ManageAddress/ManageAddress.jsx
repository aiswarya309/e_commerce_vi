import React, { useContext, useState } from 'react'
import './manageAddres.css'
import { AddNewAddress } from './AddNewAddress'
import { AddressContext } from '../../context/AddressProvider'

export const ManageAddress = () => {
  const [add, setAdd] = useState(false)
  const { address :addresses} = useContext(AddressContext)
  console.log(addresses);
  

  return (
    <div className='address-container'>
      <h3>Manage Address</h3>
      {/* <div className="add-Address" onClick={() => setAdd(true)}>{add ? <AddNewAddress setAdd={setAdd} /> : '+ ADD A NEW ADDRESS'}</div> */}
      {add ? <div className="add-Address"><AddNewAddress setAdd={setAdd} /> </div> : <div className="add-Address" onClick={() => setAdd(true)}>+ ADD A NEW ADDRESS</div>}
      <div >
        { addresses.length > 0 ? addresses.map((address,i) => {
         return <div key={i} className="list-Address">
            <div className="home-tag">{address.type}</div>
            <span><p className='name-php'>{address.name}</p><p>{address.phone}</p></span>
            <p>{address.address}{address.locality}{address.city}{address.state}<b>-{address.pincode}</b></p>
          </div>

        }):""}
      </div>
    </div>
  )
}
