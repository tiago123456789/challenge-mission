import logger from "../config/Logger";
import NewsService from "../service/NewsService";
import FactoryInterface from "./FactoryInterface";
import NewsRepositoryFactory from "./NewsRepositoryFactory";

export default class NewsServiceFactory implements FactoryInterface<NewsService> {

    make(values: { [key: string]: any; }): NewsService {
        return new NewsService(
            new NewsRepositoryFactory().make({}),
            logger
        )
    }

}