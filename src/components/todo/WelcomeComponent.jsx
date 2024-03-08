import { Link, useParams } from "react-router-dom"

import { useState } from "react"
import { retrieveHelloWorld } from "./api/HelloWorldApiService"
import axios from "axios"

export default function WelcomeComponent() {
    const { username } = useParams()
    console.log(username)
    const [message, setMessage] = useState(null)
    // const axios = require('axios')
    // const password = 'root'
    // const encoded = Buffer.from(username + ':' + password).toString('base64');
    
    function callHelloWorldRestApi() {
        // axios.get('http://localhost:8080/hello-world')
        retrieveHelloWorld()
        .then(
            (response)=>successfulResponse(response)
        )
        .catch(
            (error)=>errorResponse(error)
        )
        .finally(
            ()=> console.log('cleanup')
        )
    }
    function successfulResponse(response) {
        console.log(response)
        setMessage(response.data.message)
    }
    function errorResponse(error) {
        console.log(error)
    }
    return (
        <div className="Welcome">
            Welcome {username}
            <div>
                {username} Tere Kaam <Link to='/todos'>Yaha Ja</Link>
            </div>
            <div>
                <button className="btn btn-success m-5" onClick={callHelloWorldRestApi}>Woh REST API ko bulake lao</button>
            </div>
            <div className="text-info">
                {message}
            </div>
        </div>
    )

}