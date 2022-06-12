import React, {useState, useEffect} from 'react'
import { useHttpClient } from '../hooks/http-hook'
import {  useNavigate } from 'react-router-dom'
import { AiOutlineLogout } from 'react-icons/ai';

const CMatch = () => {

  const [cMatch, setCMatch] = useState(null)
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
          'https://gsmbackend.herokuapp.com/admin/challengeMatch', 
          'GET',
        );
        setCMatch(responseData)
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
                  Challenge Matches 
               </h1>
    </div>  
   
<div className='flex flex-col justify-center items-center mt-5 mb-5'>
    <h1 className="text-1xl font-bold break-words mt-10 ml-3">
                  Challenge Match Record
    </h1>
</div>
{ cMatch && (
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
  {cMatch.challengeData.map((match) => (
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

export default CMatch