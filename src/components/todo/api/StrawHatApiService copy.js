import axios from "axios"



const apiClient = axios.create(
    {
    baseURL : 'http://localhost:8080'
}
)

export const retrieveAllCrewmates = (username)=> apiClient.get(`/users/${username}/todos`)