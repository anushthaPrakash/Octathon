import React from 'react'
import { storage, db } from '../../firebase';
import { uuid4 } from 'uuid4';
import { useState } from 'react'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { addDoc, collection } from 'firebase/firestore';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Sell() {

  const items = ['Paneer', 'Chicken', 'Bhindi', 'Ghobhi', 'Kadhi', 'Egg Curry', 'Mushroom', 'Fish', 'Raita', 'Biryani', 'Aaalo Paratha', 'Roti', 'Rice']

  const [photo, setPhoto] = useState(null);
  const [name, setName] = useState(null);
  const [price, setPrice] = useState(0);
  const [error, setError] = useState(null);
  const [yourown, setYourown] = useState(null);
  const navigate = useNavigate();

  const setValue = (e)=>{
    if(e.target.name==="item-name"){
      setName(e.target.value);
    }else{
      setPrice(e.target.value)
    }

  }
  const setMyPhoto = (e)=>{
    setPhoto(e.target.files[0]);
  }



  const saveItem = async(e) =>{
    e.preventDefault();

    if(photo===null){
      setError("Please upload a photo")
      return;
    }else{
      console.log(photo)
    }
    if(price<=0){
      setError("Price can't be 0");
      return;
    }
    if(name===null || name==="" || name===undefined){
      setError("Fill the name");
      return;
    }
    setError(null);

    // Upload item-photo
    const photoRef = ref(storage, `selling/${photo.name + uuid4()}`)
    await uploadBytes(photoRef, photo).then((snapshot) => {
      console.log(snapshot)
      getDownloadURL(snapshot.ref).then(async(URL) => {
        // setUrl(URL);
        // send data to the database
        // sendDataToDB(URL)
        await addDoc(collection(db, "items"), {
          ['item-name']:name,
          photo:URL,
          price:price,
          sEmail:JSON.parse(localStorage.getItem("user")).email,
          sName:JSON.parse(localStorage.getItem('user')).name
        })
        console.log(URL)  
        navigate('/success/Item-Added-Successfully')
        
      })
    }).catch((er)=>{
      console.log(er);
    })


  }

  const detectYourOwn = (e)=>{
    if(e.target.checked===true){
      setYourown(true);
      console.log('yesyes')
    }else{
      setYourown(false);
    }
  }




  return (
    <div className="flex items-center justify-center p-12 my-auto h-screen border-4 border-orange-300">
        <div className="mx-auto w-full md:w-1/2 lg:w-1/2">
          
          {
            error ? <label className='text-2xl text-red-500 border-2 rounded text-center my-8' htmlFor="error">{error}</label> : null
          }

          <form onSubmit={saveItem}>
            <div className="-mx-3 flex flex-wrap">
              <div className="w-full px-3">

                
                {yourown ? (<div className="mb-5">
                  <label htmlFor="fName" className="mb-3 block text-base font-medium text-[#07074D]">
                    Dish Name
                  </label>
                  <input type="text" name="item-name" id="item-name" placeholder="First Name" className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={setValue} />
                </div>) 
                :
                (<div>
                    <label htmlFor="item" className="mb-3 block text-base font-medium text-[#07074D]">
                      Select a dish
                    </label>
                    <select id="item" onChange={(event)=>{setName(event.target.value)}}
                    class="block border border-grey-light w-full my-2 p-3 rounded mb-4" >

                        {items.map((itemName, index)=>{
                          return <option className='h-80 py-4' value = {itemName} key={index}>{itemName}</option>
                        })}

                    </select>
                </div>)
                }
                <div className='flex flex-row items-center justify-start p-4' >
                  <label htmlFor="item" className="block text-base font-medium text-red-400 mr-2">
                    Not in the options? Check this to write your own!
                  </label>
                  <input type="checkbox" name="yourown" id="yourown" onChange={detectYourOwn} />
                </div>

                
              </div>

            </div>
            <div className="mb-5">
              <label htmlFor="guest" className="mb-3 block text-base font-medium text-[#07074D]">
                Price You're Selling at
              </label>
              <input type="number" name="Price" id="Price" placeholder={5} min={0} className="w-full appearance-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md" onChange={setValue} />
            </div>

            <div className="mb-5">
              <label className="mb-3 block text-base font-medium text-[#07074D]">
                Upload a photo maybe?
              </label>
              <input type="file" name="photo" id="photo" onChange={setMyPhoto}/>
            </div>

            <div>
              <button className="hover:shadow-form rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Sell