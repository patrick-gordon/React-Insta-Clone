import React from 'react';

const PostHeader = props => {
    return(
        <div className='post-header'>
            <img src={props.posts.thumbnailUrl} alt={props.posts.username} />
            <h2>{props.posts.username}</h2>
        </div>
    )
}
export default PostHeader