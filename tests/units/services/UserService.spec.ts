import "../../../src/config/LoaderEnvironmentVariable";
import UserService from "../../../src/service/UserService";
import logger from "../../../src/config/Logger";
import UserRepository from "../../../src/repositories/UserRepository";
import EncrypterFactory from "../../../src/factories/EncrypterFactory";
import BusinessLogicException from "../../../src/exceptions/BusinessLogicException";
import InvalidAuthenticationException from "../../../src/exceptions/InvalidAuthenticationException";

import JwtFactory from "../../../src/factories/JwtFactory";
import Encrypter from "../../../src/utils/Encrypter";
import Jwt from "../../../src/utils/Jwt"
import bcrypt from "bcrypt"

jest.mock("../../../src/repositories/UserRepository");
jest.mock("../../../src/utils/Encrypter");
jest.mock("../../../src/utils/Jwt");



describe("Unit tests class UserService", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should trigger InvalidAuthenticationException to the try authenticate password invalid", async () => {
        try {
            const UserRepositoryMocked = <jest.Mock<UserRepository>>UserRepository;
            const userRepositoryMocked = <jest.Mocked<UserRepository>>new UserRepositoryMocked();

            const EncrypterMocked = <jest.Mock<Encrypter>>Encrypter;
            const encrypterMocked = <jest.Mocked<Encrypter>>new EncrypterMocked();


            const registerFake = {
                "username": "testaffdsafas@gmail.com",
                "password": "123456789"
            };

            userRepositoryMocked.findByEmail.mockResolvedValue(registerFake)
            encrypterMocked.compare.mockResolvedValue(false)
            const userService = new UserService(
                encrypterMocked,
                userRepositoryMocked,
                logger,
                new JwtFactory().make({})
            );
            await userService.authenticate(registerFake);

        } catch (error) {
            expect(error.name).toBe(InvalidAuthenticationException.name);
        }
    });


    it("Should trigger InvalidAuthenticationException to the try authenticate username invalid", async () => {
        try {
            const UserRepositoryMocked = <jest.Mock<UserRepository>>UserRepository;
            const userRepositoryMocked = <jest.Mocked<UserRepository>>new UserRepositoryMocked();
            const registerFake = {
                "username": "testaffdsafas@gmail.com",
                "password": "123456789"
            };

            userRepositoryMocked.findByEmail.mockResolvedValue(null)
            const userService = new UserService(
                new EncrypterFactory().make({}),
                userRepositoryMocked,
                logger,
                new JwtFactory().make({})
            );
            await userService.authenticate(registerFake);

        } catch (error) {
            expect(error.name).toBe(InvalidAuthenticationException.name);
        }
    });


    it("Should trigger BusinessLogicException to the try register user email already used", async () => {
        try {
            const UserRepositoryMocked = <jest.Mock<UserRepository>>UserRepository;
            const userRepositoryMocked = <jest.Mocked<UserRepository>>new UserRepositoryMocked();
            const registerFake = {
                "username": "testaffdsafas@gmail.com",
                "password": "123456789"
            };

            userRepositoryMocked.findByEmail.mockResolvedValue(registerFake)
            const userService = new UserService(
                new EncrypterFactory().make({}),
                userRepositoryMocked,
                logger,
                new JwtFactory().make({})
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

        userRepositoryMocked.findByEmail.mockResolvedValue(null);
        const userService = new UserService(
            new EncrypterFactory().make({}),
            userRepositoryMocked,
            logger,
            new JwtFactory().make({})
        );
        await userService.register(registerFake);
        expect(userRepositoryMocked.save.call.length).toBe(1);
    });

});