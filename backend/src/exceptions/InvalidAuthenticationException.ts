class InvalidAuthenticationException extends Error {

    constructor(message: string) {
        super(message);
        this.name = "InvalidAuthenticationException";
    }
}

export default InvalidAuthenticationException;