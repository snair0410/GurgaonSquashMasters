import React, { useState} from 'react'

import { useStateContext } from "../context/authContext";


const Navbar = () => {

  
    const { name, imgUrl} = useStateContext()

  return (
    <>
    <div className='flex gap-2 md:gap-5 w-full mt-5 pb-7'>
      <div className='flex gap-3'>
        <p style={{color: 'black'}}> Total Number of GSM Matches - 1491</p>
        <p style={{color: 'black'}}> Total Number of Unique Players - 181</p>
        <p style={{color: 'black'}}> Community Strength - 214</p>
      </div>
    </div>
 </>
  )
}

export default Navbar