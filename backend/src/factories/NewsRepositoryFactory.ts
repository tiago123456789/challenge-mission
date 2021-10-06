import NewsRepository from "../repositories/NewsRepository";
import NewsRepositoryInterface from "../repositories/NewsRepositoryInterface";
import FactoryInterface from "./FactoryInterface";

export default class NewsRepositoryFactory implements FactoryInterface<NewsRepositoryInterface> {
    
    make(values: { [key: string]: any; }): NewsRepositoryInterface {
        return new NewsRepository();
    }

}