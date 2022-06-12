import React from 'react'
import { useHttpClient } from '../hooks/http-hook'


const UpdatePlayerRanking = () => {

  const { sendRequest } = useHttpClient();


  const handleFormSubmit = async (e) => {
    e.preventDefault()
        try {
            const responseData = await sendRequest(
              'https://gsmbackend.herokuapp.com/updateRanking', 
              'POST',
              {
                  'Content-Type': 'application/json'
              }
            );
          } catch (err) {
            console.log(err)
          }   
    
  }

  return (
    <form onSubmit={handleFormSubmit}>   
        <div className='flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full'>
                <div className='flex flex-col'>
                  <div className='flex justify-end items-end mt-5 '>
                          <button type="submit" className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none"> 
                              Update Ranking
                          </button>
                  </div> 
                </div>
        </div>
      
    </form>
  )
}

export default UpdatePlayerRanking