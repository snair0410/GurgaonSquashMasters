import React, {useState} from 'react'
import { useHttpClient } from '../hooks/http-hook'


const CreatePlayer = () => {

  const { sendRequest } = useHttpClient();

  const [urlPath, setUrlPath] = useState('')
  const [pname, setPname] = useState('')
  const [points, setPoints] = useState('')
  const [created, setCreated] = useState('')


  const handleFormSubmit = async (e) => {
    e.preventDefault()
    if(pname){
        try {
            const responseData = await sendRequest(
              'https://gsmbackend.herokuapp.com/addPlayer', 
              'POST',
              JSON.stringify({
                  urlPath,
                  pname,
                  points,
                  created,
              }),
              {
                  'Content-Type': 'application/json'
              }
            );
          } catch (err) {
            console.log(err)
          }   
    } 
  }

  return (
    <form onSubmit={handleFormSubmit}>  
    <div className='flex flex-col justify-center items-center mt-5 lg:h-4/5'>
      <div className='flex lg:flex-row flex-col justify-center items-center bg-white lg:p-5 p-3 lg:w-4/5 w-full'> 
        <div className='bg-secondaryColor p-3 flex flex-0.7 w-full '>
          <div className='flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420'>
             <input
                  type="text"
                  value={urlPath}
                  onChange={(e) => setUrlPath(e.target.value)}
                  placeholder="Please Enter URL Path to pic"
                  className='outline-none text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 p-2 '
                />
          </div>
        </div>
        <div className='flex flex-1 flex-col gap-6 lg:pl-5 mt-5 w-full'>
                <input
                  type="text"
                  value={pname}
                  onChange={(e) => setPname(e.target.value)}
                  placeholder="Please Enter Player Name"
                  className='outline-none text-2xl sm:text-3xl font-bold border-b-2 border-gray-200 p-2 '
                />
                <input
                  type="text"
                  value={points}
                  onChange={(e) => setPoints(e.target.value)}
                  placeholder="Please enter Points"
                  className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2 '
                />
                <input
                  type="text"
                  value={created}
                  onChange={(e) => setCreated(e.target.value)}
                  placeholder="Year Of Creation"
                  className='outline-none text-base sm:text-lg border-b-2 border-gray-200 p-2 '
                />
                <div className='flex flex-col'>
                  <div className='flex justify-end items-end mt-5 '>
                          <button type="submit" className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none"> 
                              Save Player
                          </button>
                  </div> 
                </div>
        </div>
      </div>
    </div>
    </form>
  )
}

export default CreatePlayer