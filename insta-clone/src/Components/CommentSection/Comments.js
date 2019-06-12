import React from 'react'

export default function Comments(props) {
    return (
        <div>
            <p>{props.comments.username} </p>
            <p>{props.comments.text} </p>
        </div>
    )
}
