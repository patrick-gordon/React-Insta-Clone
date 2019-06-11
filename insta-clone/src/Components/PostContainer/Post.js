import React from 'react';
import PostHeader from './PostHeader';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return(
        <div className='post'>
            <PostHeader posts={props.post} />
            <img className='featured' src={props.post.imageUrl} alt={props.post.username} />
            <CommentSection post={props.post} />
        </div>
    )
}

export default Post