import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate, useParams } from 'react-router-dom'
import './TodoApp.css'
export default function TodoApp() {
    return (
        <div className="TodoApp">
            <HeaderComponent/>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LoginComponent />}></Route>
                    <Route path='/login' element={<LoginComponent />}></Route>
                    <Route path='/welcome/:username' element={<WelcomeComponent />}></Route>
                    <Route path='/todos' element={<ListTodosComponent />}></Route>
                    <Route path='/logout' element={<LogoutComponent />}></Route>
                    <Route path='*' element={<ErrorComponent />}></Route>
                </Routes>
            </BrowserRouter>
            <FooterComponent/>
        </div>
    )

}

function LoginComponent() {

    const [username, setUsername] = useState('Zoro') //setUsername is the method to update the username in state

    const [password, setPassword] = useState('') //setPassword is the method to update the password in state

    const [showSuccessMessage, setShowSuccessMessage] = useState(false)

    const [showErrorMessage, setShowErrorMessage] = useState(false)

    const navigate = useNavigate();

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
            navigate(`/welcome/${username}`)
        }
        else {
            setShowSuccessMessage(false)
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
    const { username } = useParams()
    console.log(username)
    return (
        <div className="Welcome">
            Welcome {username}
            <div>
                {username} Tere Kaam <Link to='/todos'>Yaha Ja</Link>
            </div>
        </div>
    )

}

function ErrorComponent() {
    return (
        <div className="Error">
            <h1>Sorry. Tu naya aaya hai yaha</h1>
        </div>
    )

}

function ListTodosComponent() {
    const aaj =  new Date()

    const kabtakKarega = new Date(aaj.getFullYear()+10, aaj.getMonth(), aaj.getDate())
    const todos = [
        { id: 1, description: 'Khao', done:false, kabtakKarega:kabtakKarega },
        { id: 2, description: 'Talwar Chalao', done:false, kabtakKarega:kabtakKarega },
        { id: 3, description: 'Rasta bhul jao', done:false, kabtakKarega:kabtakKarega },
        { id: 4, description: 'Puri crew ko tension mein daal do', done:false, kabtakKarega:kabtakKarega },
        { id: 5, description: 'so jao', done:false, kabtakKarega:kabtakKarega }
    ]
    return (
        <div className="ListTodosComponent">
            <h1>Yeh sab karna hai</h1>
            <div>
                <table>
                    <thead>
                        <tr>
                            <td>
                                id
                            </td>
                            <td>
                                description
                            </td>
                            <td>
                                Hoagaya?
                            </td>
                            <td>
                                Kab tak karega
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>
                                            {todo.id}
                                        </td>
                                        <td>
                                            {todo.description}
                                        </td>
                                        <td>
                                            {todo.done.toString()}
                                        </td>
                                        <td>
                                            {todo.kabtakKarega.toDateString()}
                                        </td>
                                    </tr>

                                )
                            )
                        }


                    </tbody>
                </table>
            </div>
        </div>
    )

}

function HeaderComponent() {
    return(
        <div className='header'>
            Header <hr/>

        </div>
    )
    
}

function FooterComponent() {
    return(
        <div className='header'>
            <hr/> Footer

        </div>
    )
    
}

function LogoutComponent() {
    return (
        <div className="Error">
            <h1>Nikal Pehli Fursat Mein</h1>
        </div>
    )

}