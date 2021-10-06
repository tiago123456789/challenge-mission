import { Logger } from "winston";
import BusinessLogicException from "../exceptions/BusinessLogicException";
import News from "../models/News";
import NewsRepositoryInterface from "../repositories/NewsRepositoryInterface";

export default class NewsService {

    constructor(
        private readonly repository: NewsRepositoryInterface,
        private readonly logger: Logger
    ) { }

    async save(register: News) {
        const isAlreadyNewsWithTitle = await this.repository.findByTitle(register.title);
        if (isAlreadyNewsWithTitle) {
            throw new BusinessLogicException("Already exist news registered with title.")
        }


        this.logger.info(`Creating news`)
        return this.repository.save(register);
    }

    findAll() {
        this.logger.info(`Listing the news`)
        return this.repository.findAll();
    }
}