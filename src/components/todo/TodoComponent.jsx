import { useNavigate, useParams } from "react-router-dom"
import { createCrewmatesTodo, retrieveCrewmatesTodo, updateCrewmatesTodo } from "./api/StrawHatApiService copy"
import { useAuth } from "./security/AuthContext"
import { useEffect, useState } from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'

export default function TodoComponent() {

    const { id } = useParams()

    const [description, setDescription] = useState('')

    const [targetDate, setTargetDate] = useState('')

    const authContext = useAuth()

    const username = authContext.username

    const navigate = useNavigate();

    useEffect(
        () => retrieveTodo(),
        [id]
    )

    function retrieveTodo() {
        if (id != -1) {


            retrieveCrewmatesTodo(username, id)
                .then(response => {
                    // console.log(response)
                    setDescription(response.data.description)
                    setTargetDate(response.data.targetDate)
                }
                )
                .catch(error => console.log(error))
        }
    }

    function onSubmit(values) {
        console.log(values)
        const todo = {
            id: id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: false
        }
        console.log(todo)

        if(id == -1){
            createCrewmatesTodo(username, todo)
            .then(response => {
                navigate('/todos')
                console.log(response)
                // setDescription(response.data.description)
                // setTargetDate(response.data.targetDate)
            }
            )
            .catch(error => console.log(error))
        }
        else{
        updateCrewmatesTodo(username, id, todo)
            .then(response => {
                navigate('/todos')
                console.log(response)
                // setDescription(response.data.description)
                // setTargetDate(response.data.targetDate)
            }
            )
            .catch(error => console.log(error))
        }
    }

    function validate(values) {
        let errors = {
            /* description: 'Sahi se form bhar',
            targetDate: 'Time bhi dekh' */
        }
        if (values.description.length < 3) {
            errors.description = 'Soch ke form bhar'
        }
        if (values.targetDate == null || values.targetDate=='') {
            errors.description = 'Time toh dekh le ek baar'
        }
        console.log(values)
        return errors
    }


    return (
        <div className="container">
            <h1>Bata kya karega</h1>
            <div>
                <Formik initialValues={{ description, targetDate }}
                    enableReinitialize={true}
                    onSubmit={onSubmit}
                    validate={validate}
                    validateOnChange={false}
                    validateOnBlur={false}
                >
                    {
                        (props) => (
                            <Form>
                                <ErrorMessage
                                    name="description"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <ErrorMessage
                                    name="targetDate"
                                    component="div"
                                    className="alert alert-warning"
                                />
                                <fieldset className="form-group">
                                    <label>Description</label>
                                    <Field type="text" className="form-control" name="description" />
                                </fieldset>
                                <fieldset className="form-group">
                                    <label>Kab tak Karega</label>
                                    <Field type="date" className="form-control" name="targetDate" />
                                </fieldset>
                                <div>
                                    <button className="btn btn-success m-4" type="submit">Save</button>
                                </div>

                            </Form>
                        )
                    }

                </Formik>

            </div>

        </div>
    )

}