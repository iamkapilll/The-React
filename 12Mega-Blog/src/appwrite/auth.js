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
            throw error; // handled in the calling function
        }
    }

    // Login
    async login({ email, password }) {
        try {
            return await this.account.createEmailSession(email, password);
        } catch (error) {
            throw error;
        }
    }
}

// Single instance
const authService = new AuthService();
export default authService;
