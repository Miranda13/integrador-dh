import React,{useEffect, useState} from 'react'
import jwtDecode from 'jwt-decode'
const Context = React.createContext({})

export function SessionContextProvider({children}) {
    const [token,setToken] = useState(null)
    const [user, setUser] = useState(null)
    useEffect(()=>{
        if(token !== null && token !== undefined){
            var decoded = jwtDecode(token);
            console.log(decoded)
            console.log(token);
            // fetch(`http://localhost:8080/api/v1/user/${decoded.jti}`, {
            //     headers: {
            //         "Authorization": `Bearer ${token}`
            //     }
            // })
            // .then(res => res.json())
            // .then(data => {
            //     setUser(data)
            // })
        }else{
            setUser(null)
        }
    },[token])
    
    return <Context.Provider value={{user,token, setToken}}>
        {children}
    </Context.Provider>
}

export default Context;