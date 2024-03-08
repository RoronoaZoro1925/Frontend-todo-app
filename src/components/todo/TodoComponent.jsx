import { useParams } from "react-router-dom"
import { retrieveCrewmatesTodo } from "./api/StrawHatApiService copy"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"

export default function TodoComponent() {

    const {id} = useParams()

    const[description, setDescription] = useState('')

    const authContext = useAuth()

    const username = authContext.username

    useEffect(
        ()=>retrieveTodo(),
        [id]
    )

    function retrieveTodo() {
        retrieveCrewmatesTodo(username, id)
        .then(response => {
            // console.log(response)
            setDescription(response.data.description)
        }
        )
        .catch(error => console.log(error))
    }


    return(
        <div className="container">
            <h1>Bata kya karega</h1>
            <div>
                description:{description}

            </div>

        </div>
    )
    
}