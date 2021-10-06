import axios from "axios"

const create = (credential) => {
    return axios.post(`${process.env.REACT_APP_URL_BASE}/auth/register`, credential).then(response => {
        if (response.data) {
            return response.data;
        }
        return response
    })
}


const login = (credential) => {
    return axios.post(`${process.env.REACT_APP_URL_BASE}/auth/login`, credential).then(response => {
        if (response.data) {
            return response.data;
        }
        return response
    })
}

export default {
    create, login
}