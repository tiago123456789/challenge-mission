import UserRepositoryInterface from "./UserRepositoryInterface";
import UserCollection from "../collections/User"
import User from "../models/User";

class UserRepository implements UserRepositoryInterface {

    async save(register: User) {
        const user = new UserCollection(register)
        return user.save();
    }

    async findByEmail(email: string): Promise<any> {
        return UserCollection.findOne({ username: email })
    }

}

export default UserRepository;