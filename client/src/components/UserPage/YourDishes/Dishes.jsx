import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../../../firebase';
import DishCard from './DishCard';

function Dishes() {
    const [dishes, setDishes] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            
            const email = JSON.parse(localStorage.getItem('user')).email;
            
            const q = query(collection(db, "items"), where('sEmail', '==', email), orderBy('createdAt','desc'));
            await getDocs(q).then((response)=>{
                let data = response.docs.map((ele)=>(
                    {...ele.data()} 

                ))

                setDishes([...data]);

    
            })
        }
        getData();

    }, [])



  return (
    <div className='flex-row justify-center  gap-4 mb-10 border-4 '>


    {dishes.map((dish) => (

        <DishCard
            key={dish.name}
            name={dish['item-name']}
            src={dish.photo}
            profile={dish.profile}
            date={dish.createdAt.toDate().toLocaleDateString('en-IN')}
            likes={dish.likes.length}
            dislikes={dish.dislikes.length}
            price ={dish.price}
        />

    ))}

</div>
  )
}

export default Dishes