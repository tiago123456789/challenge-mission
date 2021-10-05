import { Logger } from "winston";
import BusinessLogicException from "../exceptions/BusinessLogicException";
import User from "../models/User";
import UserRepositoryInterface from "../repositories/UserRepositoryInterface";
import { EncrypterInterface } from "../utils/Encrypter";

class UserService {

    constructor(
        private readonly encrypterUtil: EncrypterInterface,
        private readonly repository: UserRepositoryInterface,
        private readonly logger: Logger
    ) { }


    public async register(register: User) {
        const userWithEmail = await this.repository.findByEmail(register.username);
        const isExistUserWithEmail: boolean = userWithEmail.length > 0;
        if (isExistUserWithEmail) {
            throw new BusinessLogicException("Email can't used. Try another email.");
        }

        this.logger.info(`Creating new user with email: ${register.username}`)
        register.password = await this.encrypterUtil.getHash(register.password);
        return this.repository.save(register);
    }

}

export default UserService;