//appwrite database, file upload, and custom queries
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

    async createPost({title, slug, content, featuredImage, status, userId}){  // slug is used here as document id    // read appwrite docs => databases/documents#create-documents
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

    async deletePost(slug){  //this only needs slug // here slug is used as document id
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: errro", error)
            return false
        }
    }

    //searching for single post
    async getPost(slug){  //slug as id
        try {
            return await this.databases.getDocument( // appwrite docs => database-api-get document
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: errro", error)
            return false
        }
    }

    //listing all posts with status == active
    async getPosts(querues = [Query.equal("status", "active")]){
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                querues,
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: errro", error)
            return false
        }
    }

    // ##file upload sevice

    //uploading a file:
    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: errro", error)
            return false
        }
    }

    //deleting a file:
    async deleteFile(fileId){  // this file id came from after uploading the file with ID.unique(), above
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId  
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: uploadFile :: errro", error)
            return false
        }
    }

    //Get a file preview 
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}



const service = new Service();
export default service;