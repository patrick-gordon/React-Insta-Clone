import React from "react";
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    return(
       <div className='post-container'>
           {/* {props.posts.map(item => (< item={item} />))} */}
           <CommentSection />
        </div>
    )
}

export default PostContainer