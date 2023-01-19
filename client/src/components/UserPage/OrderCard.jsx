import { arrayRemove, arrayUnion, doc, getDoc, updateDoc } from 'firebase/firestore';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { db } from '../../firebase';
import { useUserAuth } from '../contexts/userAuthContext';
import {AiOutlineLike} from 'react-icons/ai';

function OrderCard({ name, src, profile,date,price,SEmail, itemId }) {

	const {user}= useUserAuth();
	const [likes, setLikes]=useState(0);
	const [btnColor, setbtnColor]=useState('bg-white');
	
	useEffect(()=>{
		const itemRef = doc(db, "items", itemId);
		
		getDoc(itemRef).then(async(snap)=>{
			const data = snap.data();
			setLikes(data?.likes?.length);
			if(data?.likes?.includes(user.uid)){
				setbtnColor('bg-green-500');
				setLikes(data?.likes?.length);
			}else{
				setbtnColor('bg-white');
			}

		})

	}, [])

	const handleLikes = async()=>{

		try{
			const itemRef = doc(db, 'items', itemId);
			getDoc(itemRef).then(async(snap)=>{
				const data = snap?.data();
				if(data?.likes?.includes(user.uid)){
					await updateDoc(itemRef, {
						likes: arrayRemove(user.uid)
					})
					setbtnColor('bg-white');
					setLikes(likes-1);
				}else{
					await updateDoc(itemRef, {
						likes: arrayUnion(user.uid)
					})
					setbtnColor('bg-green-500');
					setLikes(likes+1);
				}
			})
		}catch(err){
			console.log(err)
		}
	}


  return (
    // <div class='flex items-center justify-center min-h-screen w-max from-white via-[#C5F0A4]  to-[#3C6255] bg-gradient-to-br'>
	<div class="p-4  items-center justify-center  rounded-xl group sm:flex space-x-6 bg-white bg-opacity-50 shadow-xl hover:rounded-2xl">
		<img  class="mx-auto w-full block  h-40 rounded-lg"  alt="art cover" loading="lazy" src={src} />
		<div class="sm:w-8/12 pl-0 p-5">
			<div class="space-y-2">
				<div class="flex flex-row space-x-1 justify-between">
					<h4 class="text-md font-semibold text-cyan-900 text-justify">
						{name}
					</h4>
					<p className='text-gray-400'> ₹{price}</p>
				</div>
				<div class="flex items-center space-x-4 justify-between">
					<div class="flex gap-3 space-y-1">
						<img  src={profile}  class="rounded-full h-8 w-8" />
						<span class="text-sm">{SEmail} </span>
					</div>
				</div>
				<div class="flex items-center space-x-4 lg:space-x-32 justify-between">
					<div class="text-grey-500 flex flex-row space-x-1  my-4">
						<svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
						<p class="text-xs">{date}</p>
					</div>
					<div class="flex flex-row space-x-1">
						<div onClick={handleLikes}
							class={`shadow-lg shadow- text-white cursor-pointer px-3 text-center justify-center items-center py-1 rounded-xl flex space-x-2 flex-row ${btnColor}`}>
							<AiOutlineLike className='text-black'/>
							<span className='text-black'>{likes}</span>
							
							
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
// </div>

  )
}

export default OrderCard