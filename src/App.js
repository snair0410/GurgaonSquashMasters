import React, {useEffect} from 'react'
import { Routes, Route , useNavigate} from 'react-router-dom'
import Login from './components/Login'
import Home from './container/Home'
import { fetchUser } from './utils/fetchUser'
import AddPlayer from './container/addPlayer'
import EnterScore from './container/enterscore'
import UpdateRanking from './container/updateRanking'
import UnRankedPlayers from './container/unrankedPlayers'
import GsmEdition1 from './container/gsmEdition1'
import GsmEdition2 from './container/gsmEdition2'
import GsmEdition3 from './container/gsmEdition3'
import GsmEdition4 from './container/gsmEdition4'
import GsmEdition5 from './container/gsmEdition5'
import ChallengeMatch from './container/challengeMatch'





const App = () => {

  const navigate = useNavigate()

  useEffect(() => {
    const user = fetchUser()
    if(!user) navigate ('/login')
  }, [])

  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
      <Route path='/addPlayer' element={<AddPlayer />} />
      <Route path='/entermatch' element={<EnterScore />} />
      <Route path='/updateRanking' element={<UpdateRanking />} />
      <Route path='/unrankedPlayers' element={<UnRankedPlayers />} />
      <Route path='/gsmedition1' element={<GsmEdition1 />} />
      <Route path='/gsmedition2' element={<GsmEdition2 />} />
      <Route path='/gsmedition3' element={<GsmEdition3 />} />
      <Route path='/gsmedition4' element={<GsmEdition4 />} />
      <Route path='/gsmedition5' element={<GsmEdition5 />} />
      <Route path='/challengematch' element={<ChallengeMatch />} />
    </Routes>
  )
}

export default App
