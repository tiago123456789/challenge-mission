import NewsEndpoint from "../endpoints/NewsEndpoint";
import FactoryInterface from "./FactoryInterface";
import NewsServiceFactory from "./NewsServiceFactory";

export default class NewsEndpointFactory implements FactoryInterface<NewsEndpoint> {
    
    make(values: { [key: string]: any; }): NewsEndpoint {
        return new NewsEndpoint(
            new NewsServiceFactory().make({})
        )
    }

}