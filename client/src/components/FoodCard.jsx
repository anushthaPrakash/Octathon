import React from 'react'
import { BrowserRouter, Route, Routes,useParams } from 'react-router-dom'
import BuyItem from './BuyItem/BuyItem'
import Protected from './Protected'
import { useNavigate } from 'react-router-dom';

function FoodCard({ name, src }) {
  // const navigate = useNavigate();
  // const parms=useParams()
  // const {dish}=parms;
  return (
    <div className='relative  h-auto w-auto md:h-auto md:w-auto lg:h-auto lg:w-auto cursor-pointer  transition duration-200
    transform ease-in hover:scale-105 hover:animate-pulse  justify-center'>
      {/* <button onClick={() => {
        <BrowserRouter>
        <Routes>
          <Route path={'/buy' + name}
            element={
              <Protected>
                <BuyItem foodname={name} />
              </Protected>
            }

          />
        </Routes>
        </BrowserRouter>
        navigate('/buy/'+{dish})
      }}> */}
        <img src={src} loading="lazy" className='h-80 object-fill filter brightness-75 rounded-3xl  md:rounded-full lg:rounded-3xl' />

        <p className=' ml-2 absolute opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>
          {name}
        </p>
      {/* </button> */}
    </div>
  )
}

export default FoodCard