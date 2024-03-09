import { useEffect, useState } from "react"
import { retrieveAllCrewmates } from "./api/StrawHatApiService copy"
import { deleteCrewmatesTodo } from "./api/StrawHatApiService copy"
import { useAuth } from "./security/AuthContext"
import { useNavigate } from "react-router-dom"
export default function ListTodosComponent() {
    const aaj = new Date()

    const targetDate = new Date(aaj.getFullYear(), aaj.getMonth(), aaj.getDate() + 10)

    const [todos, setTodos] = useState([])

    const [message, setMessage] = useState(null)

    const authContext = useAuth();

    const username = authContext.username

    const navigate = useNavigate();


    /*  const todos = [
         { id: 1, description: 'Khao', done: false, kabtakKarega: kabtakKarega },
         { id: 2, description: 'Talwar Chalao', done: false, kabtakKarega: kabtakKarega },
         { id: 3, description: 'Rasta bhul jao', done: false, kabtakKarega: kabtakKarega },
         { id: 4, description: 'Puri crew ko tension mein daal do', done: false, kabtakKarega: kabtakKarega },
         { id: 5, description: 'so jao', done: false, kabtakKarega: kabtakKarega }
     ] */

    useEffect(
        () => refreshTodos(), []
    )

    function refreshTodos() {
        retrieveAllCrewmates(username)
            .then(response => {
                // console.log(response)
                setTodos(response.data)
            }
            )
            .catch(error => console.log(error))

    }

    function deleteTodo(id) {
        console.log('clicked' + id)
        deleteCrewmatesTodo(username,id)
        .then(
            ()=>{
                setMessage(`${id} Yeh nahi karunga`)
                refreshTodos()
            }

        )
        .catch(error=>console.log(error))
    }

    function updateTodo(id) {
        console.log('clicked' + id)
        navigate(`/todo/${id}`)
        
    }

    function addNewTodo() {
        
        navigate(`/todo/-1`)
        
    }





    return (
        <div className="container">
            <h1>Yeh sab karna hai</h1>
            {message && <div className="alert alert-warning">{message}</div>}
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>
                                description
                            </th>
                            <th>
                                Hoagaya?
                            </th>
                            <th>
                                Kab tak karega
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>
                                            {todo.description}
                                        </td>
                                        <td>
                                            {todo.done.toString()}
                                        </td>
                                        {/* <td>
                                            { todo.targetDate.toDateString()}
                                        </td> */}
                                        <td>
                                            {todo.targetDate.toString()}
                                        </td>
                                        <td>
                                            <button className="btn btn-warning"
                                                onClick={() => deleteTodo(todo.id)}>
                                                Delete
                                            </button>
                                        </td>
                                        <td>
                                            <button className="btn btn-success"
                                                onClick={() => updateTodo(todo.id)}>
                                                Update
                                            </button>
                                        </td>
                                    </tr>

                                )
                            )
                        }


                    </tbody>
                </table>
            </div>
            <div className="btn btn-success" onClick={addNewTodo}>Add New Todo</div>
        </div>
    )

}