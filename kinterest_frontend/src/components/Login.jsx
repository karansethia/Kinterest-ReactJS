import React from 'react'
import { useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import { GoogleLogin } from '@react-oauth/google';
import kintLogo from '../assets/kint-logo.png'
import backVid from '../assets/backVid.mp4'
import jwtDecode from 'jwt-decode';

const Login = () => {
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video src={backVid} 
        type='video/mp4' loop controls={false} muted autoPlay className='w-full h-full object-cover'/>
      </div>
      <div className="absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay">
        <div className="p-5">
          <img src={kintLogo} width='300px' alt="logo" />
        </div>
        <div className="shadow-2xl">
        <GoogleLogin
          onSuccess={credentialResponse => {
            console.log(credentialResponse);
            console.log(credentialResponse.credential);
            var decoded = jwtDecode(credentialResponse.credential);
            console.log(decoded);
            localStorage.setItem('user',JSON.stringify(decoded))
            let {sub, name, picture} = decoded
            // const doc = {
            //   _id: 
            // }
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
        </div>
      </div>
    </div>
  )
}

export default Login