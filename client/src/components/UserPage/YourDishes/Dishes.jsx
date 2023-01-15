import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { db } from '../../../firebase';
import DishCard from './DishCard';
// const dishes = [
//     {
//         name: "Paneer",
//         src: "/1.jpg",
//         profile: "/dpp.png",
//     },
//     {
//         name: "Chicken",
//         src: "/2.jpg",
//         profile: "/dpp.png",

//     },
//     {
//         name: "Bhindi",
//         src: "/3.jpg",
//         profile: "/dpp.png",

//     },
//     {
//         name: "Ghobhi",
//         src: "/4.jpg",
//         profile: "/dpp.png",

//     },
//     {
//         name: "Kadhi",
//         src: "/5.jpg",
//         profile: "/dpp.png",

//     },
//     {
//         name: "Bhujia",
//         src: "/6.jpg",
//         profile: "/dpp.png",

//     },
//     {
//         name: "Egg Curry",
//         src: "/7.jpg",
//         profile: "/dpp.png",

//     },
//     {
//         name: "Mushroom",
//         src: "/8.jpg",
//         profile: "/dpp.png",

//     },
//     {
//         name: "Fish",
//         src: "/9.jpg",
//         profile: "/dpp.png",

//     },
//     {
//         name: "Raita",
//         src: "/10.jpg",
//         profile: "/dpp.png",

//     },
//     {
//         name: "Biryani",
//         src: "/1.jpg",
//         profile: "/dpp.png",

//     },
// ];

function Dishes() {
    const [dishes, setDishes] = useState([]);

    useEffect(()=>{
        const getData = async()=>{
            
            const email = JSON.parse(localStorage.getItem('user')).email;
            console.log(email)
            const q = query(collection(db, "items"), where('sEmail', '==', email), orderBy('createdAt','desc'));
            await getDocs(q).then((response)=>{
                let data = response.docs.map((ele)=>(
                    {...ele.data()} 

                ))

                setDishes([...data]);
                console.log(dishes[0].createdAt.toDate().toLocaleDateString('en-IN'))
                console.log(dishes)

    
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
            likes={dish.likes}
            dislikes={dish.dislikes}
            price ={dish.price}
        />

    ))}

</div>
  )
}

export default Dishes