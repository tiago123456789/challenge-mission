import React from "react";
import authService from "../services/AuthService";
import { Redirect, Route } from "react-router-dom";

export default ({ component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => (       
            authService.isAuthenticated()
            ? <Component {...props} />
            : <Redirect to='/login' />
         )} />
    )
} 