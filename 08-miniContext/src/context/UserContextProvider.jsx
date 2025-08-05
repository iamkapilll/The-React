import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({children}) =>{ // here it will take value from where it is sent and later it is wrapped inside the UserContext.Provider
    const [user, setUser] = useState(null)

    return (
        <UserContext.Provider value={{user, setUser}}> 
        {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider