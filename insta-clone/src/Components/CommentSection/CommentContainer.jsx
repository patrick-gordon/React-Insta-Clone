import React, { Component } from 'react'
import Comments from './Comments';
import CommentForm from './CommentForm';

export default class CommentContainer extends Component {
    constructor(props){
        super(props)
        this.state = {
            comments: props.posts.comments,
            commentText: ''
        }
        
    }
    changeHandler = e => {
        console.log(e.target.name)
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render() {
        // console.log(this.state.comments)
        return (
            <>
                {this.state.comments.map(comment => (
                    <Comments comments={comment} />
                ))}
                <CommentForm commentText={this.state.commentText} changeHandler={this.changeHandler}/>
            </>
        )
    }

}