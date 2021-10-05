
interface UserRepositoryInterface {

    save(register: { [key: string]: any }): any;
    findByEmail(email: string): Promise<any[]>;
}

export default UserRepositoryInterface;