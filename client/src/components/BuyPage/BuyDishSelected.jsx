import { collection, addDoc,getDoc, setDoc } from 'firebase/firestore';
import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { db ,storage} from '../../firebase';

function BuyDishSelected(props) {
  const { state } = useLocation();
  const { name, sEmail, price } = state;
  const [priceT,setPriceT] = useState(state.price.price)

  // console.log(state)
  // console.log(price)
  const saveItem = async (e) => {
       e.preventDefault();
       const colRef =collection(db,"items")
       let docRef = doc(db, 'items', 
       "43N9kwwV18Wmqu5l8K7l")
       updateDoc(docRef, {
        bEmail: JSON.parse(localStorage.getItem("user"))?.email
      })
  }
  const discountP = state.price.price - 0.05 * state.price.price;
  function setN(){
    setPriceT(state.price.price)
  }
  function setD(event){
    setPriceT( discountP)
  }
  return (
    <div className="flex items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-8">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full max-w-screen-lg">
        <div className="lg:col-span-2">
          <h2 className="text-sm font-medium">Payment Method</h2>
          <div className="bg-white rounded mt-4 shadow-lg">

            <div className="border-t">
              <div className="flex items-center px-8 py-5">
                <input className="appearance-none w-4 h-4 rounded-full border-2 border-white ring-2 ring-blue-600 ring-opacity-100 bg-blue-600" type="radio" />
                <label className="text-sm font-medium ml-4">Credit Card</label>
              </div>
              <div className="grid grid-cols-2 gap-4 px-8 pb-8">
                <div className="col-span-2">
                  <label className="text-xs font-semibold" htmlFor="cardNumber">Card number</label>
                  <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="0000 0000 0000 0000" />
                </div>
                <div className>
                  <label className="text-xs font-semibold" htmlFor="cardNumber">Expiry Date</label>
                  <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="text" placeholder="MM/YY" />
                </div>
                <div className>
                  <label className="text-xs font-semibold" htmlFor="cardNumber">CVC/CVV</label>
                  <input className="flex items-center h-10 border mt-1 rounded px-4 w-full text-sm" type="password" placeholder="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
        <form onSubmit={saveItem}  name="id">
          <div>
            <h2 className="text-sm font-medium">Purchase Summary</h2>
            <div className="bg-white rounded mt-4 shadow-lg py-6">
              <div className="px-8">
                <div className="flex items-end">
                  <div className="text-sm font-medium focus:outline-none " name id>
                    <h1>{state.name.name}</h1>
                  </div>
                </div>
                <span className="text-xs text-gray-500 mt-2">{state.sEmail.email}</span>
              </div>
              <div className="px-8 mt-3">
                <div className="flex items-end">
                  <select className="text-sm font-medium focus:outline-none -ml-1" name id onChange={(event)=>
                  { 
                     event?setD():setN()
                    }} >
                    <option >Dish's Price (Regular)</option>
                    <option >Dish's Price (Discounted)</option>
                  </select>
                <span className="text-sm ml-auto font-semibold">{priceT}</span>
                  <span className="text-xs text-gray-500 mb-px">/person</span>
                </div>
                <span className="text-xs text-gray-500 mt-2">Save 5% with membership</span>
              </div>
              <div className="px-8 mt-4">
                <div className="flex items-end justify-between">
                  <span className="text-sm font-semibold">Tax</span>
                  <span className="text-sm text-gray-500 mb-px">10%</span>
                </div>
              </div>
              <div className="px-8 mt-4 border-t pt-4">
                <div className="flex items-end justify-between">
                  <span className="font-semibold">Today you pay (INR)</span>
                  <span className="font-semibold">{priceT}</span>
                </div>
                <span className="text-xs text-gray-500 mt-2">After 1 month free: ₹300/mo.</span>
              </div>
              <div className="flex flex-col px-8 pt-4">
                <button className="flex items-center justify-center bg-blue-600 text-sm font-medium w-full h-10 rounded text-blue-50 hover:bg-blue-700">Buy</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BuyDishSelected