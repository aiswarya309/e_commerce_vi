import React, { createContext, useState } from 'react'
export const AddressContext = createContext();
export const AddressProvider = ({children}) => {
    const [address , setAddress] = useState([])
    const [selectedAddress,setSelectedAddress] = useState(null)
      // const [add, setAdd] = useState(false)

  return (
    <>
    <AddressContext.Provider value={{address,setAddress,selectedAddress,setSelectedAddress}}>
        {children}
    </AddressContext.Provider>
    </>
  )
}
