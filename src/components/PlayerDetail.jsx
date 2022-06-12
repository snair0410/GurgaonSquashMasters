import React,{ useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Spinner from './Spinner'
import { useHttpClient } from '../hooks/http-hook'


const PlayerDetail = () => {
  
  const { pid } = useParams();
  const { sendRequest } = useHttpClient();
  const [loading, setLoading] = useState(false)
  const [pins, setPins] = useState(null)


  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      try {
        const responseData = await sendRequest(
          'https://gsmbackend.herokuapp.com/admin/getPlayer', 
          'POST',
          JSON.stringify({
              pid,
          }),
          {
              'Content-Type': 'application/json'
          }
        );
        setPins(responseData)
        setLoading(false)
      } catch (err) {
        console.log(err)
      }   
    }
      fetchData()
  }, [pid])


  if (!pins) {
    return (
      <Spinner message="Showing pin" />
    );
  }


  return (
    <>
      {pins && (
        <div className="flex xl:flex-row flex-col m-auto bg-white" style={{ maxWidth: '1500px', maxHeight: '120px', borderRadius: '32px' }}>
          <div className="flex justify-center items-center md:items-start flex-initial">
            <img
              className="rounded-t-3xl rounded-b-lg"
              src={pins.playerData[0].memberimageurl}
              alt="user-post"
            />
          </div>
          <div className="w-full p-5 flex-1 xl:min-w-620">
            <div>
              <h1 className="text-4xl font-bold break-words mt-3">
                {pins.playerData[0].playername}
              </h1>
              <h1 className="text-3xl font-bold break-words mt-3">
                Rank : {pins.playerData[0].rank}
              </h1>
              <h1 className="text-3xl font-bold break-words mt-3">
                MemberSince : {pins.playerData[0].membersince}
              </h1>
              <h1 className="text-1xl font-bold break-words mt-3">
                Total Tournament Matches Played : {pins.playerData[0].totaltournamentmatchesplayed}
              </h1>
              <h1 className="text-1xl font-bold break-words mt-3">
                Total Challenge Matches Played : {pins.playerData[0].totalchallengematchesplayed}
              </h1>
              <h1 className="text-1xl font-bold break-words mt-3">
                Total GSM Matches : {pins.playerData[0].totalmatchesplayed}
              </h1>
              <h1 className="text-1xl font-bold break-words mt-3">
                Total Matches Won : {pins.playerData[0].totalmatcheswon}
              </h1>
              <h1 className="text-1xl font-bold break-words mt-3">
                Total Matches Lost : {pins.playerData[0].totalmatcheslost}
              </h1>
              <h1 className="text-1xl font-bold break-words mt-3">
                Win % : {pins.playerData[0].winpercentage}
              </h1>
              <h1 className="text-1xl font-bold break-words mt-3">
                Player Difficulty Rating(PDR) : {pins.playerData[0].playerfdr}
              </h1>
              <h1 className="text-1xl font-bold break-words mt-3">
                Total Points Earned : {pins.playerData[0].totalpoints}
              </h1>
              <h1 className="text-1xl font-bold break-words mt-3">
                Total Weighted Points : {pins.playerData[0].totalweightedpoints}
              </h1>
            </div>
          </div>
        </div>
      )}
      
    </>
  );
}

export default PlayerDetail