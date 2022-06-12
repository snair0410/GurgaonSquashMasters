import React, {useState, useEffect} from 'react'
import Pin from './Pin'
import Spinner from './Spinner'
import { useHttpClient } from '../hooks/http-hook'
import Navbar from './Navbar'

const Feed = () => {

  const { sendRequest } = useHttpClient();
  const [loading, setLoading] = useState(false)
  const [pins, setPins] = useState(null)

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          'https://gsmbackend.herokuapp.com/admin/getRanks', 
          'GET',
        );
        setPins(responseData)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }  
    }
      fetchData()
  }, [])
  

  if (loading) return <Spinner message='GSM Rankings Coming Up' />

  return (

    <div>
      { pins && (
      <>
       <div className='bg-gray-50'>
         <Navbar />
       </div>
      <Pin pins={pins} /> </> )}
    </div>
  )
}

export default Feed