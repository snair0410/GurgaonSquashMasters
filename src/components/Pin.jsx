import React, {useState, useEffect} from 'react';
import { useStateContext } from '../context/authContext';
import {  IoMdSearch } from 'react-icons/io'
import Card from './Card';
import { AiOutlineLogout } from 'react-icons/ai';
import {  useNavigate } from 'react-router-dom'




const Pin = ({ pins }) => {

    const [filteredData, setFilteredData] = useState([])
    const [searchValue, setSearchValue] = useState('')
    const { name, imgUrl } = useStateContext()
    const navigate = useNavigate()


    const handleSignOut = () => {
        localStorage.clear()
        navigate('/login')
    }
  

    const handleFilter = (event) => {
        setSearchValue(event.target.value.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' '))
        const newFilter = pins.rankingData.filter((value) => {
            return value.playername.includes(searchValue)
        })
            setFilteredData(newFilter)
        
    }

    useEffect(() => {
     if(searchValue === ""){
            setFilteredData([])
        } 
        
    }, [searchValue])
    

    return (
        <>
        <div className='flex gap-2 md:gap-5 w-full mt-5 pb-7' >
             <div className='flex justify-start items-center w-full px-2 rounded-md bg-white border-none outline-none focus-within:shadow-sm'>
                    <IoMdSearch fontSize={21} className="ml-1" />
                        <input
                            type="text"
                            onChange={handleFilter}
                            placeholder="Search for full Player Name eg) Sandeep Nair"
                            value={searchValue}
                            className="p-2 w-full bg-white outline-none" />
            </div>
            <div className="relative top-0 z-1 right-0 p-2">
          <button
                type="button"
                className=" bg-white p-2 rounded-full cursor-pointer outline-none shadow-md"
                onClick={(e) => handleSignOut(e)}
          >
            <AiOutlineLogout color="red" fontSize={21} />
        </button>
        </div>
        </div>
        { filteredData.length === 0 && (
            <div className="container mx-auto sm:centre space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
                {pins.rankingData.map((item) => (
                    <Card imgUrl={item.memberimageurl} title={item.playername} body={item.rank} points={item.totalweightedpoints} pid={item._id} />
                ))}
            </div>
        )}
        {filteredData.length !== 0 && (
         <div className="container mx-auto sm:centre space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
            {filteredData.map((item) => (
                <Card imgUrl={item.memberimageurl} title={item.playername} body={item.rank} points={item.totalweightedpoints} pid={item._id} />
            ))}
         </div>   
        )}
        </> 
        )
}

export default Pin;