import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import React, { useState } from 'react'
import { useEffect } from 'react';
import OrderCard from './OrderCard';
import { db } from '../../firebase';

function Orders() {
    const [orders, setOrders] = useState([]);
    useEffect(()=>{
        const getData = async()=>{
            
            const email = JSON.parse(localStorage.getItem('user')).email;
            console.log(email)
            const q = query(collection(db, "buyersandsellers"), where('BEmail', '==', email), orderBy('createdAt','desc'));
            await getDocs(q).then((response)=>{
                let data = response.docs.map((ele)=>(
                    // console.log(ele.id)
                    {...ele.data(), id:ele.id}

                ))

                setOrders([...data]);
            })
        }
        getData();

    }, [])
  return (
    <div className='flex-row justify-center gap-4 mb-10 border-4 '>
        {
                    orders.map((order)=>(
                        <OrderCard
                        key={order['item-name']}
                        name={order['item-name']}
                        src={order['photo']}
                        profile={order.bPhoto}
                        date={order.createdAt.toDate().toLocaleDateString('en-IN')}
                        price ={order.Price}
                        SEmail={order['SEmail']}
                        itemId ={order.itemId}
                        />
                    ))
        }
    
    </div>
  )
}

export default Orders
