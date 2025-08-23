// src/appwrite/auth.js
import conf from '../conf.js'
import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client();
    account;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)       // API endpoint (e.g., https://cloud.appwrite.io/v1)
            .setProject(conf.appwriteProjectId); // Project ID
        this.account = new Account(this.client);
    }

    // ✅ Create new account
    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(
                ID.unique(),
                email,
                password,
                name
            );
            if(userAccount){
                // return userAccount; call another function like account created then go for login
            }else{
                return userAccount
            }
            
        } catch (error) {
            throw error;
            // so the red line error is due to the throw error; we can handle it in the calling function
        }
    }

}

// Create a single instance to use across app
const authService = new AuthService();

export default authService;

