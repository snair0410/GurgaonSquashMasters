import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import logo from '../assets/gsmlogo.jpeg'
import { useStateContext } from "../context/authContext";
import UpdatePlayerRanking from '../components/UpdatePlayerRanking';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';


const UpdateRanking = () => {

const [toggleSidebar, setToggleSidebar] = useState(false);
const scrollRef = useRef(null);
const { name, imgUrl } = useStateContext()
const navigate = useNavigate()

useEffect(() => {
    if(!name){
        navigate('/login')
    }
},[name]);

useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  });

  return (
    <div className="flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out">
        <div className="hidden md:flex h-screen flex-initial">
            <Sidebar />
        </div>
        <div className="flex md:hidden flex-row">
            <div className="p-2 w-full flex flex-row justify-between items-center shadow-md">
                <HiMenu fontSize={40} className="cursor-pointer" onClick={() => setToggleSidebar(true)} />
                <Link to="/">
                     <img src={logo} alt="logo" className="w-28" />
                 </Link>
                     <img src={imgUrl} alt="user-pic" className="w-9 h-9 rounded-full " />
            </div>
            {toggleSidebar && (
                 <div className="fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in">
                     <div className="absolute w-full flex justify-end items-center p-2">
                        <AiFillCloseCircle fontSize={30} className="cursor-pointer" onClick={() => setToggleSidebar(false)} />
                    </div>
                        <Sidebar closeToggle={setToggleSidebar}  />
                    </div>
            )}
        </div>
        <div className="pb-2 flex-1 h-screen overflow-y-scroll" ref={scrollRef}>
        <Routes>
          <Route path="/*" element={<UpdatePlayerRanking />} />
        </Routes>
      </div>
    </div>
  )
}

export default UpdateRanking