import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  return (
    <div className='flex flex-col h-screen'>
    <div className='bg-[#D7E9B9]'><Header/></div>
    <div className=''><Main/></div>
    <div><Footer/></div>
    </div>
  )
}

export default App
