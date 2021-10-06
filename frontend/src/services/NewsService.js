import axios from "axios"

const create = (register) => {
    return axios.post(`${process.env.REACT_APP_URL_BASE}/news`, register).then(response => {
        if (response.data) {
            return response.data;
        }
        return response
    })
}


export default {
    create
}