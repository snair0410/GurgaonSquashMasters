import React, {useState, useEffect} from 'react'
import { useHttpClient } from '../hooks/http-hook'
import {  useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai';

const GSMEdition4 = () => {

  const [edition4Data, setEdition4Data] = useState(null)
  const { sendRequest } = useHttpClient();
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSignOut = () => {
    localStorage.clear()
    navigate('/login')
}


  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          'https://gsmbackend.herokuapp.com/admin/getEdition4', 
          'GET',
        );
        setEdition4Data(responseData)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }   
    }
      fetchData()
  }, [])



  return (
    <>
    <div className='flex flex-col justify-center items-center mt-5 mb-5'>
    <div className="left-1 relative top-0 z-1 right-0 p-2">
          <button
                type="button"
                className="bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                onClick={(e) => handleSignOut(e)}
          >
            <AiOutlineLogout color="red" fontSize={21} />
        </button>
        </div>
              <h1 className="text-1xl font-bold break-words mt-10 ml-3">
                  GSM Edition 4
               </h1>
        <div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full'> 
          <div className='bg-secondaryColor p-3 flex flex-0.7 w-full '>
            <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420'>
              <div className='relative h-full'>
                <img src='https://drive.google.com/uc?export=view&id=164Ybd19MR59W4aysrv9v7FtVYQmoVxqw' alt="uploaded-pic" className='h-full w-full' />  
              </div>
            </div>
          </div>  
        </div>
        <h1 className="text-1xl font-bold break-words mt-10 ml-3">
                  Winners : Racqueteers
               </h1>
    </div>  
    <div className='flex flex-col justify-center items-center mt-5 '>
    <div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full'> 
      <div className='bg-secondaryColor p-3 flex flex-0.7 w-full '>
        <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420'>
          <div className='relative h-full'>
            <img src='https://drive.google.com/uc?export=view&id=1T3doEtH4NNq6135XgMr8FQBC16PP6CcB' alt="uploaded-pic" className='h-full w-full' />  
          </div>
        </div>
      </div>  
    </div>
    <h1 className="text-1xl font-bold break-words mt-10 ml-3">
                  Runner-Up : Lords Of The Ring
    </h1>
</div> 
<div className='flex flex-col justify-center items-center mt-5 '>
    <div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full'> 
      <div className='bg-secondaryColor p-3 flex flex-0.7 w-full '>
        <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420'>
          <div className='relative h-full'>
            <img src='https://drive.google.com/uc?export=view&id=1IRcKb3XoOuQ-4WqppqAYvvIT9DhBUDGm' alt="uploaded-pic" className='h-full w-full' />  
            
          </div>
        </div>
      </div>  
    </div>
    <h1 className="text-1xl font-bold break-words mt-10 ml-3">
                  3rd Place : Unsquashables
    </h1>
</div> 
<div className='flex flex-col justify-center items-center mt-5 mb-5'>
    <h1 className="text-1xl font-bold break-words mt-10 ml-3">
                  Edition 4 Match Record
    </h1>
</div>
{ edition4Data && (
<div className='flex flex-col justify-center items-center mt-5 mb-5'>
<table class="table-auto">
  <thead>
    <tr>
      <th>Player 1</th>
      <th>Player 2</th>
      <th>Winning Player</th>
      <th>Losing Player</th>
      <th>Score Line</th>
    </tr>
  </thead>
  <tbody>
  {edition4Data.editionData4.map((match) => (
    <tr>
    <td>{match.playerOneName}</td>
    <td>{match.playerTwoName}</td>
    <td>{match.winningPlayer}</td>
    <td>{match.losingPlayer}</td>
    <td>{match.scoreLine}</td>
  </tr>                      
  ))}
  </tbody>
</table>
</div>
)}
</>
  )
}

export default GSMEdition4