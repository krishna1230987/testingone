export class AuthService {
    isLoggedIn = false;
    login(){
        return this.isLoggedIn = true
    }

    logout(){
        return this.isLoggedIn = false
    }

    isAuthenticated(){
        return this.isLoggedIn
    }
}