import * as bcrypt from "bcrypt";

interface EncrypterInterface {

    getHash(value: string): string;

    compare(value: string, hash: string): Promise<boolean>;
}

class Encrypter implements EncrypterInterface {

    readonly SALT_LENGTH: number = 10;

    getHash(value: string): string {
        return bcrypt.hashSync(value, this.SALT_LENGTH);
    } 

    compare(value: string, hash: string): Promise<boolean> {
        return bcrypt.compare(value, hash);  
    }

}

export { EncrypterInterface }
export default Encrypter;