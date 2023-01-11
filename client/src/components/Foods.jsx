import React from 'react'
import FoodCard from './FoodCard';
import {NavLink} from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import {getDocs} from 'firebase/firestore'
import { collection } from 'firebase/firestore';
import { db } from '../firebase';

function Foods() {
    const [foods, setFoods] = useState([]);
        
    const getData = async()=>{
        await getDocs(collection(db, 'items')).then((response)=>{
            let data = response.docs.map((ele)=>(
                {...ele.data()} 
            ))
            const foodSet = new Set(); // that stores the item obj
            const foodNameSet = new Set(); // that stores the item name

            data.forEach(element => {
                if(!foodNameSet.has(element['item-name']) && element['item-name']!==""){
                    foodNameSet.add(element['item-name']);
                    foodSet.add(element)
                }
            });

            setFoods([...foodSet]);

        })
    }

    useEffect(() => {

        getData();

    }, [])
    return (

        
            <div className='grid  grid-cols-3 md:grid-cols-4 gap-4   '>
                {foods.map((food,i) => (
                    <NavLink  to="/buy">
                   
                    <FoodCard
                        key={i}
                        name={food['item-name']}
                        src={food.photo}
                    />
                    </NavLink>
                ))}
            </div>
        
    )
}

export default Foods;