const jwtToken = require("jsonwebtoken")

interface JwtInterface {

    isValid(token: string): boolean

    get(): string;

    addPayload(datas: { [key: string]: any }): void;
}

export default class Jwt implements JwtInterface {

    private datas: { [key: string]: any; } = {}

    constructor() {}

    isValid(token: string): boolean {
        const decoded = jwtToken.verify(token, process.env.JWT_SECRET)
        return decoded != null;
    }
    
    get(): string {
        return jwtToken.sign({
            ...this.datas,
            exp:  Math.floor(Date.now() / 1000) + (15 * 60)
        }, process.env.JWT_SECRET)
    }

    addPayload(datas: { [key: string]: any; }): void {
        this.datas = datas;
    }

}


export {
    JwtInterface
}