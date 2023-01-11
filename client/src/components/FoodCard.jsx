import React from 'react'

function FoodCard({ name, src, profile }) {
  return (
    <div className='relative  h-auto w-auto md:h-auto md:w-auto lg:h-auto lg:w-auto cursor-pointer  transition duration-200
    transform ease-in hover:scale-105 hover:animate-pulse  justify-center'>
      <img src={src}  loading="lazy"  className='h-80 object-cover filter brightness-75 rounded-3xl  md:rounded-full lg:rounded-3xl'/>

      <p className=' ml-2 absolute opacity-0 lg:opacity-100 bottom-4 w-5/6 text-white text-sm font-bold truncate'>
        {name}
      </p>
    </div>
  )
}

export default FoodCard