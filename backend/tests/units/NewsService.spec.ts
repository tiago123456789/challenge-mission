import "../../src/config/LoaderEnvironmentVariable";
import logger from "../../src/config/Logger";
import NewsRepository from "../../src/repositories/NewsRepository";
import BusinessLogicException from "../../src/exceptions/BusinessLogicException";
import NewsService from "../../src/service/NewsService";

jest.mock("../../src/repositories/NewsRepository");
jest.mock("../../src/utils/Encrypter");
jest.mock("../../src/utils/Jwt");



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

    it("Should return 3 news when try find all", async () => {
        const NewsRepositoryMocked = <jest.Mock<NewsRepository>>NewsRepository;
        const newsRepositoryMocked = <jest.Mocked<NewsRepository>>new NewsRepositoryMocked();
        const registerFake = {
            "title": "testando testando",
            "description": "testando testando o teste"
        };

        newsRepositoryMocked.findAll.mockResolvedValue([
            registerFake, registerFake, registerFake
        ])
        const newsService = new NewsService(
            newsRepositoryMocked,
            logger,
        );
        const registerReturned = await newsService.findAll();
        expect(registerReturned.length).toBe(3);
    });

});