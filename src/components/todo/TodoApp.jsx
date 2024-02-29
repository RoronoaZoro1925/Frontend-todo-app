import { useState } from 'react'
import './TodoApp.css'
export default function TodoApp() {
    return (
        <div className="TodoApp">

            <LoginComponent />
            {/* <WelcomeComponent/> */}
        </div>
    )

}

function LoginComponent() {

    const [username, setUsername] = useState('Zoro') //setUsername is the method to update the username in state

    const [password, setPassword] = useState('') //setPassword is the method to update the password in state

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

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

    function handleSubmit() {
        if (username === 'Zoro' && password === 'pass') {
            setShowSuccessMessage(true)
            setShowErrorMessage(false)
        }
        else {
            setShowSuccessMessage(false)
            setShowErrorMessage(true)

        }
    }

    function SuccessMessageComponent() {
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
    }


    return (
        <div className="Login">
            {showSuccessMessage && <div className="successMessage"> Authenticated Successfully</div>}
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



function WelcomeComponent() {
    return (
        <div className="Welcome">
            Welcome Component
        </div>
    )

}