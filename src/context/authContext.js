import React, { createContext, useState, useContext} from 'react'

const StateContext = createContext()


const initialState = {
    login: () => {},
}

export const ContextProvider  = ({ children }) => {

    const [name, setName] = useState(null)
    const [imgUrl, setImgUrl] = useState(null)

    const login = (uName, imageUrl) => {
        setName(uName)
        setImgUrl(imageUrl)
        localStorage.setItem('userData', JSON.stringify({name: uName, uImage: imageUrl}))
      }


    return (
        <StateContext.Provider
        value={{
            name,
            imgUrl,
            login,
        }}
        >
            {children}
        </StateContext.Provider>
    )
}


export const useStateContext = () => useContext(StateContext)
