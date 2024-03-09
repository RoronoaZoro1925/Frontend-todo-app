import { createContext, useContext, useState } from "react";
import { basicAuthentication } from "../api/HelloWorldApiService";

export const AuthContext = createContext()

export const useAuth = () => useContext(AuthContext)

export default function AuthProvider({ children }) {

    // const [number, setNumber] = useState(0)

    const [isAuthenticated, setAuthenticated] = useState(false)

    const [username, setUsername] = useState(null)

    const [token, setToken] = useState(null)

    /* setInterval(
        () => setNumber(number+1),
        10000
    ) */

    // const valueTobeShared = {number, isAuthenticated, setAuthenticated}

    /* function login(username, password) {
        if (username === 'Zoro' && password === 'pass') {
            setAuthenticated(true)
            setUsername(username)
            return true
        }
        else {
            setAuthenticated(false)
            setUsername(null)
            return false

        }
        
    } */

    async function login(username, password) {
        const baToken = 'Basic ' + window.btoa(username + ":" + password)
        try {
            const respone = await basicAuthentication(baToken)
            if (respone.status == 200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)
                return true
            }
            else {
                logout()
                return false

            }
        } catch (error) {
            logout()
            return false
        }

    }

    function logout() {
        setAuthenticated(false)
        setUsername(null)
        setToken(null)
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, username, token }}>
            {children}
        </AuthContext.Provider>

    )

}