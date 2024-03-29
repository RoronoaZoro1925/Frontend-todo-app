import { createContext, useContext, useState } from "react";
import { jwtAuthentication } from "../api/AuthenticationAPIService";
import { apiClient } from "../api/ApiClient";

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

    /* async function login(username, password) {
        const baToken = 'Basic ' + window.btoa(username + ":" + password)
        try {
            const respone = await basicAuthentication(baToken)
            if (respone.status == 200) {
                setAuthenticated(true)
                setUsername(username)
                setToken(baToken)
                apiClient.interceptors.request.use(
                    (config)=>{
                        console.log('intercepting and adding a token')
                        config.headers.Authorization=baToken
                        return config
                    }
                )
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

    } */

    async function login(username, password) {
        try {
            const respone = await jwtAuthentication(username, password)
            if (respone.status == 200) {
                const jwtToken = 'Bearer ' + respone.data.token
                setAuthenticated(true)
                setUsername(username)
                setToken(jwtToken)
                apiClient.interceptors.request.use(
                    (config)=>{
                        console.log('intercepting and adding a token')
                        config.headers.Authorization=jwtToken
                        return config
                    }
                )
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