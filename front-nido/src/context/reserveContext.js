import React ,{useState}from 'react';

const Context = React.createContext({}); 

export function ReserveContextProvider({children}){
    const [reserve,setReserve] = useState({});

    return <Context.Provider value={{reserve,setReserve}}>
        {children}
    </Context.Provider>
}

export default Context;