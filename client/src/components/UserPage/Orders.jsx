import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import { useEffect } from 'react';
import OrderCard from './OrderCard';
import { db } from '../../firebase';
// const orders = [
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


function Orders() {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        const getData = async()=>{
            
            const email = JSON.parse(localStorage.getItem('user')).email;
            console.log(email)
            const q = query(collection(db, "buyersandsellers"), where('BEmail', '==', email), orderBy('createdAt','desc'));
            await getDocs(q).then((response)=>{
                let data = response.docs.map((ele)=>(
                    {...ele.data()} 

                ))
                console.log(data);
                console.log(...data);

                setOrders([...data]);
                // console.log(orders[0].createdAt.toDate().toLocaleDateString('en-IN'))
                // console.log(orders)

    
            })
        }
        getData();

    }, [])
  return (
    <div className='flex-row justify-center  gap-4 mb-10 border-4 '>

    {orders.map((order) => (

        <OrderCard
            key={order['item-name'].name}
            name={order['item-name'].name}
            src={order['photo'].photo}
            profile={order.bPhoto}
            date={order.createdAt.toDate().toLocaleDateString('en-IN')}
            // likes={order.likes}  likes and dislikes from items collection
            // dislikes={order.likes}
            price ={order.Price}
            SEmail={order['SEmail'].email}

        />




    ))}

</div>
  )
}

export default Orders