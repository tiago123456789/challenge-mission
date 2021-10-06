import App from "../constants/App"

const isAuthenticated = () => {
    console.log(localStorage.getItem(App.LOCALSTORAGE.ACCESS_TOKEN))
    return localStorage.getItem(App.LOCALSTORAGE.ACCESS_TOKEN) != null;
}

export default {
    isAuthenticated
}