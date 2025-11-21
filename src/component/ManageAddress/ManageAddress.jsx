import React, { useContext, useState } from 'react'
import './manageAddres.css'
import { AddNewAddress } from './AddNewAddress'
import { AddressContext } from '../../context/AddressProvider'

export const ManageAddress = () => {
  const [add, setAdd] = useState(false)
  const { address :addresses} = useContext(AddressContext)

  return (
    <div>
      <h3>Manage Address</h3>
      {/* <div className="add-Address" onClick={() => setAdd(true)}>{add ? <AddNewAddress setAdd={setAdd} /> : '+ ADD A NEW ADDRESS'}</div> */}
      {add ? <div className="add-Address"><AddNewAddress setAdd={setAdd} /> </div> : <div className="add-Address" onClick={() => setAdd(true)}>+ ADD A NEW ADDRESS</div>}
      <div className="list-Address">
        { addresses.length > 0 && addresses.map((address,i) => {
         return <div key={i}>
            <div className="home-tag">{address.type}</div>
            <p className='name-php'>{address.name}{}</p>
            <p>xyx,mnp,jjkkfhjhfjhs</p>
          </div>

        })}
      </div>
    </div>
  )
}
