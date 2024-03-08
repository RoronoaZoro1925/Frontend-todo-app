import axios from "axios"



const apiClient = axios.create(
    {
    baseURL : 'http://localhost:8080'
}
)

export const retrieveAllCrewmates = (username)=> apiClient.get(`/users/${username}/todos`)

export const deleteCrewmatesTodo = (username, id)=> apiClient.delete(`/users/${username}/todos/${id}`)

export const retrieveCrewmatesTodo = (username, id)=> apiClient.get(`/users/${username}/todos/${id}`)