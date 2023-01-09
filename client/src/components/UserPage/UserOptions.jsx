import React, { useState } from 'react'
import ContactUs from './ContactUs'
import SideBar from './SideBar'
import { NavLink } from "react-router-dom"
import Orders from './OrderCard'

function UserOptions() {
  const [itemToLoad, setItem] = useState(null)
  return (
    <div className='flex-row flex'>
      <SideBar setItem={setItem} />
      {itemToLoad == 2

        ?

        (<ContactUs />)
        :
        null}
      {itemToLoad == 0

        ?

        (<Orders />)
        :
        null}
      {/* <ContactUs/> */}
      {/* <NavLink  to="/contactus"><ContactUs/></NavLink> */}

    </div>
  )
}

export default UserOptions