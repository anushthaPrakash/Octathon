import React from 'react'
import OrderCard from './OrderCard';
const orders = [
    {
        name: "Paneer",
        src: "/1.jpg",
        profile: "/dpp.png",
    },
    {
        name: "Chicken",
        src: "/2.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Bhindi",
        src: "/3.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Ghobhi",
        src: "/4.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Kadhi",
        src: "/5.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Bhujia",
        src: "/6.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Egg Curry",
        src: "/7.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Mushroom",
        src: "/8.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Fish",
        src: "/9.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Raita",
        src: "/10.jpg",
        profile: "/dpp.png",

    },
    {
        name: "Biryani",
        src: "/1.jpg",
        profile: "/dpp.png",

    },
];


function Orders() {
  return (
    <div className='flex-row justify-center  gap-4 mb-10 border-4 '>

    {orders.map((order) => (

        <OrderCard
            key={order.name}
            name={order.name}
            src={order.src}
            profile={order.profile}
        />




    ))}

</div>
  )
}

export default Orders