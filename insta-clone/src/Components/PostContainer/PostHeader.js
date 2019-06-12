import React from 'react';

const PostHeader = props => {
    console.log(props.post)
    return(
        <div className='post-header'>
            <img src={props.post.thumbnailUrl} alt={props.post.username} />
            <h2>{props.post.username}</h2>
        </div>
    )
}
export default PostHeader