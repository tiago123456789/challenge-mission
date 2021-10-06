import { Express } from "express";
import handlerException from "../middleware/HandlerExceptionMiddleware";
import UserEndpointFactory from "../factories/UserEndpointFactory";
import NewsEndpointFactory from "../factories/NewsEndpointFactory";
import authMiddleware from "../middleware/AuthMiddleware";

const userEnpoint = new UserEndpointFactory().make({});
const newsEndpoint = new NewsEndpointFactory().make({})
export default (app: Express) => {
    
    app.post("/auth/register", userEnpoint.register)
    app.post("/auth/login", userEnpoint.authenticate)
    
    app.post("/news", newsEndpoint.save)
    app.get("/news", authMiddleware.isAuthenticated, newsEndpoint.findAll)


    // Handler exceptions in aplication.
    app.use(handlerException);
    
    // Handler route not found in aplication.
    app.use((request, response, next) => {
        response.status(404).json({
            message: "Route not found!"
        })
    })
}