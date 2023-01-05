import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div className='flex flex-col h-screen'>
            <div className='bg-[#D7E9B9]'><Header/></div>
            <div className=''><Main/></div>
            <div><Footer/></div>
          </div>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/buy/:item" element={<Login/>}/>
        <Route path="/sell/:item" element={<Login/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
