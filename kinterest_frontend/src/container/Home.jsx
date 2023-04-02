import React, { useState, useRef, useEffect } from 'react'
import { hiMenu } from 'react-icons/hi'
import { AiFillCircleClose } from 'react-icons/ai'
import { Link, Route, Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'

import { Sidebar, UserProfile } from '../components'
import { client } from '../client'
import logo from '../assets/kint-logo'

import Pins from './Pins'

const Home = () => {
  return (
    <>This is home</>
  )
}

export default Home