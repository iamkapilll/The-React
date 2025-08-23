import conf from '../conf.js'
import {Client, Account, ID} from "appwrite";


export class AuthService {
    client = new Client();
    account;
}

const authService = new AuthService();

export default authService