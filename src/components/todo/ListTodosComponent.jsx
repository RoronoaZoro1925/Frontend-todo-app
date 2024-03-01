export default function ListTodosComponent() {
    const aaj = new Date()

    const kabtakKarega = new Date(aaj.getFullYear() + 10, aaj.getMonth(), aaj.getDate())
    const todos = [
        { id: 1, description: 'Khao', done: false, kabtakKarega: kabtakKarega },
        { id: 2, description: 'Talwar Chalao', done: false, kabtakKarega: kabtakKarega },
        { id: 3, description: 'Rasta bhul jao', done: false, kabtakKarega: kabtakKarega },
        { id: 4, description: 'Puri crew ko tension mein daal do', done: false, kabtakKarega: kabtakKarega },
        { id: 5, description: 'so jao', done: false, kabtakKarega: kabtakKarega }
    ]
    return (
        <div className="container">
            <h1>Yeh sab karna hai</h1>
            <div>
                <table className='table'>
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