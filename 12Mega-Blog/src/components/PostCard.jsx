//step 9

import React from 'react'
import appwriteService from "../appwrite/config"  //we will be using filepreview from that file
import { Link } from 'react-router-dom'

function PostCard({$id, title, featuredImage}) { // $id is the default behaviour of appwrite so we need to use $ sign

  return (
    <Link to={`/post/${$id}`}> 
         <div className='w-full bg-gray-100 rounded-xl p-4'>
            <div className='w-full justify-center mb-4'>
                <img src={appwriteService.getFilePreview(featuredImage)} alt={title}  //the getFilePreview from appwite/config will return an url using the id of the file from the bucket
                className='rounded-xl' />

            </div>
            <h2
            className='text-xl font-bold'
            >{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard

 // <img src={appwriteService.getFilePreview(featuredImage)} alt={title} // appwriteService bata getFilePreview use garera  
