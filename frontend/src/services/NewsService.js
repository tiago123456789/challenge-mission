import api from "./Api"
import App from "../constants/App";
import { extractResponse } from "./AbstractService"

const create = (register) => {
    return api.post(`${process.env.REACT_APP_URL_BASE}/news`, register).then(extractResponse)
}

const findAll = () => {
    const accessToken = localStorage.getItem(App.LOCALSTORAGE.ACCESS_TOKEN)
    return api.get(
        `${process.env.REACT_APP_URL_BASE}/news`,
        { 
            headers: {
                "Authorization": `Bearer ${accessToken}`
            } 
        }
    ).then(extractResponse)
}



export default {
    create, findAll
}