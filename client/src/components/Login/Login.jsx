import React from 'react'
import { useEffect } from 'react';
import {AiFillGoogleCircle} from 'react-icons/ai';
// import { signInWithGoogle } from '../../firebase';
import { db } from '../../firebase';
import { collection, getDocs } from "firebase/firestore"; 
import { useUserAuth } from '../contexts/userAuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {


  const navigate = useNavigate();
  const {googleSignIn} = useUserAuth();
  const {user} = useUserAuth();

  const handleLogin = async(e)=>{
    e.preventDefault();
    try{
      googleSignIn().then((result)=>{
        console.log("RESULT IS ", result)
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL
        localStorage.setItem("user", JSON.stringify({name, email, profilePic}));
        navigate('/');
      });
      console.log("USER ", user);

    }catch(err){
      console.log(err)
    }

  }

  return (
    <section className="h-screen bg-[#FAF8F1]">
        <div className="px-6 h-full text-gray-800">
          <div className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
            <div className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0 ml-auto">
              <img src="/logo.png" className="w-full" alt="Sample image" />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
              <form>
                <div className="flex flex-row items-center justify-center lg:justify-start ml-10">
                  <p className="text-lg mb-0 mr-4 text-[#54B435]">Sign in with Google</p>
                  
                  <button onClick={handleLogin} type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className="inline-block p-3 bg-[#54B435] text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-[#82CD47]hover:shadow-lg focus:bg-[#82CD47] focus:shadow-lg focus:outline-none focus:ring-0 active:bg-[#379237]  active:shadow-lg transition duration-150 ease-in-out mx-1" href="http://localhost:3000/api/auth">
                    {/* Twitter */}
                    <AiFillGoogleCircle className='w-4 h-4'/>
                  </button>
                </div>
              
              </form>
            </div>
          </div>
        </div>
    </section>
  )
}

export default Login