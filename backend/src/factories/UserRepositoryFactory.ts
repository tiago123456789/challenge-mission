import UserRepositoryInterface from "../repositories/UserRepositoryInterface";
import UserRepository from "../repositories/UserRepository";
import FactoryInterface from "./FactoryInterface";

class UserRepositoryFactory implements FactoryInterface<UserRepositoryInterface> {

    make(values: { [key: string]: any; }): UserRepositoryInterface {
        return new UserRepository();
    }
}

export default UserRepositoryFactory;