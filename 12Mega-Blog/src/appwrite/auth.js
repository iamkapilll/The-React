import conf from '../conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client);
    }

    // Create new account and auto-login
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name);

            if (userAccount) {
                // auto-login after account creation
                return this.login({ email, password });
            } else {
                return userAccount; // fallback
            }
        } catch (error) {
            // throw error; // handled in the calling function
            console.log("Appwrite service :: createAccount :: errro", error)
        }
    }

    // Login
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            // throw error;
            console.log("Appwrite service :: login :: errro", error)
        }
    }

    //if we have an already existing account to check  (get => read docs from appwrite)
    async getCurrentUser(){
        try {
            return await this.account.get()
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: errro", error)
        }
        return null; // this is because if there is nothing to return for (return await this.account.get()), we return null
    }

    // Logout account  (deleteSession and deleteSessions => read docs from appwrite  --- )
    async logout(){
        try {
            return await this.account.deleteSessions();
        } catch (error) {
            console.log("Appwrite service :: logout :: errro", error)
        }
    }
}

// Single instance
const authService = new AuthService();
export default authService;



//Note: I can use this code in the future if i have to make (authentication requests) to the backend server