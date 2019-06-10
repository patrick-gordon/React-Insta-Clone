import React from "react";
import CommentSection from './CommentSection';



const PostContainer = props => {
    return(
        <div>
            {props.dummydata.map(data => (
                return(
                    <CommentSection comment={data.comments} />
                )

            ))}
        </div>
    )
}