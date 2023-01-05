import React from 'react'
import Foods from './Foods'

function Main() {

  const successfulLookup = position => {
    const { latitude, longitude } = position.coords;
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=ac79a44feb304719b7ac2e6437ce6cbc`)
      .then((response)=>{
        response.json().then((data)=>{
          console.log(data.results[0].formatted)
        })
      }
      
      ) // Or do whatever you want with the result

  }

  const location = ()=>{
    const result = window.navigator.geolocation.getCurrentPosition(successfulLookup, console.log);
    // result[0].formatted;
  }
  
  return (
    <div>
      <div className=' h-screen mb-16 ml-4 mr-4 pt-6  overflow-y-auto scrollbar-hide'>
        <div onClick={location} className=''>

          <Foods />
        </div>
      </div>
    </div>
  )
}

export default Main