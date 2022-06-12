import React, {useState} from 'react'
import { useHttpClient } from '../hooks/http-hook'
import { categories } from '../utils/data'

const EnterMatch = () => {

  const { sendRequest } = useHttpClient();
  const [playerOneName, setPlayerOneName] = useState('')
  const [playerTwoName, setPlayerTwoName] = useState('')
  const [winningPlayer, setWinningPlayer] = useState('')
  const [losingPlayer, setLosingPlayer] = useState('')
  const [scoreline, setScoreline] = useState('')
  const [tournamentName, setTournamentName] = useState('')  

  const handleFormSubmit = async (e) => {
    e.preventDefault()
        try {
            const responseData = await sendRequest(
              'https://gsmbackend.herokuapp.com/admin/addMatch', 
              'POST',
              JSON.stringify({
                  playerOneName,
                  playerTwoName,
                  winningPlayer,
                  losingPlayer,
                  scoreline,
                  tournamentName,
              }),
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
    <div className='flex flex-col justify-center items-center mt-5 lg:h-4/5'>
      <div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full'> 
        <div className='flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full'>
                <input
                  type="text"
                  value={playerOneName}
                  onChange={(e) => setPlayerOneName(e.target.value)}
                  placeholder="Please Enter Player One Name"
                  className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2'
                />
                <input
                  type="text"
                  value={playerTwoName}
                  onChange={(e) => setPlayerTwoName(e.target.value)}
                  placeholder="Please enter Player Two Name"
                  className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2 '
                />
                <input
                  type="text"
                  value={winningPlayer}
                  onChange={(e) => setWinningPlayer(e.target.value)}
                  placeholder="The Winning Player"
                  className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2 '
                />
                <input
                  type="text"
                  value={losingPlayer}
                  onChange={(e) => setLosingPlayer(e.target.value)}
                  placeholder="The Losing Player"
                  className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2 '
                />
                <input
                  type="text"
                  value={scoreline}
                  onChange={(e) => setScoreline(e.target.value)}
                  placeholder="ScoreLine"
                  className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2 '
                />
                <div>
                    <p className='mb-2 font-semibold text-lg sm:text-xl'>
                    Select Tournament
                    </p>
                    <select onChange={(e) => setTournamentName(e.target.value)}
                      className='outline-none w-4/5 text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer'
                    >
                      <option value="other" className='bg-white'> Select Tournament</option>
                        {categories.map((category) => (
                          <option className='text-base border-0 outline-none capitalize bg-white text-black' value={category.name}> 
                            {category.name}
                          </option>
                        ))}
                    </select>
                  </div>
                <div className='flex flex-col'>
                  <div className='flex justify-end items-end mt-5 '>
                          <button type="submit" className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none"> 
                              Enter Score
                          </button>
                  </div> 
                </div>
        </div>
      </div>
    </div>
    </form>
  )
}

export default EnterMatch