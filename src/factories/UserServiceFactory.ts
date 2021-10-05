import UserService from "../service/UserService";
import FactoryInterface from "./FactoryInterface";
import UserRepositoryFactory from "./UserRepositoryFactory";
import logger from "../config/Logger";
import EncrypterFactory from "./EncrypterFactory";

class UserServiceFactory implements FactoryInterface<UserService> {

    make(values: { [key: string]: any; }): UserService {
        const repository = new UserRepositoryFactory().make({});
        return new UserService(
            new EncrypterFactory().make({}),
            repository,
            logger
        );
    }

    
}

export default UserServiceFactory;