import React from 'react';

const CommentSection = props =>{
    return(
        <div className='comments'>
            <p>{props.comments}</p>
        </div>
    )
}

export default CommentSection