import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import { RiHomeFill } from 'react-icons/ri'
import logo from '../assets/gsmlogo.jpeg'
import { categories } from '../utils/data'
import { useStateContext } from "../context/authContext";

const isNotActiveStyle = 'flex items-center px-5 gap-3 text-gray-500 hover:text-black transition-all duration-200 ease-in-out capitalize'
const isActiveStyle = 'flex items-center px-5 gap-3 font-extrabold border-r-2 border-black transition-all duration-200 ease-in-out capitalize'


const Sidebar = ({ closeToggle }) => {

const { name, imgUrl } = useStateContext()
const handleCloseSideBar = () => {
    if(closeToggle) closeToggle(false)
  }


  return (
    <div className='flex flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar'>
        <div className='flex flex-col'>
            <Link
                to='/'
                className='flex px-5 gap-2 my-6 pt-1 w-190 itmems-center'
                onClick={handleCloseSideBar}
            >
                <img src={logo} alt="logo" className='w-full' />
            </Link>
            <div className='flex flex-col gap-5'>
            <NavLink 
                to='/'
                className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                onClick={handleCloseSideBar}
            >
                <RiHomeFill />
                Home
            </NavLink>

            <NavLink
                 to={`/gsmedition1`}
                 className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                 onClick={handleCloseSideBar}
                 >
                   GSM Edition 1
              </NavLink>
            <NavLink
                 to={`/gsmedition2`}
                 className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                 onClick={handleCloseSideBar}
                 >
                   GSM Edition 2
              </NavLink>
            <NavLink
                 to={`/gsmedition3`}
                 className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                 onClick={handleCloseSideBar}
                 >
                   GSM Edition 3
              </NavLink>
            <NavLink
                 to={`/gsmedition4`}
                 className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                 onClick={handleCloseSideBar}
                 >
                   GSM Edition 4
              </NavLink>
            <NavLink
                 to={`/gsmedition5`}
                 className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                 onClick={handleCloseSideBar}
                 >
                   GSM Edition 5
              </NavLink>
            <NavLink
                 to={`/challengematch`}
                 className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                 onClick={handleCloseSideBar}
                 >
                   Challenge Matches
              </NavLink>
             <NavLink
                 to={`/unrankedPlayers`}
                 className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                 onClick={handleCloseSideBar}
               //   key={category.name}
                 >
                   {/* <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" /> */}
                   Unranked Players
               </NavLink>
            {name === 'Sandeep Nair' && (
                 <NavLink
                 to={`/entermatch`}
                 className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                 onClick={handleCloseSideBar}
               //   key={category.name}
                 >
                   {/* <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" /> */}
                   Enter Match Score
               </NavLink>
            )}
            {name === 'Sandeep Nair' && (
                 <NavLink
                 to={`/addPlayer`}  
                 className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                 onClick={handleCloseSideBar}
               //   key={category.name}
                 >
                   {/* <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" /> */}
                   Add Player
               </NavLink>
            )} 
             {name === 'Sandeep Nair' && (
                 <NavLink
                 to={`/updateRanking`}  
                 className={({isActive}) => isActive ? isActiveStyle : isNotActiveStyle}
                 onClick={handleCloseSideBar}
               //   key={category.name}
                 >
                   {/* <img src={category.image} className="w-8 h-8 rounded-full shadow-sm" /> */}
                   Update Ranking
               </NavLink>
            )}                
            </div>
        </div>
        <div className="flex my-5 mb-3 gap-2 p-2 items-center bg-white rounded-lg shadow-lg mx-3" onClick={handleCloseSideBar}>
          <img src={imgUrl} referrerpolicy="no-referrer" className='w-10 h-10 rounded-full' alt='user-profile' />
          <p>{name}</p>
        </div>      
    </div>
  )
}

export default Sidebar