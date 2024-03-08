import { useEffect, useState } from "react"
import { retrieveAllCrewmates } from "./api/StrawHatApiService copy"
export default function ListTodosComponent() {
    const aaj = new Date()

    const targetDate = new Date(aaj.getFullYear(), aaj.getMonth(), aaj.getDate() + 10)

    const [todos, setTodos] = useState([])


    /*  const todos = [
         { id: 1, description: 'Khao', done: false, kabtakKarega: kabtakKarega },
         { id: 2, description: 'Talwar Chalao', done: false, kabtakKarega: kabtakKarega },
         { id: 3, description: 'Rasta bhul jao', done: false, kabtakKarega: kabtakKarega },
         { id: 4, description: 'Puri crew ko tension mein daal do', done: false, kabtakKarega: kabtakKarega },
         { id: 5, description: 'so jao', done: false, kabtakKarega: kabtakKarega }
     ] */

    useEffect(
        () => refreshTodos(),[]
    )

    function refreshTodos() {
        retrieveAllCrewmates('Zoro')
            .then(response => {
                // console.log(response)
                setTodos(response.data)
            }
            )
            .catch(error => console.log(error))

    }





    return (
        <div className="container">
            <h1>Yeh sab karna hai</h1>
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <td>
                                Id
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
                                        {/* <td>
                                            { todo.targetDate.toDateString()}
                                        </td> */}
                                        <td>
                                            {todo.targetDate.toString()}
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