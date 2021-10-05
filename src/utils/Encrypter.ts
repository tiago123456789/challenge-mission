import * as bcrypt from "bcryptjs";

interface EncrypterInterface {

    getHash(value: string): Promise<string>;

    compare(value: string, hash: string): Promise<boolean>;
}

class Encrypter implements EncrypterInterface {

    readonly SALT_LENGTH: number = 10;

    getHash(value: string): Promise<string> {
        return bcrypt.hash(value, this.SALT_LENGTH);
    } 

    compare(value: string, hash: string): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}

export { EncrypterInterface }
export default Encrypter;