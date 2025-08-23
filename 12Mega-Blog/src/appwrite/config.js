import conf from '../conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    Databases;
    bucket; //storage
}



const service = new Service();
export default service;