import React, {useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode'
import { useStateContext } from "../context/authContext";

const Login = () => {

const { login } = useStateContext()
const navigate = useNavigate()

const handleCallbackResponse = (response) => {
    var userObject = jwt_decode(response.credential)
    login(userObject.name, userObject.picture)
    navigate('/')
}

useEffect(() => {
  /* global google */
    window.google.accounts.id.initialize({
        client_id: '146974607134-178gg4r7svnehdst4fpede8hhjr0remh.apps.googleusercontent.com',
        callback: handleCallbackResponse
    }) 

    window.google.accounts.id.renderButton(
        document.getElementById("signInDiv"),
        { theme: "outline", size: "large" }
    )

}, [])



  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <img
              className=" w-full h-full 2xl:h-510 shadow-lg object-cover"
              src="https://drive.google.com/uc?export=view&id=1ZshDjiCRhEQsrbX1pOVnq4zDn4US-NYD"
              alt="user-pic"
            />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='shadow-2xl left-10'>
            <div id='signInDiv'></div>
          </div>
        </div>
      </div>
    </div>


    )
}

export default Login