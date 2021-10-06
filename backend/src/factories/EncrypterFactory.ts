import Encrypter, { EncrypterInterface } from "../utils/Encrypter";
import FactoryInterface from "./FactoryInterface";

class EncrypterFactory implements FactoryInterface<EncrypterInterface> {

    make(values: { [key: string]: any; }): EncrypterInterface {
        return new Encrypter();
    }
    
}

export default EncrypterFactory;