
import * as apiMethods from './apiMethods';

class api {
    
    static signUpToSite(userData) {
        return apiMethods.apiPost({
                                    postData: userData,
                                    url: '/signUp',
                                    logError: "error in logIngApi - signUpToSite() :"
                                });
    }
    static loginToSite(userData) {
        return apiMethods.apiPost({
                                    postData: userData,
                                    url: '/login',
                                    logError: "error in logIngApi - loginToSite() :"
                                });
    }
    static logOut(userData) {
        return apiMethods.apiPost({
                                    postData: userData,
                                    url: '/logout',
                                    logError: "error in logIngApi - logOut() :"
                                });
    }
    static checkIfLoggedIn() {
        return apiMethods.apiGet({
            url: '/logInVerification',
            logError: "error in logIngApi - checkIfLoggedIn() :"
        });
    }
}

export default api;