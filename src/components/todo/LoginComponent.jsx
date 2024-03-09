import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from './security/AuthContext'

export default function LoginComponent() {

    const [username, setUsername] = useState('Zoro') //setUsername is the method to update the username in state

    const [password, setPassword] = useState('') //setPassword is the method to update the password in state

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

    const authContext = useAuth();

    function handleUsernameChange(event) {
        /* console.log(event);
        console.log(event.target.value); */
        setUsername(event.target.value)

    }

    function handlePasswordChange(event) {
        /* console.log(event);
        console.log(event.target.value); */
        setPassword(event.target.value)

    }

    async function handleSubmit() {
        if (await authContext.login(username, password)) {
            navigate(`/welcome/${username}`)
        }
        else {
            setShowErrorMessage(true)
        }
    }

    /* function SuccessMessageComponent() {
        if (showSuccessMessage){
            return <div className="successMessage"> Authenticated Successfully</div>
        }
            return null
    }

    function ErrorMessageComponent() {
        if (showErrorMessage){
            return <div className="errorMessage">Authenticated Failed. Please check your Credentials</div>
        }
            return null
    } */


    return (
        <div className="Login">
            {showErrorMessage && <div className="errorMessage">Authenticated Failed. Please check your Credentials</div>}
            <div className="LoginForm">
                <div>
                    <label>User Name</label>
                    <input type="text" name="username" value={username} onChange={handleUsernameChange} />
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" name="password" value={password} onChange={handlePasswordChange} />
                </div>
                <div>
                    <button type="button" name="login" onClick={handleSubmit}>Login</button>
                </div>
            </div>
        </div>
    )

}