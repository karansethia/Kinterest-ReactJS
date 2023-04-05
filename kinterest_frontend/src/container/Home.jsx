//hooks and libraries
import React, { useState, useRef, useEffect } from 'react'
import { Link, Route, Routes } from 'react-router-dom'

//assets
import { hiMenu } from 'react-icons/hi'
import { AiFillCircleClose } from 'react-icons/ai'
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
    const query = userQuery(userInfo?.googleId);

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
        <hiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(false)}/>
        <Link to='/'>
          <img src={mylogo} alt="" className='w-28'/>
        </Link>    
        <Link to={`/user-profile/${user?._id}`}>
          <img src={user?.sub} alt="" className='w-28'/>
        </Link>    
      </div>
    </div>
  )
}

export default Home