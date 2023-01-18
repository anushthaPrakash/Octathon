import React from 'react'
import FoodCard from './FoodCard';
import {NavLink} from "react-router-dom"
import { useState } from 'react';
import { useEffect } from 'react';
import {getDocs, orderBy} from 'firebase/firestore'
import { collection } from 'firebase/firestore';
import { db } from '../firebase';

function Foods() {
    const [foods, setFoods] = useState([]);
        
    useEffect(() => {
        const getData = async()=>{
            await getDocs(collection(db, 'items'), orderBy('createdAt','desc')).then((response)=>{
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

        getData();

    }, [])

    return (

        
            <div className='grid  grid-cols-3 md:grid-cols-4 gap-4   '>
                {foods.map((food,i) => (
                    <NavLink key={i} to={{pathname: "/buy/"+ food['item-name']}}>
                   
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