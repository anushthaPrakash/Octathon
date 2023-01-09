import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function ContactUs() {
 const [email,SetEmail]=useState("");
 const [name,SetName]=useState("");
 const [message,SetMessage]=useState("");
//  console.log(name);
//  console.log(email);
//  console.log(message);
const navigate = useNavigate();
  function handleSubmit(){
    try{   
         window.location.href = `mailto:anushthaprakash@gmail.com?subject=${name}&body=Hi, my name is ${name}\n,${message} (${email})`;
        navigate('/success/Mail-Sent-Successfully')
        
}
    catch(err){
        console.log(err)
    }

    
  }

    return (
        <div className="text-gray-600 w-full body-font relative">
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-col text-center w-full mb-12">
                    <h1 className="sm:text-3xl text-2xl mt-7 font-bold title-font mb-4 text-[#3C6255]">Contact Us</h1>
                    <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-[#3C6255]">Feel Free to contact us.</p>
                </div>
                <form onSubmit={handleSubmit}>
                <div className="lg:w-1/2 md:w-2/3 mx-auto">
                    <div className="flex flex-wrap -m-2">
                    
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="name" className="leading-7 text-sm text-gray-600">Name</label>
                                    <input onChange={(event)=>{SetName(event.target.value)}} value={name} type="text" id="name" name="name" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#3C6255] focus:bg-white focus:ring-2 focus:ring-[#C5F0A4] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-1/2">
                                <div className="relative">
                                    <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                                    <input onChange={(event)=>{SetEmail(event.target.value)}} value={email} type="email" id="email" name="email" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#3C6255] focus:bg-white focus:ring-2 focus:ring-[#C5F0A4] text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-gray-600">Message</label>
                                    <textarea onChange={(event)=>{SetMessage(event.target.value)}} value={message} id="message" name="message" className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-[#3C6255] focus:bg-white focus:ring-2 focus:ring-[#C5F0A4] h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button  type='submit' className="flex mx-auto text-white bg-[#3C6255]  border-0 py-2 px-8 focus:outline-none hover:bg-[#1b5d45] rounded text-lg">Submit</button>
                            </div>
                       
                        <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                
                            <p className="leading-normal my-5">IIT Ropar Permanent Campus
                                <br />Rupnagar , Punjab
                            </p>
                        </div>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}

export default ContactUs