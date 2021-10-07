import App from "../constants/App"

const isAuthenticated = () => {
    return localStorage.getItem(App.LOCALSTORAGE.ACCESS_TOKEN) != null;
}

const logout = () => {
    localStorage.removeItem(App.LOCALSTORAGE.ACCESS_TOKEN);
    window.location.href = "/"
}

export default {
    isAuthenticated, logout
}