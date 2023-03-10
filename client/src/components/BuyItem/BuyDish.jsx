import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { db } from '../../firebase';
import MealCard from './MealCard';

function BuyDish() {
      const parms=useParams()
  const {dish}=parms;
    const [dishes,setDishes]= useState([]);
    const getData  = async()=>{
    await getDocs(collection(db,'items')).then((response)=>{
        let data = response.docs.map((ele)=>(
            {...ele.data(), id:ele.id} 
            ))
            const foodNameSet = new Set();
            data.forEach(element => {
                if( element['item-name'] == dish){
                    foodNameSet.add(element);
                }
            });
            setDishes([...foodNameSet]);
            console.log(foodNameSet)
            

    })
    }
    // console.log(dish)
    useEffect(() => {

        getData();

    }, [])

    return (

        <div className='flex-row justify-center  gap-4 mb-10  '>

            {dishes.map((dish,i) => (

                <MealCard
                    key={i}
                    name={dish['item-name']}
                    src={dish.photo}
                    email={dish['sEmail']}
                    dateSelling={dish.createdAt.toDate().toLocaleString('en-IN')}
                    price={dish["price"]}
                    SName={dish['sName']}
                    Likes={dish['likes'].length}
                    sPhoto ={dish.sPhoto}
                    photo={dish.photo}
                    id={dish.id}
                />

            ))}

        </div>
       
    )
}
//  {/* dish['createdAt'].date.toLocaleString() */}
export default BuyDish