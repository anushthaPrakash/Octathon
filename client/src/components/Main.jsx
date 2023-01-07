import React from 'react'
import Foods from './Foods'

function Main() {
  
  return (
    <div>
      <div className=' h-screen mb-8  bg-[#FAF8F1] pt-4 overflow-y-auto scrollbar-hide ml-3 mr-3 '>
        <div  className=''>

          <Foods />
        </div>
      </div>
    </div>
  )
}

export default Main