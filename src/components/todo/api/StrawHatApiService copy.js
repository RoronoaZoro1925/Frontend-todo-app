
import { apiClient } from "./ApiClient"




export const retrieveAllCrewmates = (username)=> apiClient.get(`/users/${username}/todos`)

export const deleteCrewmatesTodo = (username, id)=> apiClient.delete(`/users/${username}/todos/${id}`)

export const retrieveCrewmatesTodo = (username, id)=> apiClient.get(`/users/${username}/todos/${id}`)

export const updateCrewmatesTodo = (username, id, todo)=> apiClient.put(`/users/${username}/todos/${id}`, todo)

export const createCrewmatesTodo = (username, todo)=> apiClient.post(`/users/${username}/todos`, todo)