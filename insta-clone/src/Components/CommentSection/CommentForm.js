import React from 'react'

export default function CommentForm(props) {
    return (
        <div>
            <form>
                <input 
                    name='commentText'
                    value={props.commentText}
                    placeholder='Add a comment'
                    type='text'
                    onChange={props.changeHandler}
                    />
            </form>
            
        </div>
    )
}
