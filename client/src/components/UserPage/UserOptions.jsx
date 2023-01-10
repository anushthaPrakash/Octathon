import React, { useState } from 'react'
import ContactUs from './ContactUs'
import SideBar from './SideBar'
import { NavLink } from "react-router-dom"
import Orders from './OrderCard'
import OrderCard from './OrderCard'
import OrderMain from './OrderMain'
import DishesMain from './YourDishes/DishesMain'

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

        (<OrderMain />)
        :
        null}
      {itemToLoad == 1

        ?

        (<DishesMain />)
        :
        null}
  

    </div>
  )
}

export default UserOptions