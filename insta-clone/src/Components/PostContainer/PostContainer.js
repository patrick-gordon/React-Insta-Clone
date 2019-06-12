import React from "react";
import './PostContainer.css'
import PostHeader from "./PostHeader";
import CommentContainer from '../CommentSection/CommentContainer';



const PostContainer = props => {
    return(
       <div className='post-container'>
           {props.posts.map(post => (
                   <div>
                        <PostHeader post={post} />
                        <CommentContainer posts={post} />
                   </div>
           ))}
          
        </div>
           
    )
}

export default PostContainer