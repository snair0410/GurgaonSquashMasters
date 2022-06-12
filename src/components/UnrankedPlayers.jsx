import React from 'react'
import { unranked } from '../utils/unrankedplayers'
import {  useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai';

const UnrankedPlayers = () => {
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.clear()
    navigate('/login')
}
  return (
    <div className='flex flex-col justify-center items-center mt-10'>
      <div className="left-1 relative top-0 z-1 right-0 p-2">
          <button
                type="button"
                className="bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                onClick={(e) => handleSignOut(e)}
          >
            <AiOutlineLogout color="red" fontSize={21} />
        </button>
       </div> 
      <div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full'> 
        <div className='flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full'>
                     {unranked.map((player) => (
                          <h1 className='text-base border-0 outline-none capitalize bg-white text-black' value={player.name}> 
                            {player.name}
                          </h1>
                        ))}
        </div>
      </div>
    </div>
  )
}

export default UnrankedPlayers