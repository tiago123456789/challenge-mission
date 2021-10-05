import "../../../src/config/LoaderEnvironmentVariable";
import UserService from "../../../src/service/UserService";
import logger from "../../../src/config/Logger";
import UserRepository from "../../../src/repositories/UserRepository";
import EncrypterFactory from "../../../src/factories/EncrypterFactory";
import BusinessLogicException from "../../../src/exceptions/BusinessLogicException";

jest.mock("../../../src/repositories/UserRepository");


describe("Unit tests class UserService", () => {

    it("Should trigger BusinessLogicException to the try register user email already used", async () => {
        try {
            const UserRepositoryMocked = <jest.Mock<UserRepository>>UserRepository;
            const userRepositoryMocked = <jest.Mocked<UserRepository>>new UserRepositoryMocked();
            const registerFake = {
                "username": "testaffdsafas@gmail.com",
                "password": "123456789"
            };

            userRepositoryMocked.findByEmail.mockResolvedValue([
                registerFake
            ])
            const userService = new UserService(
                new EncrypterFactory().make({}),
                userRepositoryMocked,
                logger
            );
            await userService.register(registerFake);

        } catch (error) {
            expect(error.name).toBe(BusinessLogicException.name);
        }
    });

    it("Should register user with success", async () => {
        const UserRepositoryMocked = <jest.Mock<UserRepository>>UserRepository;
        const userRepositoryMocked = <jest.Mocked<UserRepository>>new UserRepositoryMocked();
        const registerFake = {
            "username": "testaffdsafas@gmail.com",
            "password": "123456789"
        };

        userRepositoryMocked.findByEmail.mockResolvedValue([]);
        const userService = new UserService(
            new EncrypterFactory().make({}),
            userRepositoryMocked,
            logger
        );
        await userService.register(registerFake);
        expect(userRepositoryMocked.save.call.length).toBe(1);
    });

});