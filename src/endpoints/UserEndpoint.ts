import Endpoint from "./Endpoint";
import Joi from "joi";
import UserService from "../service/UserService";
import { NextFunction, Request, Response } from "express";

class UserEndpoint extends Endpoint {

    constructor(private readonly service: UserService) {
        super();
        this.register = this.register.bind(this);
    }

    getRulesValidation(): { [key: string]: any; } {
        return Joi.object({
            username: Joi.string().email().required(),
            password: Joi.string().min(10)
                .regex(/([a-z]){1,}/)
                .regex(/([%$@#*&]){1,}/)
                .regex(/([A-Z]){1,}/)
                .regex(/([0-9]){1}/)
                .required(),
        });
    }

    public async register(request: Request, response: Response, next: NextFunction) {
        try {
            const register = request.body;
            this.isValidDatas(register);
            await this.service.register(register);
            return response.sendStatus(201)
        } catch(error) {
            next(error);
        }
    }


}

export default UserEndpoint;