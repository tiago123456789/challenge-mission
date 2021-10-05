interface AuthInterface {

    authenticate(credential: Credential): Promise<string>;
    isAuthenticated(token: string): Promise<string>;
}

export default AuthInterface;