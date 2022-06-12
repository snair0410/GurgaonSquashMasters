import React from 'react'
import {Rings} from 'react-loader-spinner'

const Spinner = () => {
  return (
    <div className='flex flex-col justify-center items-center w-full h-full'>
        <Rings type="Circles" color="#00BFFF" height={50} width={200} className="m-5" />
    </div>
  )
}

export default Spinner