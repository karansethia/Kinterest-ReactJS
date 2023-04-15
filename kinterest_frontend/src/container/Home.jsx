//hooks and libraries
import React, { useState, useRef, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

//assets
import sideBar from '../assets/menu.png';
import { AiFillCloseCircle } from 'react-icons/ai'
import mylogo from '../assets/kint-logo.png'

//components
import { Sidebar, UserProfile } from '../components'
import { client } from '../client'
import Pins from './Pins'
import { userQuery } from '../utils/data'

const Home = () => {
  const [ToggleSidebar, setToggleSidebar] = useState(false)
  const [user, setUser] = useState(null)

  
  const userInfo = localStorage.getItem('user')  !== undefined ? JSON.parse(localStorage.getItem('user')) : localStorage.clear()
  useEffect(() => {
    const query = userQuery(userInfo?.sub);
    console.log(userInfo?.sub);
    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);
  

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
      <div className="hidden md:flex h-screen flex-initial">
        <Sidebar />
      </div>
      <div className="flex md:hidden flex-row">
        <img src={sideBar} className="cursor-pointer w-8 h-8" alt='user' onClick={() => setToggleSidebar(true)}/>
        <Link to='/'>
          <img src={mylogo} alt="" className='w-28'/>
        </Link>    
        <Link to={`/user-profile/${user?._id}`}>
          <img src={userInfo?.picture} alt="" className='w-28'/>
        </Link>    
      </div>
      {ToggleSidebar && (
        <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
          <div className='absolute w-full flex justify-end items-center p-2'>
            <AiFillCloseCircle font-size={30} className='cursor-pointer' onClick={()=>{setToggleSidebar(false)}} />
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  )
}

export default Home