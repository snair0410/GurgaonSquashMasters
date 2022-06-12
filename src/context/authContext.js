import React, { createContext, useState, useContext, useCallback} from 'react'

const StateContext = createContext()


const initialState = {
    login: () => {},
}

export const ContextProvider  = ({ children }) => {

    const [name, setName] = useState(null)
    const [imgUrl, setImgUrl] = useState(null)

    const login = (uName, imageUrl) => {
        console.log("hi i am here")
        setName(uName)
        console.log(uName)
        setImgUrl(imageUrl)
        console.log(imageUrl)
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
