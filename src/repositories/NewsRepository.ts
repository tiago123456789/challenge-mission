import News from "../models/News";
import NewsRepositoryInterface from "./NewsRepositoryInterface";
import NewsCollection from "../collections/News";

export default class NewsRepository implements NewsRepositoryInterface {

    save(register: News): Promise<any> {
        const news = new NewsCollection(register)
        return news.save();
    }

    findByTitle(title: string): Promise<any> {
        // @ts-ignore 
        return NewsCollection.findOne({ title: title })
    }

    findAll(): Promise<any[]> {
        // @ts-ignore 
        return NewsCollection.find({ })
    }
    
}