import conf from '../conf.js';
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket; //storage

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
            this.databases = new Databases(this.client);
            this.bucket = new Storage(this.client) //bucket = stroage // bucket is just a variable name for storage
    }

    async createPost({title, slug, content, featuredImage, status, userId}){  // slug is used here as document id   
        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status, 
                    userId,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: errro", error)
        }
    }

    async updatePost(slug, {title, content, featuredImage, status}){ // slug is used here as document id for finding the post and editing/updation
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: errro", error)
        }
    }
}



const service = new Service();
export default service;