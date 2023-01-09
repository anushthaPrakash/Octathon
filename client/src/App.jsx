import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Main from './components/Main'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './components/Login/Login';
import BuyItem from './components/BuyItem/BuyItem';
import FrontPage from './components/Homepage/FrontPage';
import UserOptions from './components/UserPage/UserOptions';
import SellDish from './components/SellPage/SellDish';
import BuyDishSelected from './components/BuyPage/BuyDishSelected';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <FrontPage/>
        }/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/buy"  element={<BuyItem/>}/>
        <Route path="/user"  element={<UserOptions/>}/>
        <Route path="/sell"  element={<SellDish/>}/>
        <Route path="/sell/:item" element={<Login/>}/>
        <Route path="/buydish" element={<BuyDishSelected/>}/>

      </Routes>
    </BrowserRouter>
  )
}

export default App
