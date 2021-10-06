import { NextFunction, Request, Response } from "express";
import Joi from "joi";
import NewsService from "../service/NewsService";
import Endpoint from "./Endpoint";

export default class NewsEndpoint extends Endpoint {

    constructor(private readonly service: NewsService) {
        super();
        this.save = this.save.bind(this);
    }

    getRulesValidation(): { [key: string]: any; } {
        return Joi.object({
            title: Joi.string().min(10).required(),
            description: Joi.string().min(10).required(),
        });
    }

    public async save(request: Request, response: Response, next: NextFunction) {
        try {
            const register = request.body;
            this.isValidDatas(register);
            await this.service.save(register);
            return response.sendStatus(201)
        } catch(error) {
            next(error);
        }
    }

}