import axios from "axios"

export const get = async (path, config = {}) => {
    const { data } =  await axios.get(process.env.REACT_APP_BACKEND_URL + path, config)
    return data
}

export const post = async (path, body, config = {}) => {
    const { data } = await axios.post(process.env.REACT_APP_BACKEND_URL + path, body, config)
    return data
}