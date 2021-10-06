import { NextFunction, Response, Request } from "express";
import JwtFactory from "../factories/JwtFactory";
import CONSTANTES from "../constants/App"

const jwt = new JwtFactory().make({});

export default {

    isAuthenticated: async (request: Request, response: Response, next: NextFunction) => {
        try {
            // @ts-ignore
            let accessToken: string = request.headers.authorization;
            if (!accessToken)  {
                return response.status(403)
                .json({ message: "Is necessary informate token in header request!" });
            }

            accessToken = accessToken.replace(CONSTANTES.HEADER.PREFIX_JWT, "");
            await jwt.isValid(accessToken);
            next();
        } catch (error) {
            return response.status(403) 
                .json({ message: "Is necessary informate token in header request!" });
        }
    }
}