import ForbiddenException from "../exceptions/ForbiddenException";
import UserService from "../service/UserService";
import AuthInterface from "./AuthInterface";

class Auth implements AuthInterface {

    constructor(private readonly userService: UserService) { }

    authenticate(credential: Credential): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
    isAuthenticated(token: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
  
}

export default Auth;