import "../../../src/config/LoaderEnvironmentVariable";
import UserService from "../../../src/service/UserService";
import logger from "../../../src/config/Logger";
import NewsRepository from "../../../src/repositories/NewsRepository";
import EncrypterFactory from "../../../src/factories/EncrypterFactory";
import BusinessLogicException from "../../../src/exceptions/BusinessLogicException";
import InvalidAuthenticationException from "../../../src/exceptions/InvalidAuthenticationException";

import JwtFactory from "../../../src/factories/JwtFactory";
import Encrypter from "../../../src/utils/Encrypter";
import NewsService from "../../../src/service/NewsService";

jest.mock("../../../src/repositories/NewsRepository");
jest.mock("../../../src/utils/Encrypter");
jest.mock("../../../src/utils/Jwt");



describe("Unit tests class NewsService", () => {

    beforeEach(() => {
        jest.clearAllMocks();
    })

    it("Should trigger BusinessLogicException to the try save news with title already used", async () => {
        try {
            const NewsRepositoryMocked = <jest.Mock<NewsRepository>>NewsRepository;
            const newsRepositoryMocked = <jest.Mocked<NewsRepository>>new NewsRepositoryMocked();
            const registerFake = {
                "title": "testando testando",
                "description": "testando testando o teste"
            };

            newsRepositoryMocked.findByTitle.mockResolvedValue(registerFake)
            const newsService = new NewsService(
                newsRepositoryMocked,
                logger,
            );
            await newsService.save(registerFake);

        } catch (error) {
            expect(error.name).toBe(BusinessLogicException.name);
        }
    });

    it("Should register user with success", async () => {
        const NewsRepositoryMocked = <jest.Mock<NewsRepository>>NewsRepository;
        const newsRepositoryMocked = <jest.Mocked<NewsRepository>>new NewsRepositoryMocked();
        const registerFake = {
            "title": "testando testando",
            "description": "testando testando o teste"
        };

        newsRepositoryMocked.findByTitle.mockResolvedValue(null)
        const newsService = new NewsService(
            newsRepositoryMocked,
            logger,
        );
        await newsService.save(registerFake);
        expect(newsRepositoryMocked.save.call.length).toBe(1);
    });

});