import React from 'react'
import Dishes from './Dishes'

function DishesMain() {
  return (
    <div className='flex-grow  '>
    <div className='h-screen mb-8  bg-[#FAF8F1] mx-auto  scrollbar-track-gray-400/20 scrollbar-thumb-[#3C6255] scrollbar-thin w-max justify-center '>
   
    
   <Dishes/>
  
   </div>
   </div>
  )
}

export default DishesMain