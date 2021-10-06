import News from "../models/News";

interface NewsRepositoryInterface {

    save(register: News): Promise<any>;

    findByTitle(title: string): Promise<any>

    findAll(): Promise<any[]>
}

export default NewsRepositoryInterface
