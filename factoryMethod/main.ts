enum Provider {
    EMAIL = 'Email',
    FACEBOOK = 'Facebook',
    GOOGLE = 'Google',
}

interface AuthProvider {
    authenticate(): void;
}

class EmailAuthProvider implements AuthProvider {
    authenticate = (): void => {
        console.log('Authenticate using email.');
    };
}

class FacebookAuthProvider implements AuthProvider {
    authenticate = (): void => {
        console.log('Authenticate using facebook.');
    };
}

class GoogleAuthProvider implements AuthProvider {
    authenticate = (): void => {
        console.log('Authenticate using google.');
    };
}

const createAuthProvider = (type: Provider) => {
    switch (type) {
        case Provider.EMAIL:
            return new EmailAuthProvider();
        case Provider.FACEBOOK:
            return new FacebookAuthProvider();
        case Provider.GOOGLE:
            return new GoogleAuthProvider();
        default:
            return null;
    }
};

const emailAuthProvider = createAuthProvider(Provider.EMAIL);
const facebookAuthProvider = createAuthProvider(Provider.FACEBOOK);
const googleAuthProvider = createAuthProvider(Provider.GOOGLE);

emailAuthProvider.authenticate();
facebookAuthProvider.authenticate();
googleAuthProvider.authenticate();
