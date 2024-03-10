import axios from "axios"
import { apiClient } from "./ApiClient"

/* export function retrieveHelloWorld()
{
    return axios.get('http://localhost:8080/hello-world')
} */



export const retrieveHelloWorld = (token)=> apiClient.get('/hello-world',{
    headers:{
        Authorization: token
    }
})

