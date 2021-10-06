import Endpoint from "./Endpoint";
import Joi from "joi";
import UserService from "../service/UserService";
import { NextFunction, Request, Response } from "express";

class UserEndpoint extends Endpoint {

    constructor(private readonly service: UserService) {
        super();
        this.register = this.register.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }

    getRulesValidation(): { [key: string]: any; } {
        return Joi.object({
            username: Joi.string().email()
                .message("Email informated invalid.")
                .required(),
            password: Joi.string().min(10)
                .regex(/([a-z]){1,}/)
                    .message("Password must have 1 uppercase, 1 lowercase, 1 number, 1 special digit and minimum 10 digits")
                .regex(/([%$@#*&]){1,}/)
                    .message("Password must have 1 uppercase, 1 lowercase, 1 number, 1 special digit and minimum 10 digits")
                .regex(/([A-Z]){1,}/)
                    .message("Password must have 1 uppercase, 1 lowercase, 1 number, 1 special digit and minimum 10 digits")
                .regex(/([0-9]){1}/)
                    .message("Password must have 1 uppercase, 1 lowercase, 1 number, 1 special digit and minimum 10 digits")
                .required()
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

    public async authenticate(request: Request, response: Response, next: NextFunction) {
        try {
            const register = request.body;
            this.isValidDatas(register);
            const accessToken = await this.service.authenticate(register);
            return response.json({ accessToken })
        } catch(error) {
            next(error);
        }
    }


}

export default UserEndpoint;