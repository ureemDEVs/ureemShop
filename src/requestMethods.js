import axios from "axios"

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxZjI0MjE1YmUzMTkxYmYwNDljNWNkMSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0MzQzODM0OCwiZXhwIjoxNjQzNjk3NTQ4fQ.1C-riSFrHLD53atcK4NbhGWAt4fdrR8U2Ycc3Ghy87w"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
})

export const userRequest = axios.create({
    baseURL: BASE_URL,
    heaser:{token:`Bearer ${TOKEN}`}
})