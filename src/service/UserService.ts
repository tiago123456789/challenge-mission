import { Logger } from "winston";
import BusinessLogicException from "../exceptions/BusinessLogicException";
import InvalidAuthenticationException from "../exceptions/InvalidAuthenticationException";
import User from "../models/User";
import UserRepositoryInterface from "../repositories/UserRepositoryInterface";
import { EncrypterInterface } from "../utils/Encrypter";
import { JwtInterface } from "../utils/Jwt";

class UserService {

    constructor(
        private readonly encrypterUtil: EncrypterInterface,
        private readonly repository: UserRepositoryInterface,
        private readonly logger: Logger,
        private readonly jwt: JwtInterface
    ) { }


    public async authenticate(credential: User) {
        let userWithEmail: User = await this.repository.findByEmail(credential.username);
        const isExistUserWithEmail: boolean =  userWithEmail != null;
        if (!isExistUserWithEmail) {
            throw new InvalidAuthenticationException("Credentials invalid!")
        }

        // @ts-ignore
        const isValidPassword = await this.encrypterUtil.compare(credential.password, userWithEmail.password)
        if (!isValidPassword) {
            throw new InvalidAuthenticationException("Credentials invalid!")
        }

        // @ts-ignore
        this.jwt.addPayload({ userId: userWithEmail.id })
        return this.jwt.get()
    }

    public async register(register: User) {
        const userWithEmail = await this.repository.findByEmail(register.username);
        const isExistUserWithEmail: boolean = userWithEmail != null;
        if (isExistUserWithEmail) {
            throw new BusinessLogicException("Email can't used. Try another email.");
        }

        this.logger.info(`Creating new user with email: ${register.username}`)
        register.password = await this.encrypterUtil.getHash(register.password);
        return this.repository.save(register);
    }

}

export default UserService;