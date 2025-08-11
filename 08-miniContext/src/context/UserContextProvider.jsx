import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{ // here it will take value from where it is sent and later it is wrapped inside the UserContext.Provider
    const [user, setUser] = useState(null) // here we have created a usestate like that we can create more things and as like that value={{user, setUser}} we can send data using props 

    return (
        <UserContext.Provider value={{user, setUser}}> 
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider
