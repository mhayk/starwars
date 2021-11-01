import axios from "axios"

let baseURL = 'https://swapi.dev/api/'

const api = axios.create({
    baseURL
})

export default api