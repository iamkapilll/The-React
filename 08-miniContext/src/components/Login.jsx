import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const {setUser}  = useContext(UserContext) //This pulls the setUser function from your global context (UserContext), which was provided by UserContextProvider.

    const handleSubmit = (e) => {
        e.preventDefault() // lets not to send data anywhere by defaultly
        setUser({username, password})

    }

    return (
        <div>
            <h2>Login</h2>
            <input type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username' />

                {" "} 

            <input type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='password' />

            <button onClick={handleSubmit}>submit</button>
        </div>
    )
}

export default Login