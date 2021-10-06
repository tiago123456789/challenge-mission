import axios from "axios"
import App from "../constants/App";

const create = (register) => {
    return axios.post(`${process.env.REACT_APP_URL_BASE}/news`, register).then(response => {
        if (response.data) {
            return response.data;
        }
        return response
    })
}

const findAll = () => {
    const accessToken = localStorage.getItem(App.LOCALSTORAGE.ACCESS_TOKEN)
    return axios.get(
        `${process.env.REACT_APP_URL_BASE}/news`,
        { 
            headers: {
                "Authorization": `Bearer ${accessToken}`
            } 
        }
    ).then(response => {
        if (response.data) {
            return response.data;
        }
        return response
    })
}



export default {
    create, findAll
}