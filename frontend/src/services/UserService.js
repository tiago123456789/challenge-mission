import api from "./Api"
import { extractResponse } from "./AbstractService"

const create = (credential) => {
    return api.post(`${process.env.REACT_APP_URL_BASE}/auth/register`, credential)
        .then(extractResponse)
}


const login = (credential) => {
    return api.post(`${process.env.REACT_APP_URL_BASE}/auth/login`, credential)
        .then(extractResponse)
}

export default {
    create, login
}