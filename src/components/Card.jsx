import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Card.css'
import  logo  from '../assets/gsmlogo.jpeg'

const Card = ({ imgUrl, title, body, points, pid}) => {

    const navigate = useNavigate()
  return (
        <div className='card-container'>
        <div className='image-container'>
            {imgUrl ? (
                <img src={imgUrl} />
            ) : <img src={logo} />
        }
        </div>
        <div className='card-content'>
             <div className='card-title'>
                 <h3> {title} </h3>
             </div>
             <div className='card-body'>
                 <p> Rank : {body} </p>   
                 <p> Points: {points} </p>
             </div>
        </div> 
        <div className='btn'>
            <button onClick={() => navigate(`/player-detail/${pid}`)}>           
                <a>
                    View Player Details
                </a>
            </button>
        </div>
    </div>
  )
}

export default Card