import React from 'react'
import { Routes, Route} from 'react-router-dom'

import Feed from '../components/Feed'
import PlayerDetail from '../components/PlayerDetail'

const Pins = ({ user }) => {

  return (
    <div className='px-2 md:px-5'>
      <div className='h-full flex-row'>      
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/player-detail/:pid' element={<PlayerDetail />} />
        </Routes>
      </div> 
    </div>
  )
}

export default Pins