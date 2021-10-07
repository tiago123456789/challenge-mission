import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    user: null,
});

export function AuthProvider({ children }) {
    const [user, setUser] = useState(null);
 
    const setUserAuthenticated = (accessToken) => {
        setUser({ accessToken })
    }

    const isAuthenticated = () => {
        return user != null && user.accessToken != null
    }


    const logout = () => {
        setUser(null)
    }

    return (
        <AuthContext.Provider value={{ user, setUserAuthenticated, logout, isAuthenticated: isAuthenticated }}>{children}</AuthContext.Provider>
    );
}

export const useAuth = () => {
    return useContext(AuthContext);
};