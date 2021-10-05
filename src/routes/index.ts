import { Express } from "express";
import handlerException from "../middleware/HandlerExceptionMiddleware";
import UserEndpointFactory from "../factories/UserEndpointFactory";
import authMiddleware from "../middleware/AuthMiddleware";

const userEnpoint = new UserEndpointFactory().make({});

export default (app: Express) => {
    
    app.post("/auth/register", userEnpoint.register)
    // app.get("/auth/login", (request, response) => response.json({ message: "auth/login"}))
    
    // Handler exceptions in aplication.
    app.use(handlerException);
    
    // Handler route not found in aplication.
    app.use((request, response, next) => {
        response.status(404).json({
            message: "Route not found!"
        })
    })
}