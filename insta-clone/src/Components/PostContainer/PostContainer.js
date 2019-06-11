import React from "react";
import Post from './Post';
import PostHeader from './PostHeader';



const PostContainer = props => {
    return(
       <div className='post-container'>
           {props.posts.map(post => {
               return(
                   <div>
                        <Post post={post} />
                   </div>
               );
           })}
          
        </div>
           
    )
}

export default PostContainer