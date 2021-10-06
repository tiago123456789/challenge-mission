import Jwt, { JwtInterface } from "../utils/Jwt";
import FactoryInterface from "./FactoryInterface";

class JwtFactory implements FactoryInterface<JwtInterface> {

    make(values: { [key: string]: any; }): JwtInterface {
        return new Jwt();
    }
    
}

export default JwtFactory;