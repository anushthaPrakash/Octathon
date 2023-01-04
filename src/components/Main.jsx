import React from 'react'
import Foods from './Foods'

function Main() {
  return (
    <div>
      <div className=' h-screen mb-16 ml-4 mr-4 pt-6  overflow-y-auto scrollbar-hide'>
        <div className=''>
          <Foods />
        </div>
      </div>
    </div>
  )
}

export default Main